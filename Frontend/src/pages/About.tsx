
const About = () => {
  const features = [
    {
      title: 'Organize',
      description:
        'Capture tasks instantly. Structure your workspace with flexible boards, lists, and deep hierarchies.',
      icon: (
        <svg
          className="w-5 h-5 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
    },
    {
      title: 'Prioritize',
      description:
        'Surface what matters. Use visual tags, priority levels, and custom views to focus on the immediate.',
      icon: (
        <svg
          className="w-5 h-5 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 4h13M3 8h9M3 12h5"
          />
        </svg>
      ),
    },
    {
      title: 'Move Work Forward',
      description:
        'Seamlessly transition tasks through stages. Clear progress tracking keeps momentum alive.',
      icon: (
        <svg
          className="w-5 h-5 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: 'Stay Focused',
      description:
        'A distraction-free, deep-space aesthetic designed to reduce eye strain during long sessions.',
      icon: (
        <svg
          className="w-5 h-5 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white flex flex-col justify-between">
      {/* Main Content Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need.{' '}
            <span className="text-zinc-500 font-bold">Nothing you don't.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            A highly refined toolset designed to keep you in the flow, minimizing clicks and maximizing clarity.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111115] border border-zinc-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-zinc-700/80 transition-all duration-200"
            >
              {/* Icon Box */}
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full border-t border-zinc-900 py-6 px-6 sm:px-12">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>TaskFlow © 2024</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-zinc-300 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-zinc-300 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;