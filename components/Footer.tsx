import { socialLinks } from '@/data/social';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-terminal-green/20 bg-black/40 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-mono text-terminal-green mb-4">Connect</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block text-gray-400 hover:text-terminal-green transition-colors font-mono text-sm"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-terminal-green mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="/blog" className="block text-gray-400 hover:text-terminal-green transition-colors font-mono text-sm">
                Blog
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-terminal-green transition-colors font-mono text-sm">
                Projects
              </a>
              <a href="/experience" className="block text-gray-400 hover:text-terminal-green transition-colors font-mono text-sm">
                Experience
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-terminal-green mb-4">About</h3>
            <p className="text-gray-400 text-sm font-mono">
              Building products that actually work.
              <br />
              <span className="text-terminal-green">Build; Measure; Learn</span>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-terminal-green/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-mono">
            © {currentYear} Sidhartha Mallick. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <img
              src="https://komarev.com/ghpvc/?username=ahtrahdis7&color=007fff"
              alt="Profile views"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
