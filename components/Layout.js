import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Particles from 'react-tsparticles';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Initialize particles (modern version)
  const particlesInit = () => {};

  const particlesOptions = {
    background: { color: { value: darkMode ? "#0f172a" : "#f8fafc" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: darkMode ? "#38bdf8" : "#2563eb" },
      links: {
        color: darkMode ? "#38bdf8" : "#2563eb",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 1.2, direction: "none", outModes: "out" },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <div
      className={`relative min-h-screen transition-colors ${
        darkMode ? 'bg-slate-900 text-gray-200' : 'bg-slate-100 text-gray-800'
      }`}
    >
      <Head>
        <title>SkillFinder</title>
        <meta
          name="description"
          content="Get learning roadmaps and find courses for any skill."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      {/* Navbar includes dark mode toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow w-full max-w-6xl mx-auto p-4 py-8 md:p-10">
        {children}
      </main>

      <footer className="w-full text-center p-4 text-xs opacity-70">
        © {new Date().getFullYear()} SkillFinder — built by Saksham Jindal.
      </footer>
    </div>
  );
}