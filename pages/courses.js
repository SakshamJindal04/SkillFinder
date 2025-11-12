import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Courses() {
  const categories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Data Science',
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'AI'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-700 mb-10"
        >
          Explore Learning Categories 🎓
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`p-8 rounded-xl shadow-lg bg-gradient-to-r ${cat.gradient} text-white`}
            >
              <h3 className="text-2xl font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <span key={j} className="bg-white/20 px-3 py-1 rounded-full text-sm">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}