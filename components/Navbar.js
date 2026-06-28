import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Roadmaps', href: '/roadmap' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
  ];

  const NavLink = ({ href, children, mobile }) => {
    const isActive = router.pathname === href;
    const baseClasses = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ease-in-out";
    const activeClasses = "bg-sky-500/10 text-sky-500 dark:bg-sky-400/10 dark:text-sky-400";
    const inactiveClasses = "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800";

    return (
      <Link href={href}>
        <span
          onClick={() => mobile && setIsOpen(false)}
          className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${mobile ? 'block w-full mb-2' : ''}`}
        >
          {children}
        </span>
      </Link>
    );
  };

  return (
    <nav className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-20">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white text-lg">S</span>
              killFinder
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-400 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} mobile>
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}