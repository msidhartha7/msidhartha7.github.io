import { experiences } from '@/data/experience';
import TechStack from '@/components/TechStack';
import CodeSnippet from '@/components/CodeSnippet';
import { format } from 'date-fns';

export const metadata = {
  title: 'Experience | Sidhartha Mallick',
  description: 'Work experience and professional journey.',
};

export default function ExperiencePage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString + '-01');
    return format(date, 'MMM yyyy');
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <CodeSnippet
            code={`$ cat experience.txt
Work Experience Timeline`}
            language="bash"
            className="mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Over 3 years of experience building mobile applications and scalable architectures.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="border-l-2 border-terminal-green/30 pl-8 relative"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-terminal-green rounded-full border-2 border-black" />
              
              <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">{exp.role}</h2>
                    <h3 className="text-lg text-terminal-green mb-2">{exp.company}</h3>
                    <p className="text-gray-400 font-mono text-sm mb-2">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 font-mono text-sm">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    </p>
                    {exp.current && (
                      <span className="inline-block mt-2 px-3 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green text-xs font-mono">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <ul className="space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                        <span className="text-terminal-green mr-2 font-mono">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-4 pt-4 border-t border-terminal-green/20">
                    <h4 className="text-sm font-semibold text-terminal-green mb-2 font-mono">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start">
                          <span className="text-terminal-green mr-2 font-mono">→</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-terminal-green/20">
                  <TechStack technologies={exp.techStack} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
