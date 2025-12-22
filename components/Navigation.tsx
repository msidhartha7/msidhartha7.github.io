'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/travel', label: 'Travel' },
  { href: '/books', label: 'Books' },
  { href: '/goals', label: 'Goals' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-terminal-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-mono text-terminal-green hover:text-terminal-green/80 transition-colors">
            <span className="text-sm">$ sidhartha</span>
          </Link>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded text-sm font-mono transition-colors ${
                    isActive
                      ? 'text-terminal-green bg-terminal-green/10'
                      : 'text-gray-400 hover:text-terminal-green hover:bg-terminal-green/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button className="text-terminal-green font-mono text-sm">menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
