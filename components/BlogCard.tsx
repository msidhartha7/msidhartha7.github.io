import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime?: number;
}

export default function BlogCard({ slug, title, excerpt, date, tags, readingTime }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${slug}`}>
      <article className="group border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all hover:shadow-lg hover:shadow-terminal-green/10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-terminal-green transition-colors">
            {title}
          </h3>
          <span className="text-gray-500 font-mono text-xs whitespace-nowrap ml-4">
            {formattedDate}
          </span>
        </div>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          {readingTime && (
            <span className="text-gray-500 font-mono text-xs">{readingTime} min read</span>
          )}
        </div>
      </article>
    </Link>
  );
}
