'use client';

interface CodeSnippetProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeSnippet({ code, language = 'bash', className = '' }: CodeSnippetProps) {
  return (
    <div className={`border border-terminal-green/20 bg-black/60 rounded-lg overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-terminal-green/10 border-b border-terminal-green/20">
        <span className="text-terminal-green text-xs font-mono">{language}</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm text-terminal-green whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
