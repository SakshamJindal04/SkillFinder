# Skill Building Suggestion Engine (Next.js)
```md
# Skill Building Suggestion Engine (Next.js)

This is a small Next.js app that suggests subskills, a learning roadmap, and resources for a given skill. It uses a local JSON mapping (`/data/skills.json`) and can optionally query a third-party search API if you provide an API key.

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run locally

```bash
npm run dev
```

3. Open http://localhost:3000

## Deployment

- Deploy to Vercel by connecting the repository and ensuring Node.js & Next.js settings are default.
- If you want live web search results, set `SERPER_API_KEY` in the Vercel environment variables (or update the API integration to your preferred provider).

## Notes
- The `/pages/api/suggestions.js` route reads `data/skills.json`. Add more skills there to expand the engine.
- The code attempts a simple fuzzy match; adjust logic for production.
