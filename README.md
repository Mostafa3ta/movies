# 🎬 Movies Club - Modern Movie & TV Show Discovery Platform

A sophisticated, full-featured movie and TV show discovery platform built with Next.js 15, featuring a beautiful glassmorphism UI, real-time search, integrated video player, and comprehensive media information from The Movie Database (TMDB) API.

![Next.js](https://img.shields.io/badge/Next.js-15.1.11-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)

## ✨ Key Features

### 🎯 Core Functionality
- **Multi-Search Capability**: Real-time unified search for movies, TV shows, and celebrities with debouncing
- **Video Streaming Integration**: Built-in video player for watching movies and TV episodes directly
- **Advanced Filtering**: Filter content by genre, release year, country, and language
- **Comprehensive Content Categories**:
  - **Movies**: All Movies, Trending, Now Playing, Popular, Top Rated
  - **TV Shows**: All Shows, Trending, Airing Today, On The Air, Top Rated
  - **People/Celebrities**: Popular Stars, Trending People
- **Detailed Information Pages**: 
  - Complete cast and crew information
  - Season and episode breakdowns for TV shows
  - Celebrity filmography with movies and TV show appearances
  - Similar content recommendations
  - High-quality images and posters
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with adaptive navigation

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Contemporary glass-morphic effects with backdrop blur
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Interactive Cards**: Hover effects revealing additional information and ratings
- **Dynamic Hero Carousel**: Swiper-powered carousel showcasing featured content
- **Dual Navigation System**: 
  - Sidebar navigation for desktop
  - Top navbar for mobile/tablet
- **Professional Typography**: Optimized Lora font family for enhanced readability
- **Parallax Effects**: Engaging scroll-based animations

### ⚡ Performance Optimizations
- **Next.js 15 App Router**: Leveraging the latest App Router features
- **Server Components**: Optimized server-side rendering for faster initial loads
- **Parallel Data Fetching**: Multiple API calls executed simultaneously with Promise.all
- **Image Optimization**: Automatic Next.js image optimization with lazy loading
- **Smart Caching**: 1-hour revalidation strategy for API responses
- **Pagination Management**: Smart page clamping (max 500 pages per TMDB API limits)
- **Incremental Static Regeneration**: Dynamic content with static performance

### 🔐 Security & Best Practices
- **Environment Variables**: Secure API token management with validation
- **Type Safety**: Full TypeScript implementation with strict typing
- **Error Boundaries**: Graceful error handling with custom error and not-found pages
- **Loading States**: Skeleton loaders for improved perceived performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.11 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 3.4 with custom animations
- **UI Components**: 
  - **Shadcn UI**: Complete component library (Button, Badge, Input, Alert, Separator, Tabs, Select, Skeleton, Accordion, Card)
  - Radix UI primitives for accessibility
  - Custom glassmorphic elements
- **Animations**: Framer Motion 12.4
- **Carousel**: Swiper 11.2
- **Icons**: Lucide React 0.475, React Icons 5.4
- **Video Streaming**: Embedded player using VidSrc
- **API**: The Movie Database (TMDB) API v3
- **Utilities**: clsx, tailwind-merge, class-variance-authority

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
│   ├── api/              # API integration layer with TMDB
│   │   ├── index.ts      # Main API functions (fetch movies, shows, people, search)
│   │   └── search/       # Search API route
│   ├── components/       # Reusable React components
│   │   ├── defaults/     # Base UI components (Logo, Heading, Rating, Spinner, etc.)
│   │   ├── nav/          # Navigation components (NavBar, SideBar, NavLink)
│   │   ├── AdvancedFilters.tsx   # Genre, year, country, language filters
│   │   ├── CastDetails.tsx       # Cast and crew display
│   │   ├── Episodes.tsx          # Episode listings
│   │   ├── FeaturedCategories.tsx # Home page categories
│   │   ├── Hero.tsx              # Hero carousel section
│   │   ├── MovieCard.tsx         # Movie/Show card component
│   │   ├── Search.tsx            # Search bar component
│   │   ├── Seasons.tsx           # Season selector
│   │   ├── SeasonsEpisodes.tsx   # Combined season/episode view
│   │   ├── Similar.tsx           # Similar content recommendations
│   │   ├── SwiperCards.tsx       # Swiper carousel wrapper
│   │   └── VideoPlayer.tsx       # Embedded video player
│   ├── constants/        # Configuration, API options, navigation links
│   ├── types/            # TypeScript type definitions
│   ├── Movies/           # Movie pages
│   │   ├── [lists]/      # Dynamic movie list pages (trending, popular, etc.)
│   │   └── MovieDetails/ # Individual movie detail page
│   ├── TvShows/          # TV show pages
│   │   ├── [lists]/      # Dynamic TV show list pages
│   │   ├── ShowDetails/  # Individual show detail page
│   │   ├── Season/       # Season detail page
│   │   └── Episode/      # Episode detail page
│   ├── Stars/            # Celebrity/People pages
│   │   ├── [lists]/      # Popular and trending people
│   │   └── PersonDetails/ # Individual celebrity page
│   ├── search/           # Search results page
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── error.tsx         # Error boundary
│   ├── not-found.tsx     # 404 page
│   └── loading.tsx       # Loading page
├── components/ui/        # Shadcn UI components
├── lib/                  # Utility functions (cn helper)
└── public/               # Static assets
```

## 🎯 Key Components & Pages

### Core Components
- **Hero Section**: Dynamic Swiper carousel showcasing trending movies and shows
- **Search Bar**: Instant multi-search with auto-suggestions and debouncing
- **Movie/TV Card**: Interactive cards with hover-reveal details, ratings, and quick info
- **Video Player**: Embedded streaming player supporting movies and TV episodes
- **Advanced Filters**: Filter by genre, year, country, and language
- **Navigation**: Dual-mode navigation (sidebar for desktop, navbar for mobile)
- **Featured Categories**: Home page showcasing multiple content categories

### Page Routes
- **Home (`/`)**: Featured categories, trending shows, popular movies, top-rated content
- **Movies (`/Movies/[lists]`)**: 
  - All Movies, Trending, Now Playing, Popular, Top Rated
  - Dynamic pagination support
- **Movie Details (`/Movies/MovieDetails`)**: 
  - Full movie information, cast, crew
  - Video player integration
  - Similar movie recommendations
- **TV Shows (`/TvShows/[lists]`)**: 
  - All Shows, Trending, Airing Today, On The Air, Top Rated
  - Dynamic pagination support
- **Show Details (`/TvShows/ShowDetails`)**: 
  - Complete show information, seasons overview
  - Cast and crew details
  - Similar show recommendations
- **Season Details (`/TvShows/Season`)**: 
  - Episode listings
  - Season-specific information
- **Episode Details (`/TvShows/Episode`)**: 
  - Episode information and video player
  - Watch episodes directly
- **People (`/Stars/[lists]`)**: 
  - Popular and Trending celebrities
  - Dynamic pagination
- **Person Details (`/Stars/PersonDetails`)**: 
  - Complete biography and filmography
  - Tabbed view for movies and TV shows
  - Photo gallery
- **Search (`/search`)**: 
  - Unified search results for movies, shows, and people
  - Pagination support

## 🔄 API Integration

The application uses TMDB API v3 with comprehensive endpoint coverage:

### Movies
- Discover movies, trending, now playing, popular, top rated
- Detailed movie information with cast and crew
- Similar movie recommendations
- High-quality images and posters

### TV Shows
- Discover shows, trending, airing today, on the air, top rated
- Complete show details with season information
- Individual season and episode details
- Cast and crew information

### People/Celebrities
- Popular and trending people
- Detailed person information with biography
- Combined credits (movies and TV shows)
- Person images and photos

### Search
- Multi-search supporting movies, TV shows, and people
- Real-time debounced search (500ms)
- Paginated results

### Features
- 1-hour cache revalidation for optimal performance
- Smart pagination with 500-page limit handling
- Parallel data fetching for related content
- Automatic fallback for missing images

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Design Features

- **Color Palette**: Purple/Fuchsia/Pink gradient theme with consistent color harmony
- **Typography**: Lora font family for enhanced readability and elegance
- **Component Library**: Shadcn UI providing consistent, accessible components throughout
- **Glassmorphism Effects**: 
  - Backdrop blur with transparency
  - Layered glass panels for depth
  - Gradient overlays and borders
- **Animations & Interactions**: 
  - Smooth hover states with scale transitions
  - Framer Motion page transitions
  - Micro-animations on cards and buttons
  - Parallax scrolling effects
- **Visual Enhancements**:
  - Gradient text effects
  - Animated backgrounds
  - Rating displays with star icons
  - Badge components for genres and status
- **Responsive Images**:
  - Fallback images for missing posters
  - Lazy loading with blur placeholders
  - Optimized image sizes
- **Accessibility**: 
  - WCAG compliant color contrasts
  - Semantic HTML structure
  - ARIA labels and roles
  - Keyboard navigation support
  - Screen reader friendly

## 🌟 Notable Implementations

1. **Shadcn UI Integration**: Complete implementation of shadcn/ui component library for consistent design system
2. **Dynamic Routing with Async Params**: Leveraging Next.js 15 async params for cleaner server components
3. **Parallel Data Fetching**: Optimized Promise.all for fetching multiple related data simultaneously
4. **Smart Image Handling**: Comprehensive fallback system for missing or broken poster images
5. **Debounced Search**: Performance-optimized search with 500ms debounce preventing excessive API calls
6. **Advanced Filtering System**: Multi-criteria filtering (genre, year, country, language) with URL state management
7. **Responsive Carousels**: Smart loop mode based on item count for optimal user experience
8. **Video Player Integration**: Seamless embedded player supporting both movies and TV episodes
9. **Pagination System**: Intelligent page clamping respecting TMDB's 500-page limit
10. **Client-Side Navigation**: Next.js Link for all navigation with automatic prefetching
11. **Gradient Fade Effects**: Smooth background transitions with glassmorphic blur effects
12. **Type-Safe API Layer**: Fully typed API functions with comprehensive error handling
13. **Celebrity Pages**: Detailed person pages with tabbed movie/TV show filmography
14. **Season & Episode Navigation**: Intuitive TV show navigation with season selectors and episode lists
15. **Loading States**: Skeleton loaders for all major sections improving perceived performance

## 📈 Performance Metrics

- Optimized for Core Web Vitals
- Server-side rendering for initial page load
- Lazy loading for images and components
- Code splitting for reduced bundle size

## 🔮 Future Enhancements

- User authentication and personalized watchlists
- User ratings and reviews
- More advanced filtering options (runtime, rating range)
- Video trailer previews
- Social sharing features
- PWA (Progressive Web App) support
- Dark/Light theme toggle
- Multi-language support
- Bookmark and favorites system

## 📄 License

This project is created for educational and portfolio purposes.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use.

## 👨‍💻 Developer

Built with ❤️ using Next.js, TypeScript, and modern web technologies.

---

**Note**: This project requires a TMDB API key. Sign up at [The Movie Database](https://www.themoviedb.org/) to obtain your free API key.

**Credits**: 
- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Video streaming powered by VidSrc
- UI components from [Shadcn UI](https://ui.shadcn.com/)
