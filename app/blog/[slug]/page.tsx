import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CodeBlock from '@/components/SyntaxHighlighter';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Sidhartha Mallick`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Simple markdown to HTML converter (basic implementation)
  const markdownToHtml = (markdown: string) => {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-10 mb-6">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mt-12 mb-8">$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="text-terminal-green">$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em class="text-gray-300">$1</em>');

    // Code blocks (handled separately)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
      return `__CODE_BLOCK__${lang || 'text'}__${code.trim()}__CODE_BLOCK__`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code class="px-2 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green font-mono text-sm">$1</code>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-terminal-green hover:text-terminal-green/80 underline" target="_blank" rel="noopener noreferrer">$1</a>');

    // Paragraphs
    html = html.split('\n\n').map((para) => {
      if (para.trim() && !para.startsWith('<') && !para.includes('__CODE_BLOCK__')) {
        return `<p class="text-gray-300 leading-relaxed mb-4">${para.trim()}</p>`;
      }
      return para;
    }).join('\n');

    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li class="text-gray-300 mb-2 ml-4">$1</li>');
    html = html.replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>');

    return html;
  };

  const processedContent = markdownToHtml(post.content);
  const parts = processedContent.split(/__CODE_BLOCK__(\w+)__([\s\S]*?)__CODE_BLOCK__/);

  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-block mb-8 text-terminal-green hover:text-terminal-green/80 font-mono text-sm transition-colors"
        >
          ← Back to Blog
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-400 font-mono text-sm mb-6">
            <span>{formattedDate}</span>
            {post.readingTime && <span>• {post.readingTime} min read</span>}
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          {parts.map((part, index) => {
            if (index % 3 === 0) {
              // Regular content
              return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
            } else if (index % 3 === 1) {
              // Language
              const language = part;
              const code = parts[index + 1];
              return (
                <CodeBlock
                  key={index}
                  language={language}
                  code={code}
                />
              );
            }
            return null;
          })}
        </div>
      </article>
    </div>
  );
}
