# 🎬 Movies Club - Modern Movie & TV Show Discovery Platform

A sophisticated, full-featured movie and TV show discovery platform built with Next.js 15, featuring a beautiful glassmorphism UI, real-time search, and comprehensive media information from The Movie Database (TMDB) API.

![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)

## ✨ Key Features

### 🎯 Core Functionality
- **Advanced Search**: Real-time search with debouncing for movies, TV shows, and people
- **Trending Content**: Discover daily trending movies and TV shows
- **Detailed Information**: Comprehensive details including cast, ratings, genres, and release information
- **Smart Recommendations**: AI-powered similar content suggestions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Contemporary glass-morphic effects with backdrop blur
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Interactive Cards**: Hover effects revealing additional information
- **Dynamic Carousel**: Swiper-powered hero carousel for featured content
- **Professional Typography**: Optimized Lora font family for enhanced readability

### ⚡ Performance Optimizations
- **Next.js 15 App Router**: Leveraging the latest Next.js features
- **Server Components**: Optimized server-side rendering for faster page loads
- **Image Optimization**: Automatic WebP/AVIF conversion with lazy loading
- **Smart Caching**: 1-hour revalidation strategy for API responses
- **Incremental Static Regeneration**: Dynamic content with static performance

### 🔐 Security Best Practices
- **Environment Variables**: Secure API token management
- **Type Safety**: Full TypeScript implementation
- **Error Boundaries**: Graceful error handling throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.7 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 3.4 with custom animations
- **UI Components**: 
  - **Shadcn UI**: Fully integrated component library (Button, Badge, Input, Alert, Separator, Tabs, Select, Skeleton, Accordion)
  - Radix UI primitives for accessibility
  - Custom glassmorphic elements
- **Animations**: Framer Motion 12.4
- **Carousel**: Swiper 11.2
- **Icons**: Lucide React, React Icons
- **API**: The Movie Database (TMDB) API v3

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm/bun

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.local.example` to `.env.local`
   - Get your API token from [TMDB](https://www.themoviedb.org/settings/api)
   - Add your token to `.env.local`:
     ```env
     NEXT_PUBLIC_TMDB_API_TOKEN=your_api_token_here
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
movies/
├── app/
│   ├── api/              # API integration layer
│   ├── components/       # Reusable React components
│   │   ├── defaults/     # Base UI components
│   │   └── nav/          # Navigation components
│   ├── constants/        # Configuration and constants
│   ├── types/            # TypeScript type definitions
│   ├── Movies/           # Movie pages and routes
│   ├── TvShows/          # TV show pages and routes
│   └── search/           # Search functionality
├── components/ui/        # shadcn/ui components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎯 Key Components

- **Hero Section**: Dynamic carousel showcasing trending content
- **Search Bar**: Instant search with auto-suggestions
- **Movie/TV Card**: Interactive cards with hover-reveal details
- **Details Page**: Comprehensive information display with cast and recommendations
- **Navigation**: Dual-mode navigation (sidebar for desktop, navbar for mobile)

## 🔄 API Integration

The application uses TMDB API v3 with the following endpoints:
- Trending movies/TV shows
- Search (multi-search)
- Movie/TV details
- Cast and crew information
- Similar content recommendations
- Season and episode details

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Design Features

- **Color Palette**: Purple/Fuchsia gradient theme with consistent gradient overlays
- **Typography**: Lora font family for enhanced readability
- **Component Library**: Shadcn UI for consistent, accessible components
- **Effects**: Glassmorphism with fade effects, gradient text, animated backgrounds
- **Interactions**: Smooth hover states, scale transitions, micro-animations
- **Accessibility**: WCAG compliant with semantic HTML, ARIA labels, keyboard navigation

## 🌟 Notable Implementations

1. **Shadcn UI Integration**: Complete component library implementation for consistent design
2. **Dynamic Routing**: Leveraging Next.js 15 dynamic routes with async params
3. **Parallel Data Fetching**: Optimized Promise.all for multiple API calls
4. **Smart Image Handling**: Fallback images for missing posters
5. **Debounced Search**: Performance-optimized search with 500ms debounce
6. **Responsive Carousels**: Smart loop mode based on item count for optimal UX
7. **Client-Side Navigation**: Next.js Link for all navigation with prefetching
8. **Gradient Fade Effects**: Smooth background transitions with blur effects

## 📈 Performance Metrics

- Optimized for Core Web Vitals
- Server-side rendering for initial page load
- Lazy loading for images and components
- Code splitting for reduced bundle size

## 🔮 Future Enhancements

- User authentication and watchlists
- Advanced filtering and sorting
- Video trailer integration
- Social sharing features
- PWA support

## 📄 License

This project is created for portfolio purposes.

## 👨‍💻 Developer

**[Your Name]**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]

---

**Note**: This project requires a TMDB API key. Sign up at [The Movie Database](https://www.themoviedb.org/) to obtain your free API key.

Built with ❤️ using Next.js and TypeScript
