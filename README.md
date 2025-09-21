# Argus SH - Official Website

A beautifully designed website for the Argus SH organization, showcasing our CLI tools and philosophy.

## 🚀 Features

- **Modern Design**: Inspired by Vercel, Next.js, and Trump Card designs
- **Dark/Light Themes**: Automatic theme switching with system preference support
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Fluid animations powered by Framer Motion
- **GitHub Integration**: Real-time project data from the Argus SH organization
- **Type-Safe**: Built with TypeScript and modern React patterns
- **Performance Optimized**: Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui component library
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **TypeScript**: Full type safety throughout

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- Bun (recommended) or npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/argus-sh/argus-web.git
cd argus-web
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles and CSS variables
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── magicui/          # Custom animated components
│   ├── sections/         # Page sections
│   └── navigation.tsx    # Navigation component
└── lib/                  # Utilities and API functions
    ├── utils.ts          # Utility functions
    ├── github.ts         # GitHub API integration
    └── types.ts          # TypeScript type definitions
```

## 🎨 Design System

The website uses a carefully crafted design system with:

- **Colors**: Blue to purple gradient theme
- **Typography**: Geist font family for modern look
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth, purposeful animations
- **Components**: Reusable, accessible components

## 🌐 GitHub Integration

The website automatically fetches and displays:

- Repository information
- Star counts and fork metrics
- Topics and languages
- Last updated dates
- Direct links to GitHub

## 🚀 Deployment

The easiest way to deploy is using Vercel:

```bash
bun run build
```

Then deploy to Vercel or your preferred platform.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/argus-sh/argus-ts/blob/main/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Argus SH Organization](https://github.com/argus-sh)
- [Argus TS Framework](https://github.com/argus-sh/argus-ts)
- [Documentation](https://argus.sh/docs)

---

Built with ❤️ by the Argus SH team
