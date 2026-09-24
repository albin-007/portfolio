# Albin Binoy George — Portfolio

React, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Run

Use Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

`npm run build` builds the production site; `npm run preview` previews it.

## Content

Sections: Hero, About, Skills, Selected Work, Services, Contact.
Contact URLs and project data are in `src/data.js`. Email is stored without the `mailto:` prefix.

## Assets

- Portrait: `src/assets/profile.png`
- TrackCart: `src/assets/projects/trackcart.png` and `.webp`
- CareNconnect: `src/assets/projects/carenconnect.png` and `.webp`
- EMI Calculator: `src/assets/projects/emi-calculator.png` and `.webp`
- Rural Employment: `src/assets/projects/rural-employment.png` and `.webp`
- Resume: `public/Albin_Binoy_George_Resume.pdf` (the exact supplied PDF)
- Background: `src/assets/cloud-bg.jpg`

Replace both PNG and WebP project covers together. Skill previews remain neutral icon placeholders; their optional image paths are configured in `src/data.js`.

The three deployed projects have live links that open in new tabs. Project details remain available on their images and titles. All projects, social links and contact details use the user's supplied information.

The native Vite configuration loader is intentional for compatibility with the local Windows environment.
