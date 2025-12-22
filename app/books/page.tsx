import { books } from '@/data/books';
import CodeSnippet from '@/components/CodeSnippet';
import { format } from 'date-fns';

export const metadata = {
  title: 'Books | Sidhartha Mallick',
  description: 'Reading list and book recommendations.',
};

export default function BooksPage() {
  const reading = books.filter((b) => b.status === 'reading');
  const completed = books.filter((b) => b.status === 'completed');
  const wantToRead = books.filter((b) => b.status === 'want-to-read');

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString + '-01');
      return format(date, 'MMM yyyy');
    } catch {
      return dateString;
    }
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const BookCard = ({ book }: { book: typeof books[0] }) => (
    <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all">
      <div className="flex items-start gap-4">
        {book.cover ? (
          <div className="w-20 h-28 bg-terminal-green/10 rounded flex-shrink-0 flex items-center justify-center">
            <span className="text-terminal-green/50 font-mono text-xs text-center px-2">
              {book.title.substring(0, 20)}
            </span>
          </div>
        ) : (
          <div className="w-20 h-28 bg-terminal-green/10 rounded flex-shrink-0 flex items-center justify-center">
            <span className="text-terminal-green/50 font-mono text-xs text-center px-2">
              {book.title.substring(0, 20)}
            </span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{book.title}</h3>
          <p className="text-gray-400 text-sm mb-2">by {book.author}</p>
          {book.genre && (
            <span className="inline-block px-2 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green text-xs font-mono mb-2">
              {book.genre}
            </span>
          )}
          {book.rating && (
            <p className="text-terminal-green text-sm font-mono mb-2">
              {renderStars(book.rating)}
            </p>
          )}
          {book.review && (
            <p className="text-gray-300 text-sm leading-relaxed mt-2">{book.review}</p>
          )}
          <div className="mt-3 text-xs text-gray-500 font-mono">
            {book.startedDate && <span>Started: {formatDate(book.startedDate)}</span>}
            {book.completedDate && <span className="ml-4">Completed: {formatDate(book.completedDate)}</span>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <CodeSnippet
            code={`$ cat reading_list.txt
Books I've Read & Want to Read`}
            language="bash"
            className="mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Books
          </h1>
          <p className="text-gray-300 max-w-2xl">
            A collection of books I&apos;ve read, am currently reading, and want to read.
            Mostly focused on software engineering, architecture, and systems design.
          </p>
        </div>

        {/* Currently Reading */}
        {reading.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cat currently_reading.txt
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {reading.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* Completed */}
        {completed.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cat completed.txt
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {completed.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* Want to Read */}
        {wantToRead.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cat want_to_read.txt
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {wantToRead.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {books.length === 0 && (
          <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-12 text-center">
            <p className="text-gray-400 font-mono">Reading list coming soon!</p>
          </div>
        )}
      </section>
    </div>
  );
}
