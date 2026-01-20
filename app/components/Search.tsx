"use client";
import { AnimatePresence } from "framer-motion";
import { SearchIcon, XIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import MotionItem from "./defaults/MotionItem";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { searchResults, updateSearchParams } from "../api";
import CustomImg from "./defaults/CustomImg";
import { TbMovie } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const Search = () => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Results, setResults] = useState<any>([])
  const outsideREF = useRef<HTMLDivElement | null>(null);
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const router = useRouter()
  const pathName = usePathname()
  const [query, setQuery] = useState(searchParams.get("query") || "");

  async function finalResults({ value, pageNum }: { value: string, pageNum: number }) {
    setLoading(true)
    return await searchResults({ value, pageNum })
      .then((res) => setResults(res))
      .then(() => setLoading(false))
  }

  const handleUpdateParams = (e: { value: string }) => {
    if (pathName === "/search") {
      searchParams.set('page', '1');
      searchParams.set('query', e.value.toLowerCase());
      const newPathName = `${typeof window !== 'undefined' ? window.location.pathname : ''}?${searchParams.toString()}`;
      router.push(newPathName);
      return
    }
    const newPathName = updateSearchParams('query', e.value.toLowerCase());
    router.push(newPathName);
  }

  useEffect(() => {
    typeof window !== 'undefined' ? window.addEventListener("click", (e) => {
      if (outsideREF.current && !outsideREF.current.contains(e.target as Node | null)) {
        setActive(false);
      }
    }) : null
  });

  useEffect(() => {
    const t = setTimeout(() => {
      finalResults({ value: query, pageNum: 1 })
    }, 500);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <div
      ref={outsideREF}
      className="w-full flex relative group mb-6 items-center gap-3 justify-between"
    >
      <div className="relative w-full">
        <Input
          value={query}
          onChange={(e) => {
            handleUpdateParams(e.target);
            setActive(true);
            setQuery(e.target.value);
          }}
          onClick={() => setActive(true)}
          placeholder="Search movies, TV shows..."
          className="border-2 border-gray-700/50 text-gray-100 md:rounded-2xl rounded-xl w-full pl-12 md:pr-12 pr-8 md:py-6 py-5 md:h-14 h-12 bg-gray-900/80 backdrop-blur-xl shadow-lg focus-visible:shadow-fuchsia-500/40 focus-visible:border-fuchsia-500/60 transition-all duration-300 placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-fuchsia-400 transition-colors duration-300 pointer-events-none" />
        {query !== '' && (
          <Button
            onClick={() => {
              handleUpdateParams({ value: "" });
              setQuery('');
            }}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full hover:bg-gray-700 p-0"
          >
            <XIcon className="w-4 h-4 text-gray-400 hover:text-fuchsia-400 transition-colors duration-200" />
          </Button>
        )}
      </div>

      {/* Search & Filtering Button */}
      <Link
        href={query !== '' ? `/search/?page=1&query=${query}` : '/search'}
        className="flex-shrink-0 md:p-4 p-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 md:rounded-2xl rounded-xl transition-all duration-300 text-sm font-semibold text-white shadow-lg hover:shadow-fuchsia-500/50 whitespace-nowrap border border-fuchsia-500/30"
      >
        Search
      </Link>

      {pathName !== '/search' &&
        <AnimatePresence>
          {(Results?.results || loading) && active && (
            <MotionItem
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full top-full z-50 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl shadow-fuchsia-500/20 max-h-[70vh] overflow-y-auto left-0 mt-3"
            >
              {loading ? (
                <div className="p-4 space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-gray-800/50">
                      <Skeleton className="h-20 w-32 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) :
                Results?.results?.length !== 0 ? (
                  <div className="p-3 space-y-2">
                    {Results?.results?.map((result: any) => (
                      result?.media_type !== "person" && (
                        <Link 
                          key={result.id} 
                          href={`${result?.media_type === "movie" ? "/Movies/MovieDetails" : "/TvShows/ShowDetails"}/?id=${result?.id}`}
                          onClick={() => setActive(false)}
                          className="flex gap-4 p-3 rounded-xl hover:bg-gray-800/60 transition-all duration-300 group/result border border-transparent hover:border-fuchsia-500/30"
                        >
                          <div className="relative w-28 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                            <CustomImg 
                              className="object-cover w-full h-full transition-transform duration-300 group-hover/result:scale-110" 
                              imgSrc={result?.backdrop_path} 
                              isWide 
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-center gap-1.5 min-w-0">
                            <h4 className="font-semibold text-sm text-gray-100 line-clamp-1 transition-colors group-hover/result:text-fuchsia-400">
                              {result?.name ? result?.name : result?.title}
                            </h4>
                            <div className="flex items-center gap-2">
                              {result?.media_type === "movie" ? (
                                <Badge variant="secondary" className="bg-red-500/20 text-gray-300 border-red-500/30 hover:bg-red-500/30 gap-1">
                                  <TbMovie className="w-3 h-3" /> Movie
                                </Badge>
                              ) : (
                                <Badge variant="secondary" className="bg-yellow-500/20 text-gray-300 border-yellow-500/30 hover:bg-yellow-500/30 gap-1">
                                  <MdOutlineLiveTv className="w-3 h-3" /> TV Show
                                </Badge>
                              )}
                            </div>
                          </div>
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  Results?.results?.length === 1 && Results?.results[0].media_type !== "person" ? (
                    <div className="p-3">
                      <Link 
                        href={`${Results?.results[0]?.media_type === "movie" ? "/Movies/MovieDetails" : "/TvShows/ShowDetails"}/?id=${Results?.results[0]?.id}`}
                        onClick={() => setActive(false)}
                        className="flex gap-4 p-3 rounded-xl hover:bg-gray-800/60 transition-all duration-300 group/result border border-transparent hover:border-fuchsia-500/30"
                      >
                        <div className="relative w-28 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <CustomImg 
                            className="object-cover w-full h-full transition-transform duration-300 group-hover/result:scale-110" 
                            imgSrc={Results?.results[0]?.backdrop_path} 
                            isWide 
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-1.5 min-w-0">
                          <h4 className="font-semibold text-sm text-gray-100 line-clamp-1 transition-colors group-hover/result:text-fuchsia-400">
                            {Results?.results[0]?.name ? Results?.results[0]?.name : Results?.results[0]?.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            {Results?.results[0]?.media_type === "movie" ? (
                              <Badge variant="secondary" className="bg-red-500/20 text-gray-300 border-red-500/30 hover:bg-red-500/30 gap-1">
                                <TbMovie className="w-3 h-3" /> Movie
                              </Badge>
                            ) : (
                              <Badge variant="secondary" className="bg-yellow-500/20 text-gray-300 border-yellow-500/30 hover:bg-yellow-500/30 gap-1">
                                <MdOutlineLiveTv className="w-3 h-3" /> TV Show
                              </Badge>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ) : (
                    query !== '' && (
                      <div className="p-6 text-center">
                        <p className="text-gray-400 text-sm">No results found for <span className="text-fuchsia-400 font-semibold">"{query}"</span></p>
                      </div>
                    )
                  )
                )}
              {Results?.total_pages > 1 && (
                <div className="p-4 border-t border-gray-700/50">
                  <Link 
                    href={`/search/?page=1&query=${query}`}
                    onClick={() => setActive(false)}
                    className="block text-center py-2.5 px-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 rounded-xl transition-all duration-300 text-sm font-semibold text-white shadow-lg hover:shadow-fuchsia-500/50"
                  >
                    View All Results
                  </Link>
                </div>
              )}
            </MotionItem>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

export default Search;