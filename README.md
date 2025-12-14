# CustoMewZable

An interactive web app for creating and customizing minimalist cat designs. Built with Next.js and SVG.

## Features

- Customize cat appearance with different body types, eyes, ears, and tails
- Choose from a color palette for primary color
- Randomize button to generate random cat designs
- Save up to 20 custom cats to browser storage
- Export cats as PNG or SVG files
- View and manage saved cats in a gallery
- Dark mode support

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the app.

Build for production:

```bash
pnpm run build
pnpm start
```

## Project Structure

```
app/              # Next.js pages and layouts
components/       # React components (cat renderer, customization panel, modals)
hooks/            # Custom React hooks (state management, storage, export)
utils/            # Utility functions (storage, export, cat rendering logic)
types/            # TypeScript type definitions
constants/        # App constants and configuration
```

## Usage

1. Select customization options from the left panel
2. Watch your cat update in real-time
3. Click "Randomize" to generate a random cat
4. Save your favorite cats for later
5. Export as PNG or SVG to download
