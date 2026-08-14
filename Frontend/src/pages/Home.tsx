
const Home = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Turn scattered work into{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent">
              clear progress.
            </span>
          </h1>

          {/* Paragraph Text */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed">
            TaskFlow gives small teams a simple visual workspace to organize tasks, track priorities, and keep work moving. Built for focus, designed for speed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            {/* Gradient Primary Button */}
            <button className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-cyan-500/10 hover:opacity-95 transition-all">
              Open Dashboard
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Ghost / Border Button */}
            <button className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all text-center">
              Explore Features
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6 lg:pt-8">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-700 border-2 border-[#0c0c0e] text-zinc-400 flex items-center justify-center text-xs font-bold">U1</span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-700 border-2 border-[#0c0c0e] text-zinc-400 flex items-center justify-center text-xs font-bold">U2</span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/50 border-2 border-[#0c0c0e] text-zinc-500 flex items-center justify-center text-xs sm:text-sm font-light">+</span>
            </div>
            <span className="text-zinc-500 text-sm sm:text-base font-medium">Trusted by highly focused teams.</span>
          </div>
        </div>

        {/* Right Column - UI Preview */}
        <div className="relative border border-zinc-800/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 bg-[#111114]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            
            {/* 'To Do' Column */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-300">To Do</h3>
                </div>
                <span className="text-sm sm:text-base text-zinc-500">3</span>
              </div>

              {/* Task Card 1 */}
              <div className="bg-zinc-900/60 p-4 sm:p-5 rounded-2xl space-y-3 sm:space-y-4 border border-zinc-800/60">
                <span className="inline-block bg-red-950/70 text-red-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                  High
                </span>
                <p className="text-base sm:text-lg font-medium text-white">Design System V2</p>
                <div className="flex items-center justify-between text-zinc-600">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  <span className="text-xs">JD</span>
                </div>
              </div>

              {/* Task Card 2 */}
              <div className="bg-zinc-900/60 p-4 sm:p-5 rounded-2xl space-y-3 border border-zinc-800/60">
                <span className="inline-block bg-teal-950/70 text-teal-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                  Low
                </span>
                <p className="text-base sm:text-lg font-medium text-white">Update API Docs</p>
              </div>
            </div>

            {/* 'In Progress' Column */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-300">In Progress</h3>
                </div>
                <span className="text-sm sm:text-base text-zinc-500">1</span>
              </div>

              {/* Task Card 3 (In Progress) */}
              <div className="relative bg-zinc-900/60 p-4 sm:p-5 rounded-2xl space-y-3 sm:space-y-4 border border-zinc-800/60 before:absolute before:left-[-1px] before:top-4 before:bottom-4 before:w-[3px] before:bg-[#9333ea] before:rounded-full">
                <span className="inline-block bg-[#9333ea]/20 text-[#c084fc] text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                  Medium
                </span>
                <p className="text-base sm:text-lg font-medium text-white">Implement Auth Flow</p>
                
                {/* Progress Bar and Details */}
                <div className="space-y-2 pt-1">
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-gradient-to-r from-[#9333ea] to-[#06b6d4]"></div>
                  </div>
                  <div className="flex items-center justify-between text-zinc-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                      <span className="text-xs sm:text-sm font-medium text-zinc-400">3/5 tasks</span>
                    </div>
                    <span className="text-xs">ME</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;