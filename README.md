# 🏳️‍⚧️ TransPride — Equality Has No Gender

A modern, professional, and emotionally impactful web platform built to spread awareness about the transgender community. TransPride promotes equality, dignity, and inclusion for transgender individuals through education, resources, and community support.

**Live Site:** [https://all-equal-now.lovable.app](https://all-equal-now.lovable.app)

---

## 🎯 Mission

- Educate visitors about transgender rights, challenges, and allyship
- Provide support resources and helplines
- Share empowering stories of prominent transgender figures
- Encourage action and participation in advocacy
- Create a safe, inclusive digital space for the community and allies

---

## ✨ Features

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen hero with mission tagline and CTA |
| **About** | Core mission and values |
| **Challenges** | Key issues faced by the transgender community |
| **Stories** | Inspiring stories of prominent transgender achievers |
| **Resources** | Helplines, support organizations, and reading materials |
| **Get Involved** | Volunteer, donate, and campaign opportunities |
| **Rights** | Legal rights and protections overview |
| **Ally Guide** | How to be a better ally |
| **FAQ** | Frequently asked questions |
| **Contact** | Reach out for support, collaboration, or inquiries |
| **Login** | OAuth authentication (Google, Apple, Microsoft, Lovable) |

---

## 🛠️ Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + SSR)
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Database & Auth:** Supabase (PostgreSQL + Row-Level Security)
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod
- **Charts:** Recharts
- **Auth Integration:** Lovable Cloud Auth

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Bun](https://bun.sh/) (recommended) or npm
- A [Supabase](https://supabase.com/) project (for backend)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/transpride.git
cd transpride

# Install dependencies
bun install

# Start the development server
bun run dev
```

The app will be available at `http://localhost:3000`.

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-anon-key
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 🧩 Project Structure

```
src/
├── components/          # Reusable UI components (shadcn/ui + custom)
│   ├── ui/             # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── StoriesSection.tsx
│   └── ... (sections)
├── hooks/              # Custom React hooks
├── integrations/       # Third-party integrations
│   ├── supabase/       # Supabase client, auth, types
│   └── lovable/        # Lovable Cloud Auth
├── lib/                # Utilities (cn, helpers)
├── routes/             # TanStack file-based routes
│   ├── __root.tsx      # Root layout (head, meta, shell)
│   ├── index.tsx       # Home page (all sections)
│   └── login.tsx       # Login page
├── router.tsx          # Router configuration
├── start.ts            # TanStack Start entry
└── styles.css          # Global Tailwind styles + theme tokens
```

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's:

- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📝 Improving documentation
- 🎨 Design or accessibility improvements
- 🌍 Translations

Please open an issue or pull request.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 💙 Acknowledgments

- Built with love for the transgender community
- Inspired by activists, allies, and changemakers worldwide
- Donations redirected to [Sahodari Foundation](https://sahodari.org/home.html) to support transgender empowerment in India

---

> *"Equality Has No Gender. Every identity deserves dignity, respect, and the freedom to be."*
