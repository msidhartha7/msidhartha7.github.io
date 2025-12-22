import Link from 'next/link';
import { projects } from '@/data/projects';
import { socialLinks } from '@/data/social';
import ProjectCard from '@/components/ProjectCard';
import TechStack from '@/components/TechStack';
import CodeSnippet from '@/components/CodeSnippet';

const techStack = [
  'Flutter',
  'iOS',
  'React Native',
  'React',
  'Golang',
  'Node.js',
  'Python',
  'Qdrant',
  'n8n',
];

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <CodeSnippet
            code={`$ whoami
Sidhartha Mallick

$ cat about.txt
Mobile Engineer & Builder
Build; Measure; Learn
Flutter, iOS @ GoPay`}
            language="bash"
            className="mb-8"
          />
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Sidhartha Mallick
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-mono">
              Mobile Engineer & Builder <span className="text-terminal-green">||</span> Build; Measure; Learn
            </p>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              I live by a simple loop: <span className="text-terminal-green font-mono">Build; Measure; Learn</span>.
              For me, coding isn&apos;t just about syntax; it&apos;s about shipping products that{' '}
              <span className="text-terminal-green">actually work</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
          $ cat current_status.txt
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              GoTo Group (GoPay)
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting seamless mobile experiences (iOS & Flutter). I focus deeply on{' '}
              <span className="text-terminal-green">smooth UIs and scalable architectures</span>.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              Experience: Over 3 years deep in the mobile ecosystem
            </p>
          </div>
          <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Building @ appsflow.io
            </h3>
            <p className="text-gray-400 mb-4">
              Currently in <span className="text-terminal-green">stealth mode</span>.
            </p>
          </div>
          <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-3">
              Founder @ Investorsync
            </h3>
            <p className="text-gray-400 mb-4">
              Built to crack the code on fundraising by aggregating a database of{' '}
              <span className="text-terminal-green">100k+ investors</span> for startups.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              Note: I&apos;m happy to share my investor database to help founders—DM me!
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
          $ ls tech_stack/
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Mobile</h3>
            <TechStack technologies={['Flutter', 'iOS', 'React Native', 'React']} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Backend</h3>
            <TechStack technologies={['Golang', 'Node.js', 'Python']} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tinkering</h3>
            <TechStack technologies={['Qdrant', 'n8n']} />
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
          $ cat featured_work.txt
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
          $ cd sections/
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            href="/blog"
            className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all hover:shadow-lg hover:shadow-terminal-green/10 group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-terminal-green transition-colors mb-2">
              Blog
            </h3>
            <p className="text-sm text-gray-400 font-mono">Articles & thoughts</p>
          </Link>
          <Link
            href="/projects"
            className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all hover:shadow-lg hover:shadow-terminal-green/10 group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-terminal-green transition-colors mb-2">
              Projects
            </h3>
            <p className="text-sm text-gray-400 font-mono">Work & ideas</p>
          </Link>
          <Link
            href="/experience"
            className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all hover:shadow-lg hover:shadow-terminal-green/10 group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-terminal-green transition-colors mb-2">
              Experience
            </h3>
            <p className="text-sm text-gray-400 font-mono">Work history</p>
          </Link>
          <Link
            href="/travel"
            className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all hover:shadow-lg hover:shadow-terminal-green/10 group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-terminal-green transition-colors mb-2">
              Travel
            </h3>
            <p className="text-sm text-gray-400 font-mono">Adventures</p>
          </Link>
          <Link
            href="/books"
            className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all hover:shadow-lg hover:shadow-terminal-green/10 group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-terminal-green transition-colors mb-2">
              Books
            </h3>
            <p className="text-sm text-gray-400 font-mono">Reading list</p>
          </Link>
          <Link
            href="/goals"
            className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all hover:shadow-lg hover:shadow-terminal-green/10 group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-terminal-green transition-colors mb-2">
              Goals
            </h3>
            <p className="text-sm text-gray-400 font-mono">Aspirations</p>
          </Link>
        </div>
      </section>

      {/* Social Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
          $ cat social_links.txt
        </h2>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="px-4 py-2 border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg hover:border-terminal-green/40 hover:bg-terminal-green/10 transition-all font-mono text-sm"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
