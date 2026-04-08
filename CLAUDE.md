# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

No test suite is configured.

## Architecture

Single-page Next.js 14 (App Router) marketing site for **Rumi** — a Russian-language pet grooming studio. The entire site is one page (`src/app/page.tsx`) composed of section components stacked vertically.

**Key patterns:**

- **Data lives in `src/data/`** — all content (services, masters, feedbacks, nav links, site metadata) is plain TypeScript arrays/objects. Edit these files to change site content.
- **Each section is its own folder** under `src/components/` with a `.tsx` component and a co-located `.css` file (component-scoped CSS alongside Tailwind).
- **`src/data/siteMetadata.ts`** is the single source of truth for URLs (Telegram, VK, WhatsApp, 2GIS), phone numbers, and site URL.
- **Fonts** — Rubik (body) and El Messiri (headings) loaded via `next/font/google` in `src/app/fonts.ts`, applied as className on elements. `rubik` is set on `<html>` globally.
- **`Shape` component** — decorative rounded card wrapper used repeatedly on the page for highlighted content blocks.
- **`Section` component** — wraps major page sections and accepts an `id` prop tied to `NAV_LINKS_SECTIONS_IDS` for anchor navigation from the header.

**Tailwind custom tokens:**
- Colors: `text-rumi` (`#3A5700`), `text-rumi-light` (`#76AC00`), `bg-bgColor` (`#FDFDFD`)
- Background images: `bg-circles`, `bg-light-circles`, `bg-sales-card`
- Breakpoints follow standard Tailwind: `sm/md/lg/xl`

**Images** are `.webp` files in `public/assets/images/`, imported statically in `page.tsx` and passed to Next.js `<Image>`.