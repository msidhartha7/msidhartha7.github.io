'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SyntaxHighlighterProps {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      className="rounded-lg my-6"
      customStyle={{
        backgroundColor: '#000000',
        border: '1px solid rgba(0, 217, 255, 0.2)',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
