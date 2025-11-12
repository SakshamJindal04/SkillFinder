import path from 'path';
import { promises as fs } from 'fs';

// Helper: Fetch resources from Serper API (Google / YouTube)
async function fetchExternalResources(skill) {
  try {
    const response = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.SERPER_API_KEY,
      },
      body: JSON.stringify({
        q: `${skill} learning roadmap site:youtube.com OR site:freecodecamp.org OR site:medium.com`,
        num: 5,
      }),
    });

    const data = await response.json();

    if (!data.organic || data.organic.length === 0) {
      return [
        {
          title: `General Learning Path for ${skill}`,
          link: 'https://roadmap.sh',
          description: 'Explore structured learning paths and roadmaps for different skills.',
        },
      ];
    }

    // Convert Serper results to our resource format
    return data.organic.slice(0, 5).map((item) => ({
      title: item.title,
      link: item.link,
      description: item.snippet || 'A useful resource to get started.',
    }));
  } catch (err) {
    console.error('Serper fetch failed:', err);
    return [
      {
        title: 'freeCodeCamp Learning Resources',
        link: 'https://www.freecodecamp.org/',
        description: 'Free tutorials and resources for learning popular skills.',
      },
    ];
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { skill } = req.body;
    if (!skill) {
      return res.status(400).json({ message: 'Skill is required' });
    }

    const normalizedSkill = skill.trim().toLowerCase();
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'skills.json'), 'utf8');
    const skillsData = JSON.parse(fileContents);

    const data = skillsData[normalizedSkill];

// ✅ Skill found in our local JSON
if (data) {
  return res.status(200).json({
    skill: skill,
    subskills: data.subSkills || data.subskills || [],
    roadmap: data.roadmap || [],
    resources: data.resources || [],
  });
}

    // ❌ Skill not found — show generic fallback + fetch from Serper
    const externalResources = await fetchExternalResources(skill);

    return res.status(200).json({
      skill,
      subskills: [
        'Learn the fundamentals',
        'Understand core concepts',
        'Build small projects',
        'Practice daily',
        'Follow advanced tutorials',
      ],
      roadmap: [
        `Step 1: Understand what ${skill} is and why it’s important.`,
        `Step 2: Learn the basics (terminology, tools, setup).`,
        `Step 3: Practice by building small projects or examples.`,
        `Step 4: Read blogs, watch tutorials, and explore best practices.`,
        `Step 5: Build something creative using ${skill}.`,
      ],
      resources: externalResources,
      message: `We didn’t find "${skill}" in our local database, but here are resources we found online.`,
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}