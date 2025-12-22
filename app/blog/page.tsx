import { getBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blog | Sidhartha Mallick',
  description: 'Technical articles, thoughts, and learnings about mobile development, architecture, and more.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-400 font-mono">
            $ cat blog/*.md
          </p>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Technical articles, thoughts, and learnings about mobile development, architecture, and building products.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-12 text-center">
            <p className="text-gray-400 font-mono">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
                readingTime={post.readingTime}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
