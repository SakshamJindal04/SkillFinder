import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Map, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home() {
  const [skill, setSkill] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!skill.trim()) {
      setError('Please enter a skill to search.');
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);

    // Artificial delay to show the skeleton loaders beautifully
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const res = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skill })
      });

      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError('Could not fetch skill suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>SkillFinder - Learn Smarter</title>
      </Head>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-20 lg:py-32 relative"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-medium border border-sky-100 dark:border-sky-500/20">
          ✨ Discover your next superpower
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
          Master any skill, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            step by step.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Enter a skill you want to learn, and we'll generate a tailored roadmap, break down sub-skills, and curate the best resources for you.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto relative group"
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className={`relative flex items-center bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-2 transition-all duration-300 ${isFocused ? 'border-sky-400 shadow-sky-400/20 shadow-lg' : error ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'}`}>
            <Search className="absolute left-5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="e.g., Python, React, UI Design..."
              value={skill}
              onChange={(e) => {
                setSkill(e.target.value);
                if (error) setError(null);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full py-4 pl-14 pr-32 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none rounded-2xl text-lg"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 px-6 py-2.5 bg-gray-900 dark:bg-sky-500 text-white rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-sky-400 transition-colors disabled:opacity-50"
            >
              Search
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-3 text-left pl-4">{error}</p>}
        </motion.form>
      </motion.section>

      {/* Loading State (Skeleton) */}
      <AnimatePresence>
        {loading && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-4xl mx-auto mb-20 space-y-8"
          >
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-1/3 animate-pulse"></div>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
              ))}
            </div>
            <div className="space-y-4 pt-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse shrink-0"></div>
                  <div className="h-16 w-full bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Results Section */}
      <AnimatePresence>
        {result && !loading && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-5xl mx-auto mb-24"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-500">
                <Map size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
                {result.skill} Learning Path
              </h2>
            </div>

            {/* Subskills */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4 text-gray-700 dark:text-gray-300 font-medium">
                <Layers size={18} />
                <h3>Core Concepts to Master</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {(result.subskills || result.subSkills || []).map((s, i) => (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={i}
                    className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm shadow-sm font-medium"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-12">
              {/* Timeline Roadmap */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 mb-6 text-gray-700 dark:text-gray-300 font-medium">
                  <Map size={18} />
                  <h3>Step-by-Step Roadmap</h3>
                </div>
                <div className="relative border-l-2 border-sky-100 dark:border-slate-700 ml-4 space-y-8">
                  {(result.roadmap || []).map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-8"
                    >
                      {/* Timeline Node */}
                      <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-sky-500"></div>
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <span className="text-sky-500 font-semibold text-sm tracking-wide uppercase mb-2 block">Step {i + 1}</span>
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-6 text-gray-700 dark:text-gray-300 font-medium">
                  <BookOpen size={18} />
                  <h3>Top Resources</h3>
                </div>
                <div className="space-y-4">
                  {(result.resources || []).map((r, i) => (
                    <motion.a
                      key={i}
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group block p-5 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl hover:border-sky-300 dark:hover:border-sky-500/50 hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors">{r.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{r.description}</p>
                        </div>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-sky-500 transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Feature Highlights (Replacing Fun Facts) */}
      {!result && !loading && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 mb-24 px-4"
        >
          {[
            { title: "Structured Paths", desc: "No more guessing. Get a clear, logical progression for any skill." },
            { title: "Curated Resources", desc: "We find the best tutorials and articles so you don't have to." },
            { title: "Trackable Progress", desc: "Break massive skills into bite-sized, achievable milestones." }
          ].map((feature, i) => (
            <div key={i} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <CheckCircle2 className="text-sky-500 mb-4" size={24} />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </motion.section>
      )}
    </>
  );
}