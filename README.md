# SPECTRA — EDM Ghost Production Website

A production-quality single-page website for an EDM ghost production business, built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Fonts**: Geist (headings) + Inter (body) via `next/font/google`
- **Deployment**: GitHub Actions → Vercel CLI

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to Vercel via GitHub Actions

### 1. Create a Vercel project

```bash
npm install -g vercel
vercel login
vercel link   # run inside the project directory
```

This creates a `.vercel/project.json` file containing your `orgId` and `projectId`.

### 2. Get your credentials

| Value               | Where to find it                                    |
| ------------------- | --------------------------------------------------- |
| `VERCEL_TOKEN`      | Vercel Dashboard → Settings → Tokens → Create token |
| `VERCEL_ORG_ID`     | `.vercel/project.json` → `orgId` field              |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` → `projectId` field          |

### 3. Add GitHub repo secrets

Go to your GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**, and add:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### 4. Push to `main`

```bash
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. Install dependencies
2. Pull Vercel environment variables
3. Build the project
4. Deploy to Vercel production

---

## Project Structure

```
edm-ghost-prod/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # Tailwind + CSS vars + custom styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionHeader.tsx
├── lib/
│   └── content.ts          # All placeholder text/data
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .env.example
└── README.md
```

## Customization

All placeholder content lives in `lib/content.ts`. Edit the `site`, `hero`, `services`, `pricing`, `faq`, and `contact` exports to update the website copy without touching any component files.
