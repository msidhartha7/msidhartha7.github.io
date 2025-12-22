import { travels } from '@/data/travel';
import CodeSnippet from '@/components/CodeSnippet';
import { format } from 'date-fns';
import Image from 'next/image';

export const metadata = {
  title: 'Travel | Sidhartha Mallick',
  description: 'Travel experiences and adventures around the world.',
};

export default function TravelPage() {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString + '-01');
      return format(date, 'MMMM yyyy');
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <CodeSnippet
            code={`$ cat travel_log.txt
Travel Experiences & Adventures`}
            language="bash"
            className="mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Travel
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Exploring new places, cultures, and experiences. Documenting my journey around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {travels.map((travel) => (
            <div
              key={travel.id}
              className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:border-terminal-green/40 transition-all"
            >
              {travel.images && travel.images.length > 0 ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={travel.images[0]}
                    alt={travel.location}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="h-48 w-full bg-terminal-green/10 flex items-center justify-center">
                  <span className="text-terminal-green/50 font-mono text-sm">
                    {travel.location}
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">{travel.location}</h2>
                    <p className="text-gray-400 font-mono text-sm">{travel.country}</p>
                  </div>
                  <span className="text-gray-500 font-mono text-xs whitespace-nowrap">
                    {formatDate(travel.date)}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">{travel.description}</p>
                
                {travel.tags && travel.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {travel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {travels.length === 0 && (
          <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-12 text-center">
            <p className="text-gray-400 font-mono">More travel stories coming soon!</p>
          </div>
        )}
      </section>
    </div>
  );
}
