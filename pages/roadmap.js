import React, { useState } from "react";

export default function SkillSuggestionPage() {
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!skill.trim()) return;

    setLoading(true);
    setError(null);

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
      setError("Something went wrong while fetching suggestions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Skill Building Roadmap
      </h1>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-3 justify-center items-center mb-8"
      >
        <input
          type="text"
          placeholder="Enter a skill (e.g. Python, SEO)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      {/* Error */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Result */}
      {result && (
        <div className="space-y-10">
          {/* Fallback Message */}
          {result.message && (
            <p className="text-yellow-600 bg-yellow-100 border-l-4 border-yellow-400 p-3 rounded-md">
              {result.message}
            </p>
          )}

          {/* Sub-Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Related Sub-Skills</h2>
            <div className="flex flex-wrap gap-2">
              {result.subskills && result.subskills.length > 0 ? (
                result.subskills.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))
              ) : (
                <p className="text-gray-500">No sub-skills found.</p>
              )}
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Your Learning Roadmap</h2>
            <div className="space-y-3">
              {result.roadmap && result.roadmap.length > 0 ? (
                result.roadmap.map((step, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white shadow-sm border border-gray-100 rounded-md hover:shadow-md transition"
                  >
                    <strong className="text-blue-700">Step {i + 1}: </strong>
                    {step}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No roadmap available.</p>
              )}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Recommended Resources</h2>
            <ul className="space-y-3">
              {result.resources && result.resources.length > 0 ? (
                result.resources.map((r, i) => (
                  <li
                    key={i}
                    className="p-3 bg-slate-50 border rounded-md hover:bg-slate-100 transition"
                  >
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      {r.title}
                    </a>
                    <p className="text-sm text-gray-600">{r.description}</p>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No resources found.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}