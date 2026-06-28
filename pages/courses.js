import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Database, LineChart, Cloud } from 'lucide-react';

export default function Courses() {
  const categories = [
    {
      title: 'Frontend Development',
      desc: 'Build beautiful, responsive user interfaces and modern web apps.',
      icon: <Code size={24} className="text-sky-500" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      bg: 'bg-sky-50 dark:bg-sky-900/10',
      border: 'border-sky-100 dark:border-sky-800',
      skillBg: 'bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-300'
    },
    {
      title: 'Backend Development',
      desc: 'Architect robust APIs, databases, and server-side logic.',
      icon: <Database size={24} className="text-emerald-500" />,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      bg: 'bg-emerald-50 dark:bg-emerald-900/10',
      border: 'border-emerald-100 dark:border-emerald-800',
      skillBg: 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300'
    },
    {
      title: 'Data Science & AI',
      desc: 'Analyze complex data and build intelligent machine learning models.',
      icon: <LineChart size={24} className="text-purple-500" />,
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'AI'],
      bg: 'bg-purple-50 dark:bg-purple-900/10',
      border: 'border-purple-100 dark:border-purple-800',
      skillBg: 'bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300'
    },
    {
      title: 'DevOps & Cloud',
      desc: 'Deploy, scale, and manage applications in the cloud securely.',
      icon: <Cloud size={24} className="text-indigo-500" />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      bg: 'bg-indigo-50 dark:bg-indigo-900/10',
      border: 'border-indigo-100 dark:border-indigo-800',
      skillBg: 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300'
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-slate-700">
            📚 Curated Learning Paths
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Explore Categories
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose a domain and discover structured roadmaps for the most in-demand skills in the industry today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col h-full p-8 rounded-3xl border ${cat.border} ${cat.bg} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{cat.title}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {cat.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                {cat.skills.map((s, j) => (
                  <span key={j} className={`px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-transparent dark:border-slate-700 ${cat.skillBg}`}>
                    {s}
                  </span>
                ))}
              </div>

              <Link href={`/roadmap?skill=${encodeURIComponent(cat.skills[0])}`}>
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-medium rounded-2xl shadow-sm hover:shadow border border-gray-200 dark:border-slate-700 transition-all group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-gray-700">
                  Explore Path <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}