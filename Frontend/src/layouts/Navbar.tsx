import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="w-full bg-[#0c0c0e] text-white px-8 py-4 flex items-center justify-between border-b border-zinc-800/60">
      
      {/* Brand / Logo */}
      <Link to="/" className="flex items-center gap-2.5">
        <div className="text-[#c084fc]">
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <span className="text-xl font-bold text-[#e9d5ff] tracking-tight">
          TaskFlow
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative py-1 text-sm font-medium transition-colors ${
                isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#c084fc] rounded-full" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* CTA Button Link */}
      <Link
        to="/dashboard"
        className="bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#06b6d4] hover:opacity-95 transition-all text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-cyan-500/10 inline-block"
      >
        Open Dashboard
      </Link>

    </nav>
  );
};

export default Navbar;