import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, Sparkles, Globe, Rocket, Lightbulb, Zap,
  Milestone, Map, Navigation, CheckCircle, Search,
  BookOpen, GraduationCap, MonitorPlay, Layout as LayoutIcon, Video, Folder,
  Trophy, Target, TrendingUp, Activity, BarChart, Clock,
  User, Code2, Heart, Briefcase, Coffee, Award
} from 'lucide-react';

const quotes = [
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
];

const DynamicBackground = ({ pathname }) => {
  const iconsConfig = {
    '/': [
      { Icon: Compass, classes: 'top-10 -left-16 w-64 h-64 text-sky-200/40 dark:text-sky-500/10' },
      { Icon: Sparkles, classes: 'bottom-20 -right-16 w-72 h-72 text-indigo-200/40 dark:text-indigo-500/10' },
      { Icon: Globe, classes: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-emerald-100/30 dark:text-emerald-500/5' },
      { Icon: Rocket, classes: 'top-1/4 -right-10 w-48 h-48 text-rose-200/40 dark:text-rose-500/10' },
      { Icon: Lightbulb, classes: 'bottom-1/4 -left-10 w-56 h-56 text-amber-200/40 dark:text-amber-500/10' },
      { Icon: Zap, classes: 'top-10 left-1/3 w-32 h-32 text-yellow-200/40 dark:text-yellow-500/10' },
    ],
    '/roadmap': [
      { Icon: Milestone, classes: 'top-32 -left-20 w-80 h-80 text-sky-200/40 dark:text-sky-500/10' },
      { Icon: Map, classes: '-bottom-20 -right-20 w-80 h-80 text-purple-200/40 dark:text-purple-500/10' },
      { Icon: Navigation, classes: 'top-10 right-1/4 w-40 h-40 text-indigo-200/40 dark:text-indigo-500/10' },
      { Icon: CheckCircle, classes: 'bottom-1/3 -left-10 w-48 h-48 text-emerald-200/40 dark:text-emerald-500/10' },
      { Icon: Search, classes: 'top-1/2 left-2/3 w-64 h-64 text-slate-200/40 dark:text-slate-500/5' },
    ],
    '/courses': [
      { Icon: BookOpen, classes: '-top-10 -right-16 w-64 h-64 text-orange-200/40 dark:text-orange-500/10' },
      { Icon: GraduationCap, classes: 'bottom-10 -left-16 w-72 h-72 text-sky-200/40 dark:text-sky-500/10' },
      { Icon: MonitorPlay, classes: 'top-1/2 left-1/4 w-80 h-80 text-emerald-100/30 dark:text-emerald-500/5' },
      { Icon: LayoutIcon, classes: 'top-20 left-1/3 w-40 h-40 text-purple-200/40 dark:text-purple-500/10' },
      { Icon: Video, classes: 'bottom-1/4 -right-10 w-56 h-56 text-rose-200/40 dark:text-rose-500/10' },
      { Icon: Folder, classes: 'top-2/3 left-1/2 w-48 h-48 text-amber-100/30 dark:text-amber-500/5' },
    ],
    '/dashboard': [
      { Icon: Trophy, classes: 'top-10 -right-16 w-72 h-72 text-amber-200/40 dark:text-amber-500/10' },
      { Icon: Target, classes: 'bottom-20 -left-16 w-64 h-64 text-rose-200/40 dark:text-rose-500/10' },
      { Icon: TrendingUp, classes: 'top-1/3 left-1/2 w-96 h-96 text-sky-100/30 dark:text-sky-500/5' },
      { Icon: Activity, classes: '-top-10 left-1/4 w-48 h-48 text-emerald-200/40 dark:text-emerald-500/10' },
      { Icon: BarChart, classes: 'bottom-10 right-1/4 w-56 h-56 text-indigo-200/40 dark:text-indigo-500/10' },
      { Icon: Clock, classes: 'top-2/3 -left-10 w-40 h-40 text-slate-200/40 dark:text-slate-500/10' },
    ],
    '/about': [
      { Icon: Code2, classes: '-top-10 -left-16 w-72 h-72 text-sky-200/40 dark:text-sky-500/10' },
      { Icon: Heart, classes: '-bottom-10 -right-16 w-64 h-64 text-pink-200/40 dark:text-pink-500/10' },
      { Icon: User, classes: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-indigo-100/30 dark:text-indigo-500/5' },
      { Icon: Briefcase, classes: 'top-20 -right-10 w-56 h-56 text-amber-200/40 dark:text-amber-500/10' },
      { Icon: Coffee, classes: 'bottom-1/3 -left-10 w-48 h-48 text-orange-200/40 dark:text-orange-500/10' },
      { Icon: Award, classes: 'top-1/4 left-1/4 w-40 h-40 text-emerald-200/40 dark:text-emerald-500/10' },
    ],
  };

  const currentIcons = iconsConfig[pathname] || iconsConfig['/'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {currentIcons.map((config, index) => {
            const { Icon, classes } = config;
            return (
              <motion.div
                key={index}
                className={`absolute ${classes}`}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, -15, 0],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 10 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon className="w-full h-full" strokeWidth={1} />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div
      className={`relative min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden ${
        darkMode ? 'bg-slate-900 text-gray-200' : 'bg-slate-50 text-gray-800'
      }`}
    >
      <Head>
        <title>SkillFinder</title>
        <meta
          name="description"
          content="Get learning roadmaps and find courses for any skill."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Dynamic Background Icons based on current page */}
      <DynamicBackground pathname={router.pathname} />

      {/* Soft Background Blobs (Global) */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob pointer-events-none z-0" />
      <div className="absolute top-0 -right-40 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000 pointer-events-none z-0" />
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000 pointer-events-none z-0" />

      {/* Navbar includes dark mode toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow w-full max-w-6xl mx-auto p-6 md:p-10 z-10 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-10 px-6 border-t border-gray-200 dark:border-gray-800 z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative">
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-lg italic text-gray-600 dark:text-gray-400">"{quote.text}"</p>
          <p className="text-sm font-medium mt-2 text-sky-600 dark:text-sky-400">— {quote.author}</p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} SkillFinder — Built by Saksham Jindal
        </p>
      </footer>
    </div>
  );
}