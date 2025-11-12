import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { skill } = req.query; // Get skill from query param
    if (!skill) {
      return res.status(400).json({ message: 'Skill query parameter is required' });
    }

    // Find the data/skills.json file
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'skills.json'), 'utf8');
    const skillsData = JSON.parse(fileContents);

    const normalizedSkill = skill.trim().toLowerCase();
    const data = skillsData[normalizedSkill];

    if (data && data.onlineCourses) {
      // Return only the online courses
      res.status(200).json(data.onlineCourses);
    } else {
      res.status(404).json({ message: "No online courses found for this skill." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}