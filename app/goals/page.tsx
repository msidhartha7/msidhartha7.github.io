import { goals } from '@/data/goals';
import CodeSnippet from '@/components/CodeSnippet';

export const metadata = {
  title: 'Goals | Sidhartha Mallick',
  description: 'Personal and professional goals and aspirations.',
};

export default function GoalsPage() {
  const personalGoals = goals.filter((g) => g.category === 'personal');
  const professionalGoals = goals.filter((g) => g.category === 'professional');
  const learningGoals = goals.filter((g) => g.category === 'learning');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'in-progress':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓ Completed';
      case 'in-progress':
        return '⟳ In Progress';
      default:
        return '○ Not Started';
    }
  };

  const GoalCard = ({ goal }: { goal: typeof goals[0] }) => (
    <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-6 hover:border-terminal-green/40 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{goal.title}</h3>
        <span className={`px-3 py-1 rounded text-xs font-mono border ${getStatusColor(goal.status)}`}>
          {getStatusLabel(goal.status)}
        </span>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">{goal.description}</p>
      
      {goal.progress !== undefined && goal.status === 'in-progress' && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400 font-mono">Progress</span>
            <span className="text-sm text-terminal-green font-mono">{goal.progress}%</span>
          </div>
          <div className="w-full bg-terminal-green/10 rounded-full h-2">
            <div
              className="bg-terminal-green h-2 rounded-full transition-all"
              style={{ width: `${goal.progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
        <span className="px-2 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded">
          {goal.category}
        </span>
        {goal.targetDate && (
          <span>Target: {new Date(goal.targetDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
        )}
        {goal.completedDate && (
          <span>Completed: {new Date(goal.completedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <CodeSnippet
            code={`$ cat goals.txt
Personal & Professional Goals`}
            language="bash"
            className="mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Goals
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Tracking my personal and professional aspirations. Building towards a better future, one goal at a time.
          </p>
        </div>

        {/* Professional Goals */}
        {professionalGoals.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cat professional_goals.txt
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {professionalGoals.map((goal) => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>
          </section>
        )}

        {/* Learning Goals */}
        {learningGoals.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cat learning_goals.txt
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {learningGoals.map((goal) => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>
          </section>
        )}

        {/* Personal Goals */}
        {personalGoals.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-terminal-green font-mono">
              $ cat personal_goals.txt
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalGoals.map((goal) => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>
          </section>
        )}

        {goals.length === 0 && (
          <div className="border border-terminal-green/20 bg-black/40 backdrop-blur-sm rounded-lg p-12 text-center">
            <p className="text-gray-400 font-mono">Goals coming soon!</p>
          </div>
        )}
      </section>
    </div>
  );
}
