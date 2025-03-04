"use client";
import { AnimatePresence } from "framer-motion";
import { SearchIcon, XIcon } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MotionItem from "./defaults/MotionItem";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import { fetchFn, searchResults, updateSearchParams } from "../api";
import CustomImg from "./defaults/CustomImg";
import { TbMovie } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Results, setResults] = useState<any>([])
  const outsideREF = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()
  const [query, setQuery] = useState(searchParams.get("query") || "");
  console.log(pathName);


  async function finalResults({ value, pageNum }: { value: string, pageNum: number }) {
    setLoading(true)
    return await searchResults({ value, pageNum })
      .then((res) => setResults(res))
      .then(() => setLoading(false))
  }

  const handleUpdateParams = (e: { value: string }) => {
    if (pathName === "/search") {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('page', '1');
      searchParams.set('query', e.value.toLowerCase());
      const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
      router.push(newPathName);
      return
    }
    const newPathName = updateSearchParams('query', e.value.toLowerCase());
    router.push(newPathName);
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target, outsideREF.current);
      if (outsideREF.current && !outsideREF.current.contains(e.target as Node | null)) {
        setActive(false);
      }
    });
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
      className=" w-full flex relative group mb-6 items-center gap-2 justify-between rounded-xl md:w-[80%] lg:w-[50%] bg-main"
    >
      <input
        value={query}
        onChange={(e) => {
          handleUpdateParams(e.target);
          setActive(true);
          setQuery(e.target.value);
        }}
        onClick={() => setActive(true)}
        placeholder="Search..."
        className=" focus:outline-none border border-black/30 text-gray-900 text-sm rounded-xl block w-full ps-10 p-2.5 dark:bg-black/30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
      <XIcon
        className={`${query === '' ? 'hidden' : 'block hover:text-fuchsia-500'} absolute right-3 w-5 h-5 cursor-pointer duration-150}`}
        onClick={() => {
          setQuery("");
        }}
      />

      <SearchIcon className="w-5 h-5 absolute left-3 cursor-pointer duration-150 hover:text-fuchsia-500" />

      {pathName !== '/search' &&
        <AnimatePresence>
          {(Results?.results || loading) && active && (
            <MotionItem
              initial={{ height: 0 }}
              whileInView={{ height: "auto" }}
              className="absolute w-full customScrollBar top-full z-50 bg-[#222425] rounded-2xl shadow-sm max-h-[70vh] overflow-y-scroll left-0"
            >
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="space-y-2 flex items-start gap-2 px-4 py-2">
                    <Skeleton className="h-20  rounded-2xl w-[40%]" />
                    <div className=" flex flex-col gap-3">
                      <Skeleton className="h-4 w-[150px]" />
                    </div>
                  </div>
                ))
              ) :
                Results?.results?.length !== 0 ? (
                  Results?.results?.map((result: any) => (
                    <div key={result.id} className={`flex gap-2 px-4 py-2 ${result?.media_type == "person" && "hidden"}`}>
                      <Link href={`${result?.media_type === "movie" ? "/Movies/MovieDetails" : "/TvShows/ShowDetails"}/?id=${result?.id}`} className="grid grid-cols-2 overflow-hidden w-full group/item bg-neutral-900 gap-6 items-center">
                        <div className="col-span-1 overflow-hidden">
                          <CustomImg className="object-cover w-full transition-all group-hover/item:scale-110" imgSrc={result?.backdrop_path} isWide />
                        </div>
                        <div className="w-full col-span-1 flex flex-col gap-2">
                          <h1 className="font-semibold capitalize text-lg transition-all group-hover/item:text-fuchsia-400 text-white">{result?.name ? result?.name : result?.title}</h1>
                          {result?.media_type === "movie" ?
                            (<p className="flex items-center gap-1 text-sm text-gray-400">Movie <TbMovie className="w-4 h-4 text-red-600" /> </p>)
                            : (<p className="flex items-center gap-1 text-sm text-gray-400">Tv <MdOutlineLiveTv className="w-4 h-4 text-yellow-600" /> </p>)}
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  Results?.results?.length === 1 && Results?.results[0].media_type !== "person" ?
                    <div key={Results?.results[0].id} className={`flex gap-2 px-4 py-2 ${Results?.results[0]?.media_type == "person" && "hidden"}`}>
                      <Link href={`${Results?.results[0]?.media_type === "movie" ? "/Movies/MovieDetails" : "/TvShows/ShowDetails"}/?id=${Results?.results[0]?.id}`} className="grid grid-cols-2 overflow-hidden w-full group/item bg-neutral-900 gap-6 items-center">
                        <div className="col-span-1 overflow-hidden">
                          <CustomImg className="object-cover w-full transition-all group-hover/item:scale-110" imgSrc={Results?.results[0]?.backdrop_path} isWide />
                        </div>
                        <div className="w-full col-span-1 flex flex-col gap-2">
                          <h1 className="font-semibold capitalize text-lg transition-all group-hover/item:text-fuchsia-400 text-white">{Results?.results[0]?.name ? Results?.results[0]?.name : Results?.results[0]?.title}</h1>
                          {Results?.results[0]?.media_type === "movie" ?
                            (<p className="flex items-center gap-1 text-sm text-gray-400">Movie <TbMovie className="w-4 h-4 text-red-600" /> </p>)
                            : (<p className="flex items-center gap-1 text-sm text-gray-400">Tv <MdOutlineLiveTv className="w-4 h-4 text-yellow-600" /> </p>)}
                        </div>
                      </Link>
                    </div>

                    : (query !== '' && <p className="text-center text-white py-4">Sorry, No results found with "{query}"</p>)
                )}
              {Results?.total_pages > 1 && <Link href={`/search/?page=1&query=${query}`} className="m-4 flex justify-center hover:text-fuchsia-500 hover:underline duration-150">View More Results</Link>}
            </MotionItem>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

export default Search;