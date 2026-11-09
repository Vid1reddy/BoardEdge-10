# BoardEdge 10

BoardEdge 10 is a CBSE Class 10 study planner and board exam preparation app for NCERT Mathematics, Science, Social Science, and English.

## Features

- Study dashboard and timetable
- Chapter notes, summaries, and memory aids
- Flashcards and interactive quizzes
- Board-style questions and progress tracking
- AI doubt tutor powered by OpenRouter's free model router

## Tech stack

- Next.js 16, React 19, and TypeScript
- Prisma ORM with SQLite
- Tailwind CSS
- Bun for dependency management and scripts

## Local setup

### Prerequisites

- [Bun](https://bun.sh/)
- Node.js supported by Next.js 16

### Install and configure

1. Install dependencies:

   ```sh
   bun install
   ```

2. Create a `.env` file in the project root:

   ```dotenv
   DATABASE_URL="file:../db/custom.db"
   # Optional. Alternatively, save the key in the app's Settings screen.
   OPENROUTER_API_KEY="your-openrouter-api-key"
   ```

   Keep `.env` private; it is ignored by Git. Local SQLite database files under `db/` are ignored too.

3. Generate Prisma Client:

   ```sh
   bun run db:generate
   ```

4. For a new local database, create the SQLite schema and seed the study content:

   ```sh
   bun run db:push
   bun scripts/seed.ts
   ```

   `db:push` uses Prisma's `--accept-data-loss` option. Use it only when creating or intentionally updating a local database. The seed script rebuilds quiz and probable-question records; avoid rerunning it if you need to preserve those records.

5. Start the development server:

   ```sh
   bun run dev
   ```

   Then open [http://localhost:3000](http://localhost:3000).

On Windows PowerShell, if the `dev` script reports that `tee` is unavailable, run `bunx next dev -p 3000` instead.

## AI configuration

Add an OpenRouter API key in **Settings** or set `OPENROUTER_API_KEY` in `.env`. AI requests use OpenRouter's `openrouter/free` router, which selects an available free model. Free model availability and rate limits are controlled by OpenRouter; see its [free model documentation](https://openrouter.ai/collections/free-models/).

## Useful commands

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Build the production app |
| `bun run start` | Start the standalone production server |
| `bun run lint` | Run ESLint |
| `bun run db:generate` | Generate Prisma Client |
| `bun run db:push` | Push the Prisma schema to SQLite |
| `bun scripts/seed.ts` | Seed study content and rebuild quiz/question records |
