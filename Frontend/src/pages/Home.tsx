const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#0c0c0e] text-white overflow-hidden flex items-center justify-center">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#23005C] opacity-40 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-0" 
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        <div className="space-y-6 sm:space-y-8 text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Turn scattered work into{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent">
              clear progress.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed">
            TaskFlow gives small teams a simple visual workspace to organize tasks, track priorities, and keep work moving. Built for focus, designed for speed.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 w-full">
            <button className="w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-white text-xs sm:text-base font-semibold px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg hover:shadow-cyan-500/10 hover:opacity-95 transition-all cursor-pointer">
              Open Dashboard
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="w-auto bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-xs sm:text-base font-semibold px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all text-center cursor-pointer">
              Explore Features
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 lg:pt-6">
            <div className="flex -space-x-3">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-700 border-2 border-[#0c0c0e] text-zinc-400 flex items-center justify-center text-xs font-bold">U1</span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-700 border-2 border-[#0c0c0e] text-zinc-400 flex items-center justify-center text-xs font-bold">U2</span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/50 border-2 border-[#0c0c0e] text-zinc-500 flex items-center justify-center text-xs sm:text-sm font-light">+</span>
            </div>
            <span className="text-zinc-500 text-xs sm:text-sm font-medium">
              Trusted by highly focused teams.
            </span>
          </div>
        </div>
        <div className="relative border border-zinc-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-[#111114]/90 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
   
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <h2 className="text-base sm:text-lg font-semibold text-zinc-300">To Do</h2>
                </div>
                <span className="text-xs sm:text-sm text-zinc-500">3</span>
              </div>
              <div className="bg-zinc-900/60 p-4 rounded-xl space-y-3 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors text-left">
                <span className="inline-block bg-red-950/70 text-red-300 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  High
                </span>
                <p className="text-sm sm:text-base font-medium text-white">Design System V2</p>
                <div className="flex items-center justify-between text-zinc-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  <span className="text-xs font-semibold">JD</span>
                </div>
              </div>
              <div className="bg-zinc-900/60 p-4 rounded-xl space-y-3 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors text-left">
                <span className="inline-block bg-teal-950/70 text-teal-300 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Low
                </span>
                <p className="text-sm sm:text-base font-medium text-white">Update API Docs</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <h2 className="text-base sm:text-lg font-semibold text-zinc-300">In Progress</h2>
                </div>
                <span className="text-xs sm:text-sm text-zinc-500">1</span>
              </div>

              <div className="relative bg-zinc-900/60 p-4 rounded-xl space-y-3 border border-zinc-800/60 before:absolute before:left-[-1px] before:top-4 before:bottom-4 before:w-[3px] before:bg-[#9333ea] before:rounded-full hover:border-zinc-700/60 transition-colors text-left">
                <span className="inline-block bg-[#9333ea]/20 text-[#c084fc] text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Medium
                </span>
                <p className="text-sm sm:text-base font-medium text-white">Implement Auth Flow</p>
                
                <div className="space-y-2 pt-1">
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-gradient-to-r from-[#9333ea] to-[#06b6d4]"></div>
                  </div>
                  <div className="flex items-center justify-between text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                      <span className="text-xs font-medium text-zinc-400">3/5 tasks</span>
                    </div>
                    <span className="text-xs font-semibold">ME</span>
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