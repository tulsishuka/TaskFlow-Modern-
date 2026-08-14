

import{ useState } from 'react';
import { 
  Search, 
  Plus, 
  Calendar, 
  MoreHorizontal, 
  CheckCircle2 
} from 'lucide-react';
import AddTask from './AddTask'; 

const MyBoard = () => {
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white p-6 sm:p-8 lg:p-10 font-sans">
      
      {/* BOARD CONTROL SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
     

        {/* Controls: Search, Priority Filter, Add Task Button */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 sm:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full bg-[#141418] border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Priority Filter Buttons */}
          <div className="bg-[#141418] border border-zinc-800 rounded-xl p-1 flex items-center gap-1">
            {['All', 'High', 'Med', 'Low'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === item
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Add Task Trigger */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-95 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg transition-all"
          >
            <Plus size={16} />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* KANBAN BOARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* COLUMN 1: TO DO */}
        <div className="bg-[#111115] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <h3 className="font-semibold text-zinc-200">To Do</h3>
            </div>
            <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full font-medium">
              3
            </span>
          </div>

          {/* Card 1 */}
          <div className="bg-[#17171c] border border-zinc-800 rounded-xl p-4 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="bg-red-950/70 text-red-400 border border-red-800/40 text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                High
              </span>
              <button className="text-zinc-500 hover:text-zinc-300">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Design landing page</h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed line-clamp-2">
                Create high-fidelity mockups for the new product launch landing page focusing...
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-xs text-zinc-500">
              <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                F
              </div>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Calendar size={13} />
                Today
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#17171c] border border-zinc-800 rounded-xl p-4 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="bg-cyan-950/70 text-cyan-400 border border-cyan-800/40 text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                Med
              </span>
              <button className="text-zinc-500 hover:text-zinc-300">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Write copy for hero section</h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed line-clamp-2">
                Draft compelling headlines and sub-headlines for the main hero area.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-xs text-zinc-500">
              <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                JD
              </div>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Calendar size={13} />
                Oct 24
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#17171c] border border-zinc-800 rounded-xl p-4 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="bg-zinc-800 text-zinc-400 border border-zinc-700/60 text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                Low
              </span>
              <button className="text-zinc-500 hover:text-zinc-300">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Gather asset references</h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed line-clamp-2">
                Collect competitive examples and visual references for the design team.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-xs text-zinc-500">
              <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                ME
              </div>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Calendar size={13} />
                Oct 25
              </span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: IN PROGRESS */}
        <div className="bg-[#111115] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <h3 className="font-semibold text-zinc-200">In Progress</h3>
            </div>
            <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full font-medium">
              2
            </span>
          </div>

          {/* Active Focus Card */}
          <div className="relative bg-[#17171c] border border-zinc-800 rounded-xl p-4 space-y-3 hover:border-zinc-700 transition-all before:absolute before:left-[-1px] before:top-3 before:bottom-3 before:w-[3px] before:bg-purple-500 before:rounded-r">
            <div className="flex items-center justify-between">
              <span className="bg-cyan-950/70 text-cyan-400 border border-cyan-800/40 text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                Med
              </span>
              <button className="text-zinc-500 hover:text-zinc-300">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Set up project repository</h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                Initialize Git repo, configure ESLint, Prettier, and basic CI/CD pipeline.
              </p>
            </div>
            {/* Progress Indicator */}
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between text-xs">
                <div className="w-4 h-4 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
                <span className="text-zinc-400 font-medium">4/5 tasks</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#17171c] border border-zinc-800 rounded-xl p-4 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="bg-red-950/70 text-red-400 border border-red-800/40 text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                High
              </span>
              <button className="text-zinc-500 hover:text-zinc-300">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Finalize API schema</h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                Review and approve the GraphQL schema with backend team.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-xs text-zinc-500">
              <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                MX
              </div>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Calendar size={13} />
                Tomorrow
              </span>
            </div>
          </div>
        </div>

        {/* COLUMN 3: DONE */}
        <div className="bg-[#111115] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <h3 className="font-semibold text-zinc-200">Done</h3>
            </div>
            <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full font-medium">
              4
            </span>
          </div>

          {/* Completed Items */}
          {[
            'Kickoff meeting',
            'Define user personas',
            'Create moodboard',
            'Competitor analysis',
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-[#17171c] border border-zinc-800/80 rounded-xl p-3.5 flex items-center gap-3 hover:border-zinc-700 transition-all text-zinc-300"
            >
              <CheckCircle2 size={18} className="text-purple-400 shrink-0" />
              <span className="text-sm font-medium">{title}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ADD TASK MODAL OVERLAY */}
      <AddTask 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default MyBoard;