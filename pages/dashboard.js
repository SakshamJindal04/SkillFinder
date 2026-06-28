import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, MapPin, Trophy, Play, ArrowRight, Flame } from 'lucide-react';

export default function Dashboard() {
  const activeRoadmaps = [
    { skill: 'React.js', progress: 45, currentStep: 'Hooks & Context', totalSteps: 12, color: 'bg-sky-500' },
    { skill: 'UI Design', progress: 15, currentStep: 'Color Theory', totalSteps: 8, color: 'bg-indigo-500' },
    { skill: 'Python', progress: 80, currentStep: 'Web Scraping', totalSteps: 10, color: 'bg-emerald-500' },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto py-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              Welcome back, Saksham
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              You're making great progress. Keep it up!
            </p>
          </div>
          <Link href="/">
            <span className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-sky-500 text-white rounded-2xl font-medium shadow-sm hover:bg-gray-800 dark:hover:bg-sky-400 transition-colors cursor-pointer">
              Explore New Skill <ArrowRight size={18} className="ml-2" />
            </span>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { label: 'Active Roadmaps', value: '3', icon: <MapPin size={24} className="text-sky-500" /> },
            { label: 'Skills Mastered', value: '7', icon: <Trophy size={24} className="text-amber-500" /> },
            { label: 'Resources Saved', value: '24', icon: <BookOpen size={24} className="text-indigo-500" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-slate-700 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress Trackers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activeRoadmaps.map((roadmap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm group hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{roadmap.skill}</h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {roadmap.progress}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2.5 mb-6 overflow-hidden">
                  <div
                    className={`${roadmap.color} h-2.5 rounded-full`}
                    style={{ width: `${roadmap.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider font-semibold">Current Step</p>
                    <p className="text-gray-900 dark:text-gray-200 font-medium">{roadmap.currentStep}</p>
                  </div>
                  <Link href={`/roadmap?skill=${encodeURIComponent(roadmap.skill)}`}>
                    <button className="w-10 h-10 bg-gray-50 dark:bg-slate-700 group-hover:bg-sky-500 group-hover:text-white text-gray-600 dark:text-gray-300 rounded-xl flex items-center justify-center transition-colors">
                      <Play size={18} className="ml-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trending Tech */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-500/20 rounded-3xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Flame className="text-orange-500" size={24} />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Trending in Tech</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Generative AI', 'Next.js 14', 'Tailwind CSS', 'Rust', 'Web3', 'Figma', 'GraphQL'].map((tech, i) => (
              <Link key={i} href={`/roadmap?skill=${encodeURIComponent(tech)}`}>
                <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-sky-200 dark:border-sky-700/50 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium hover:bg-sky-500 hover:text-white hover:border-sky-500 dark:hover:bg-sky-500 dark:hover:text-white transition-all cursor-pointer shadow-sm">
                  {tech}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}