interface TechStackProps {
  technologies: string[];
  className?: string;
}

export default function TechStack({ technologies, className = '' }: TechStackProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green text-xs font-mono hover:bg-terminal-green/20 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
