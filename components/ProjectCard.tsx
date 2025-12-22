import Link from 'next/link';
import { Project } from '@/types';
import TechStack from './TechStack';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    completed: 'text-green-400',
    'in-progress': 'text-yellow-400',
    idea: 'text-blue-400',
  };

  const statusLabels = {
    completed: '✓ Completed',
    'in-progress': '⟳ In Progress',
    idea: '💡 Idea',
  };

  return (
    <div className="group border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all hover:shadow-lg hover:shadow-terminal-green/10">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-terminal-green transition-colors">
          {project.title}
        </h3>
        <span className={`text-xs font-mono ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>
      </div>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
      <TechStack technologies={project.techStack} className="mb-4" />
      <div className="flex items-center gap-4 mt-4">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-green hover:text-terminal-green/80 font-mono text-sm transition-colors"
          >
            [github]
          </a>
        )}
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-green hover:text-terminal-green/80 font-mono text-sm transition-colors"
          >
            [live]
          </a>
        )}
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-green hover:text-terminal-green/80 font-mono text-sm transition-colors"
          >
            [demo]
          </a>
        )}
        {project.year && (
          <span className="text-gray-500 font-mono text-xs ml-auto">{project.year}</span>
        )}
      </div>
    </div>
  );
}
