import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Home() {
  const [skill, setSkill] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const funFacts = [
    "The first computer virus was created in 1986 and was called ‘Brain’.",
    "Python is named after Monty Python, not the snake!",
    "The first website ever created is still online — info.cern.ch.",
    "Java was originally called Oak, after an oak tree outside James Gosling’s office.",
    "GitHub hosts over 100 million repositories of open-source projects!"
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    if (!skill.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

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
      setError('Could not fetch skill suggestions.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <Head>
        <title>SkillFinder - Learn Smarter</title>
      </Head>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          SkillFinder 🚀
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover your next skill, explore roadmaps, and access curated learning resources
          for free. Learn smart, not hard!
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex justify-center gap-3 mt-6"
          whileHover={{ scale: 1.02 }}
        >
          <input
            type="text"
            placeholder="Enter a skill (e.g., Python, SEO, Web Dev)"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="px-5 py-3 w-72 md:w-96 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
        </motion.form>
      </motion.section>

      {/* Results Section */}
      {result && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-xl p-8 my-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">
            {result.skill} Learning Path 🌱
          </h2>

          {/* Subskills */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Sub-skills</h3>
            <div className="flex flex-wrap gap-2">
              {(result.subskills || result.subSkills || []).map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Learning Roadmap</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              {(result.roadmap || []).map((step, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {step}
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-medium mb-2">Resources</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {(result.resources || []).map((r, i) => (
                <motion.a
                  key={i}
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  className="block p-4 border rounded-lg hover:shadow-lg transition-all"
                >
                  <h4 className="font-semibold text-blue-700 mb-1">{r.title}</h4>
                  <p className="text-sm text-gray-600">{r.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Fun Facts Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-50 rounded-xl p-10 my-16 shadow-inner"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          💡 Fun Facts About Coding
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {funFacts.map((fact, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg border-l-4 border-blue-500"
            >
              <p className="text-gray-700 text-sm">{fact}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer / Contact */}
      <footer className="text-center text-sm text-gray-500 py-8">
        <p>© {new Date().getFullYear()} SkillFinder by Saksham Jindal</p>
        <p>
          Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </Layout>
  );
}