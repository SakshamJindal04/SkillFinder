import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto py-16 px-6 text-center"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About SkillFinder</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          SkillFinder was built by <strong>Saksham Jindal</strong> as part of a full-stack internship challenge.
          The goal was to create a dynamic platform that suggests personalized learning paths, provides
          curated resources, and encourages continuous upskilling.
        </p>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-10 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-3">🎯 Mission</h2>
          <p>
            Empower learners with structured, accessible, and high-quality skill-building roadmaps.
            Whether you’re a beginner or a pro, SkillFinder adapts to your journey.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">🚀 Built With</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Next.js, Node.js, TailwindCSS, and Framer Motion</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">📬 Connect</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              LinkedIn: <a href="https://www.linkedin.com/in/saksham-jindal-b0b227330/" className="text-blue-600 dark:text-blue-400 underline">sakshamjindal</a><br />
              GitHub: <a href="https://github.com/SakshamJindal04" className="text-blue-600 dark:text-blue-400 underline">saksham-jindal</a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}