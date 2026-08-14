import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,

  Settings,
  User,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-zinc-800/80 text-purple-300 font-semibold before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-purple-500 before:rounded-r"
        : "text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200"
    }`;

  const links = [
    {
      name: "My Board",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
   
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <>
      {/* Mobile Hamburger Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-[#111115] p-2.5 text-zinc-300 border border-zinc-800 shadow-lg lg:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed top-0 left-0 z-40
          h-screen w-64
          bg-[#0c0c0e] border-r border-zinc-800/60
          shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:sticky lg:translate-x-0

          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex h-full flex-col justify-between px-5 py-6">
          {/* Top Section */}
          <div>
            {/* Brand Logo */}
            <div className="mb-8 px-2">
              <Link to="/" className="flex items-center gap-2.5">
                <CheckCircle2 className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white tracking-tight">
                  TaskFlow
                </span>
              </Link>
              <p className="mt-1 text-xs text-zinc-500 font-medium">
                Productivity Suite
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1.5">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={navLinkClass}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-zinc-800/80 pt-4">
            <NavLink
              to="/profile"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              <User size={18} />
              <span>Profile Settings</span>
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;