# Developer Portfolio

![App Preview](https://imgix.cosmicjs.com/ae7ec100-538e-11f1-8cae-3ba0530d6aa4-autopilot-photo-1611224923853-80b023f02d71-1779200770312.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, professional developer portfolio built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcase your projects, skills, work experience, and personal info in a beautiful, responsive design.

## Features

- 🏠 Beautiful homepage with hero section, featured projects, and skills preview
- 💼 Detailed projects showcase with screenshots, tech stacks, and links
- 🛠️ Skills organized by category with proficiency levels
- 🏢 Work experience timeline with company details
- 👤 About page with bio, contact info, and social links
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 App Router and Server Components
- 🎨 Styled with Tailwind CSS
- 🔒 Type-safe with TypeScript

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a0c7281c9307e7d2c5b38da&clone_repository=6a0c741fc9307e7d2c5b4392)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a SaaS product website with features, pricing tiers, documentation pages, and customer testimonials.
> 
> User instructions: A developer portfolio with projects, skills, work experience, and contact info"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Product". The content is managed in Cosmic CMS with the following object types: projects, skills, work-experience, profile. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A developer portfolio with projects, skills, work experience, and contact info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [React 19](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Headless CMS

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with bucket configured

### Installation

```bash
bun install
```

Then run the development server:

```bash
bun run dev
```

## Cosmic SDK Examples

### Fetching Projects

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Profile

```typescript
const response = await cosmic.objects
  .findOne({ type: 'profile', slug: 'main-profile' })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with Cosmic to manage:
- **Projects** - Portfolio projects with screenshots and links
- **Skills** - Technical skills with proficiency levels
- **Work Experience** - Job history with company details
- **Profile** - Personal information and contact details

## Deployment Options

Deploy easily to [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Set environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->