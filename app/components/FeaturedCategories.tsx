"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TbMovie } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaStar, FaFireAlt, FaUserFriends } from "react-icons/fa";
import { FaArrowRightLong, FaArrowTrendUp } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    title: "Trending Movies",
    description: "What's hot right now",
    icon: <FaArrowTrendUp className="w-8 h-8" />,
    link: "/Movies/Trending/?page=1",
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Top Rated",
    description: "Critically acclaimed",
    icon: <FaStar className="w-8 h-8" />,
    link: "/Movies/top_rated/?page=1",
    gradient: "from-yellow-500 to-amber-500",
    bgGradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "Popular Shows",
    description: "Fan favorites",
    icon: <FaFireAlt className="w-8 h-8" />,
    link: "/TvShows/popular/?page=1",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Popular Stars",
    description: "Famous actors & directors",
    icon: <FaUserFriends className="w-8 h-8" />,
    link: "/Stars/popular/?page=1",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/20 to-blue-500/20",
  },
];

const filterableCategories = [
  {
    title: "All Movies",
    description: "Browse with advanced filters",
    icon: <TbMovie className="w-10 h-10" />,
    link: "/Movies/AllMovies/?page=1",
    gradient: "from-fuchsia-500 to-purple-500",
    bgGradient: "from-fuchsia-500/20 to-purple-500/20",
    filters: ["Genre", "Year", "Country", "Language"],
  },
  {
    title: "All TV Shows",
    description: "Browse with advanced filters",
    icon: <MdOutlineLiveTv className="w-10 h-10" />,
    link: "/TvShows/AllShows/?page=1",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    filters: ["Genre", "Year", "Country", "Language"],
  },
];

export default function FeaturedCategories() {
  return (
    <div className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 px-2 py-1.5">
          Browse by Category
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Find exactly what you're looking for
        </p>
      </motion.div>

      {/* Quick Browse Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={category.link} className="group block">
              <div className="relative h-28 md:h-48 lg:h-52 glass-dark rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10 h-full flex xl:flex-col xl:justify-between xl:items-center gap-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="scale-75 sm:scale-90 md:scale-100">{category.icon}</div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaArrowRightLong className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Advanced Filtering Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 mb-8"
      >
        <div className="flex flex-col items-center justify-center gap-3 mb-4">
          <FiFilter className="text-fuchsia-400 w-8 h-8 md:hidden" />
          <h3 className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            <FiFilter className="hidden md:inline text-fuchsia-400 w-6 h-6" />
            Explore with Advanced Filters
          </h3>
        </div>
        <p className="text-gray-400 text-center mb-8">
          Filter by genre, year, country, and language to find exactly what you
          want
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filterableCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Link href={category.link} className="group block">
              <div className="relative h-56 sm:h-60 md:h-64 lg:h-72 glass-dark rounded-2xl p-5 sm:p-6 md:p-8 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-fuchsia-500/20 hover:border-fuchsia-500/50">
                {/* Background gradient with fade */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
                ></div>

                {/* Filter Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-fuchsia-600/20 border border-fuchsia-500/40 rounded-full">
                  <FiFilter className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-fuchsia-400" />
                  <span className="text-xs font-semibold text-fuchsia-300">
                    Filterable
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-2xl shadow-fuchsia-500/30 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="scale-75 sm:scale-90 md:scale-100">{category.icon}</div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      {category.description}
                    </p>

                  </div>
                    {/* Filter Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.filters.map((filter) => (
                        <Badge
                          key={filter}
                          variant="outline"
                          className="text-xs bg-gray-800/60 text-gray-300 border-gray-700/50 group-hover:border-fuchsia-500/30 transition-colors duration-300"
                        >
                          {filter}
                        </Badge>
                      ))}
                    </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaArrowRightLong className="w-6 h-6 sm:w-7 sm:h-7 text-fuchsia-400" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
