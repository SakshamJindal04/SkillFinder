import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ darkMode, setDarkMode }) {
  const router = useRouter();

  const NavLink = ({ href, children }) => {
    const isActive = router.pathname === href;
    const baseClasses =
      "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out";
    const activeClasses = "bg-blue-600 text-white";
    const inactiveClasses = "text-slate-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700";

    return (
      <Link href={href}>
        <span className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
          {children}
        </span>
      </Link>
    );
  };

  return (
    <nav className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
        {/* Left side: logo + dark mode toggle */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <span className="text-xl font-bold text-blue-700 dark:text-blue-400">SkillFinder</span>
          </Link>

          {/* Dark Mode Toggle Button (moved here) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-2.5 py-1.5 rounded-md bg-blue-600 text-white text-xs shadow hover:bg-blue-700 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Right side: navigation links */}
        <div className="hidden sm:flex sm:space-x-4">
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/roadmap">Skill Roadmap</NavLink>
          <NavLink href="/courses">Find Courses</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
}