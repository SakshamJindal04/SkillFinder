import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto py-12"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Your Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Track your learning progress, explore new skills, and see recommended technologies.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Learn a New Skill', desc: 'Explore trending topics like AI, Cloud, and React.', icon: '🧠' },
            { title: 'Track Roadmaps', desc: 'Get clear step-by-step guidance on how to learn efficiently.', icon: '🗺️' },
            { title: 'Stay Updated', desc: 'Access curated links, courses, and resources for your journey.', icon: '🌐' },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-6 text-center border-t-4 border-blue-500"
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🔥 Top Trending Techs in 2025</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['Artificial Intelligence', 'Blockchain', 'Cloud Computing', 'Cybersecurity', 'React.js', 'Data Analytics'].map((tech, i) => (
              <span key={i} className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}