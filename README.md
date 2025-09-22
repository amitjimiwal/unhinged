# 🎭 Unhinged Resume Generator

A fun and chaotic resume builder that lets you create the most unhinged resumes possible! Break free from boring, traditional resumes LMAO

![Unhinged Resume Generator](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/amitjimiwal/unhinged.git
   cd unhinged
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🔐 Auth setup (Clerk + Google)

1. Create a Clerk application and enable Google OAuth in Clerk Dashboard.
2. Create `.env.local` from the example and fill values:

   ```bash
   cp .env.local.example .env.local
   ```

   Set these keys:

   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - Optionally: `CLERK_SIGN_IN_URL=/sign-in`, `CLERK_SIGN_UP_URL=/sign-up`, `CLERK_AFTER_SIGN_IN_URL=/unhinged`, `CLERK_AFTER_SIGN_UP_URL=/unhinged`

3. Start the dev server and sign in at `/sign-in`. The `/unhinged` route is protected.

## 🎮 How to Use

### 1. **Choose Your Template**

- Start with a preset template or build from scratch
- Templates include hilarious content to get you started

### 2. **Customize Your Resume**

- **Add Your Name**: Enter your "good name"
- **Upload Photo**: Add a profile picture (optional)
- **Edit Sections**: Modify titles and content
- **Add Items**: Create bullet points and lists
- **Toggle Visibility**: Show/hide sections as needed

### 3. **Download Your Masterpiece**

- Click the "Download" button to save as PNG
- Your unhinged resume is ready to share!

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Inline Styles
- **Icons**: Lucide React
- **Image Processing**: html2canvas
- **Package Manager**: pnpm

## 📁 Project Structure

```
unhinged/
├── app/
│   ├── page.tsx              # Landing page
│   ├── unhinged/
│   │   └── page.tsx         # Resume builder page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── ResumeBuilder.tsx    # Main builder component
│   ├── ResumePreview.tsx    # Live preview component
│   ├── PresetTemplates.tsx  # Template selector
│   └── ThemeToggle.tsx      # Theme switcher
├── types/
│   └── resume.ts           # TypeScript interfaces
└── public/                 # Static assets
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Twitter**: [@noslopinfinite](https://x.com/noslopinfinite)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=amitjimiwal/unhinged&type=Date)](https://star-history.com/#amitjimiwal/unhinged&Date)

**Made with 💙 for the unhinged**
_Ready to create your most chaotic resume yet? Let's go unhinged! 🎭_
