import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, GraduationCap, Trophy, Code2, Globe, ExternalLink, Blocks, Layers, Server, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto py-12 px-4 space-y-24">
        
        {/* Part A: About This Project */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              About SkillFinder
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A dynamic engine that takes any skill and generates a structured, actionable learning roadmap.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm mb-12">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Problem It Solves</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Self-taught developers and continuous learners often suffer from "tutorial hell" or decision paralysis. There is too much information online, making it difficult to know where to start and what to learn next. SkillFinder solves this by acting as a smart compass—generating a highly structured, step-by-step roadmap for any skill, cutting out the noise.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Target Audience</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                SkillFinder is built for ambitious students, self-taught developers, and professionals looking to pivot into new tech domains without wasting time on unstructured learning paths.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Mechanics</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Dynamic Generation", desc: "Uses local caching and fallback API queries to parse any requested skill into a logical sequence of steps.", icon: <Sparkles className="text-sky-500" /> },
                  { title: "Visual Timelines", desc: "Transforms flat lists into an interactive, milestone-based UI that helps learners track their progression.", icon: <Layers className="text-indigo-500" /> },
                  { title: "Resource Curation", desc: "Integrates external search APIs to fetch real-time, highly relevant articles and tutorials.", icon: <Blocks className="text-emerald-500" /> },
                  { title: "Tech Stack", desc: "Built with Next.js (React), Tailwind CSS for styling, Framer Motion for UI interactions, and a custom Node.js API route.", icon: <Server className="text-purple-500" /> },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>


        {/* Part B: About the Developer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
              About the Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The brain behind the codebase.
            </p>
          </div>

          <div className="bg-sky-50 dark:bg-slate-800/80 p-8 md:p-12 rounded-3xl border border-sky-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
            {/* Soft decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-200/50 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-sky-200 dark:border-slate-700">
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Saksham Jindal</h3>
                  <p className="text-lg text-sky-700 dark:text-sky-400 font-medium mb-4">CS undergraduate building production-grade full-stack systems</p>
                  <p className="text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed">
                    B.Tech in Computer Science & Engineering at SRM Institute of Science and Technology (Aug 2024 – May 2028), CGPA 8.73/10. Builds full-stack web applications with hands-on experience through internships and hackathons.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="mailto:sakshamjindal1620@gmail.com" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm">
                    <Mail size={16} /> sakshamjindal1620@gmail.com
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm">
                    <Globe size={16} /> LinkedIn & GitHub
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Experience & Ed */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white font-bold text-lg">
                      <Briefcase size={20} className="text-sky-500" /> Experience
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Web Development Intern</h4>
                      <p className="text-sm text-sky-600 dark:text-sky-400 mb-2">SkillCraft Technology (June 2026 – Present)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Working with React.js/Node.js in an agile team, contributing to frontend features and backend API integration.</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white font-bold text-lg">
                      <Code2 size={20} className="text-sky-500" /> Top Projects
                    </div>
                    <ul className="space-y-3">
                      <li className="text-sm text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-gray-100">Exam Alchemy</strong> — automated question paper generator (React, Node, MongoDB, Gemini API)</li>
                      <li className="text-sm text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-gray-100">Safekart</strong> — product authenticity verification (Next.js, Node, MongoDB)</li>
                      <li className="text-sm text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-gray-100">Event Attendance System</strong> — timestamp-based tracking</li>
                    </ul>
                  </div>
                </div>

                {/* Skills & Achievements */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white font-bold text-lg">
                      <Layers size={20} className="text-sky-500" /> Technical Skills
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript (ES6+)', 'Python', 'Java', 'React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'GCP', 'RESTful APIs', 'DSA'].map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white font-bold text-lg">
                      <Trophy size={20} className="text-sky-500" /> Achievements
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">🏆</span> 3rd Place — QWIK Innovate Ideathon 2026
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 mt-0.5">⭐</span> Finalist — Smart India Hackathon 2025
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-500 mt-0.5">⭐</span> Participant — Samsung Solve for Tomorrow 2025
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-0.5">📜</span> NPTEL Certifications: Java, DBMS, OOP (IIT Kharagpur/Roorkee)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </>
  );
}