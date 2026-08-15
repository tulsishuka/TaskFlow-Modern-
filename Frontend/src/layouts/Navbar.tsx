import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="relative w-full bg-[#000000] backdrop-blur-md text-white px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between border-b border-zinc-800/60 z-50">
            <Link to="/" className="flex items-center gap-2.5">
        <div className="text-[#c084fc]">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
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
        <span className="text-lg sm:text-xl font-bold text-[#e9d5ff] tracking-tight">
          TaskFlow
        </span>
      </Link>
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
      <div className="flex items-center gap-3">
        <Link
          to="/dashboard"
          className="bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#06b6d4] hover:opacity-95 transition-all text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-md hover:shadow-cyan-500/10 inline-block w-auto whitespace-nowrap"
        >
          Open Dashboard
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0c0c0e] border-b border-zinc-800/80 p-4 flex flex-col gap-3 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-zinc-800/60 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;