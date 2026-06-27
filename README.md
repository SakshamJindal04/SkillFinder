<h1 align="center">SkillFinder</h1>

<p align="center">
  <strong>A modern platform to discover, track, and manage technical skills.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
</p>

## 🚀 Overview

SkillFinder is a backend-driven application that helps users manage technical proficiencies. It utilizes **Node.js** for the server environment and **Prisma ORM** for seamless and type-safe database interactions.

### ✨ Features
- **Skill Management:** Create, read, update, and delete skill profiles.
- **Robust Database:** Built with Prisma ORM for reliable data modeling.
- **Scalable Architecture:** Clean separation of concerns inside the `src` directory.

## 📂 Project Structure

```
├── prisma/            # Prisma schema and migrations
├── src/               # Application source code (controllers, routes, services)
├── public/            # Static files
└── package.json       # Dependencies and scripts
```

## 🛠️ Getting Started

To run the backend locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SakshamJindal04/SkillFinder.git
   cd SkillFinder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Set up your `.env` file based on `.env.save` (ensure your database connection string is correct).

4. **Initialize Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the server:**
   ```bash
   npm start
   # or npm run dev
   ```

## 🤝 Contributing
Issues and Pull Requests are welcome! Let's build a better way to track skills together.
