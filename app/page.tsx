import { fetchShowsLists, fetchMoviesLists, fetchPeopleLists } from "./api";
import { Heading, Hero, Similar, MotionItem } from "./components";
import FeaturedCategories from "./components/FeaturedCategories";
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaFilm, FaTv } from 'react-icons/fa';

export const metadata = {
  title: "Home - Trending Movies & TV Shows",
  description:
    "Discover the latest trending movies and TV shows. Browse popular content and find your next watch.",
};

export default async function Home() {
  // Fetch multiple categories in parallel for a rich home page
  const [trendingShows, popularMovies, topRatedMovies, popularPeople] = await Promise.all([
    fetchShowsLists({ listType: "Trending", pageNum: 1 }),
    fetchMoviesLists({ listType: "popular", pageNum: 1 }),
    fetchMoviesLists({ listType: "top_rated", pageNum: 1 }),
    fetchPeopleLists({ listType: "popular", pageNum: 1 }),
  ]);

  return (
    <>
      {/* Hero Section with Parallax */}
      <Hero />

      {/* Welcome Section */}
      {/* <MotionItem delay={0.2} className="my-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Welcome to Movies Club
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Your ultimate destination for discovering amazing movies and TV shows. 
          Explore trending content, find hidden gems, and never miss what's worth watching.
        </p>
      </MotionItem> */}

      {/* Featured Categories */}
      <FeaturedCategories />

      <Separator className="my-12 bg-gray-700/30" />

      {/* Trending TV Shows Section */}
      <MotionItem delay={0.3} className="my-12">
        <Heading title="Trending TV Shows" />
        <Similar
          showType={true}
          hideTitle={true}
          Recommend={trendingShows[0]}
          detailsLink="/TvShows/ShowDetails"
        />
      </MotionItem>

      <Separator className="my-12 bg-gray-700/30" />

      {/* Popular Movies Section */}
      <MotionItem delay={0.4} className="my-12">
        <Heading title="Popular Movies" />
        <Similar
          showType={false}
          hideTitle={true}
          Recommend={popularMovies[0]}
          detailsLink="/Movies/MovieDetails"
        />
      </MotionItem>

      <Separator className="my-12 bg-gray-700/30" />

      {/* Top Rated Section */}
      <MotionItem delay={0.5} className="my-12">
        <Heading title="Top Rated Classics" />
        <Similar
          showType={false}
          hideTitle={true}
          Recommend={topRatedMovies[0]}
          detailsLink="/Movies/MovieDetails"
        />
      </MotionItem>

      <Separator className="my-12 bg-gray-700/30" />

      {/* Popular Stars Section */}
      <MotionItem delay={0.6} className="my-12">
        <Heading title="Popular Stars" />
        <Similar
          isPeople={true}
          hideTitle={true}
          Recommend={popularPeople[0]}
          detailsLink="/Stars/PersonDetails"
        />
      </MotionItem>

      {/* Call to Action Section */}
      <MotionItem
        delay={0.7}
        className="my-16 text-center glass-dark rounded-2xl p-12 shadow-2xl relative overflow-hidden group"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore More?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Browse our complete collection of movies and TV shows. Find your
            next binge-worthy series or that perfect movie night pick.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-semibold shadow-2xl hover:shadow-fuchsia-500/50 transition-all duration-300"
            >
              <Link href="/Movies/AllMovies/?page=1" className="flex items-center gap-2">
                <FaFilm className="w-5 h-5" />
                Explore All Movies
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Link href="/TvShows/AllShows/?page=1" className="flex items-center gap-2">
                <FaTv className="w-5 h-5" />
                Explore TV Shows
              </Link>
            </Button>
          </div>
        </div>
      </MotionItem>

      {/* Featured Stats */}
      <MotionItem
        delay={0.8}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4"
      >
        {[
          { label: "Movies", value: "10K+", icon: "🎬" },
          { label: "TV Shows", value: "5K+", icon: "📺" },
          { label: "Ratings", value: "1M+", icon: "⭐" },
          { label: "Updated", value: "Daily", icon: "🔄" },
        ].map((stat, index) => (
          <MotionItem
            key={stat.label}
            delay={0.9 + index * 0.1}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-dark rounded-xl p-4 md:p-6 text-center hover:scale-105 transition-transform duration-300 group"
          >
            <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-gray-400 text-xs md:text-sm mt-1">
              {stat.label}
            </div>
          </MotionItem>
        ))}
      </MotionItem>
    </>
  );
}
