import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import CodeSnippet from '@/components/CodeSnippet';

export const metadata = {
  title: 'Projects | Sidhartha Mallick',
  description: 'Completed projects, work in progress, and project ideas.',
};

export default function ProjectsPage() {
  const completedProjects = projects.filter((p) => p.status === 'completed');
  const inProgressProjects = projects.filter((p) => p.status === 'in-progress');
  const projectIdeas = projects.filter((p) => p.status === 'idea');

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <CodeSnippet
            code={`$ ls projects/
completed/  in-progress/  ideas/`}
            language="bash"
            className="mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-400 font-mono mb-4">
            $ cat projects/README.md
          </p>
          <p className="text-gray-300 max-w-2xl">
            A collection of completed projects, work in progress, and ideas for the future.
            Building products that actually work.
          </p>
        </div>

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cd completed/
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* In Progress */}
        {inProgressProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cd in-progress/
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {inProgressProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Project Ideas */}
        {projectIdeas.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cd ideas/
            </h2>
            <p className="text-gray-400 mb-6 font-mono text-sm">
              # Future projects to build
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {projectIdeas.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
