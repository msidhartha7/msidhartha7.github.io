import Link from 'next/link';
import CodeSnippet from '@/components/CodeSnippet';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <CodeSnippet
          code={`$ cat error.log
404: Page Not Found
Location: unknown`}
          language="bash"
          className="mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4 font-mono">404</h1>
        <p className="text-xl text-gray-400 mb-8 font-mono">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg hover:border-terminal-green/40 transition-all font-mono text-terminal-green"
        >
          $ cd ~
        </Link>
      </div>
    </div>
  );
}
