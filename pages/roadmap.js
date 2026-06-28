import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, CheckCircle, ExternalLink, Milestone } from 'lucide-react';

export default function SkillSuggestionPage() {
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!skill.trim()) {
      setError("Please enter a skill to explore.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skill }),
      });

      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Something went wrong while fetching the roadmap.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center p-3 bg-sky-100 dark:bg-sky-500/20 text-sky-500 rounded-2xl mb-6">
          <Compass size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
          Roadmap Explorer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Visualize your entire learning journey. Enter any skill to generate a comprehensive, step-by-step roadmap.
        </p>
      </motion.div>

      {/* Input */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16 max-w-2xl mx-auto relative"
      >
        <div className="relative w-full">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search a skill to explore (e.g., SEO, React)..."
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
              if (error) setError(null);
            }}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 focus:border-sky-400 dark:focus:border-sky-400 rounded-2xl outline-none transition-all shadow-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto whitespace-nowrap bg-gray-900 dark:bg-sky-500 hover:bg-gray-800 dark:hover:bg-sky-400 text-white font-medium px-8 py-3 rounded-2xl transition-all disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Roadmap"}
        </button>
      </motion.form>

      {/* Error */}
      {error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-center mb-8">
          {error}
        </motion.p>
      )}

      {/* Result */}
      <AnimatePresence>
        {result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            {/* Fallback Message */}
            {result.message && (
              <div className="bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 p-4 rounded-xl border border-amber-200 dark:border-amber-800/50 flex items-center gap-3">
                <Compass size={20} />
                <p>{result.message}</p>
              </div>
            )}

            {/* Expansive Roadmap Timeline */}
            <div>
              <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3 text-gray-900 dark:text-white">
                <Milestone className="text-sky-500" /> 
                {result.skill} Journey
              </h2>
              
              <div className="relative max-w-3xl mx-auto">
                {/* Connecting Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-300 to-indigo-300 dark:from-sky-700 dark:to-indigo-700 transform md:-translate-x-1/2 rounded-full"></div>

                <div className="space-y-12">
                  {result.roadmap && result.roadmap.length > 0 ? (
                    result.roadmap.map((step, i) => {
                      const isEven = i % 2 === 0;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ delay: i * 0.1 }}
                          className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                          {/* Empty space for alternating layout on desktop */}
                          <div className="hidden md:block w-5/12"></div>
                          
                          {/* Center Node */}
                          <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-white dark:bg-slate-900 border-4 border-sky-500 rounded-full transform -translate-x-1/2 z-10 shadow-md"></div>
                          
                          {/* Content Card */}
                          <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 text-left'}`}>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-all group">
                              <span className="inline-block px-3 py-1 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
                                Milestone {i + 1}
                              </span>
                              <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                                {step}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })
                  ) : (
                    <p className="text-gray-500 text-center">No roadmap available.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Deep Dive Resources */}
            <div className="max-w-4xl mx-auto pt-10 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Deep Dive Resources
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {result.resources && result.resources.length > 0 ? (
                  result.resources.map((r, i) => (
                    <motion.a
                      key={i}
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex flex-col justify-between p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:border-sky-200 dark:hover:border-sky-700 transition-all h-full"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {r.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{r.description}</p>
                      </div>
                      <div className="flex items-center text-sm font-medium text-sky-500 mt-auto">
                        View Resource <ExternalLink size={14} className="ml-1" />
                      </div>
                    </motion.a>
                  ))
                ) : (
                  <p className="text-gray-500">No resources found.</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}