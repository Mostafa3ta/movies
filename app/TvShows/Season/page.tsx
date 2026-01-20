/* eslint-disable @next/next/no-img-element */

import React from "react";
import {
  CastDetails,
  CustomImg,
  DetailsLine,
  Empty,
  Episodes,
  GridContainer,
  MotionItem,
  Rating,
  Seasons,
} from "../../components";
import { MdPeopleAlt } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';
import {
  fetchSeasonCast,
  fetchSeasonDetails,
  fetchShowDetails,
} from "@/app/api";

export const metadata = {
  title: "Show Season",
};

interface searchParamsProps {
  searchParams: Promise<{
    id: number;
    season: number;
  }>;
}

export default async function SeasonDetails({
  searchParams,
}: searchParamsProps) {
  const ShowId = (await searchParams)?.id;
  const seasonNum = (await searchParams)?.season;

  // Fetch all data in parallel to avoid sequential loading
  const [ShowDetails, SeasonDetails, Cast] = await Promise.all([
    fetchShowDetails({ ShowId }),
    fetchSeasonDetails({ ShowId, seasonNum }),
    fetchSeasonCast({ ShowId, seasonNum })
  ]);
    console.log(SeasonDetails, ShowDetails);

  return (
    <>
      {/* Hero Section */}
      <div className="relative mb-8 md:mb-12">
        <GridContainer
          className="glass-dark rounded-2xl md:rounded-3xl items-center md:grid-cols-3 shadow-2xl shadow-fuchsia-500/20 p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8 border border-gray-700/30"
          cols={1}
        >
          <MotionItem
            initial={{ opacity: 0, x: -30 }}
            animation={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center md:col-span-1"
          >
            <div className="relative group w-full max-w-[280px] sm:max-w-xs md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <CustomImg
                priority
                className="relative object-cover w-full aspect-[2/3] rounded-2xl shadow-2xl"
                imgSrc={SeasonDetails?.poster_path}
              />
            </div>
          </MotionItem>

          <MotionItem
            animation={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4 md:gap-6"
          >
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg py-1.5">
              {SeasonDetails?.name}
            </h1>

            <div className="space-y-3 md:space-y-4">
              <DetailsLine
                text="Show"
                value={
                  <span className="font-semibold text-white">
                    {ShowDetails?.name}
                  </span>
                }
              />
              <DetailsLine
                text="Rating"
                value={<Rating rate={SeasonDetails?.vote_average} />}
              />
              <DetailsLine
                text="Season"
                value={
                  SeasonDetails?.season_number === 0 ? (
                    <span className="italic text-gray-400">Unknown</span>
                  ) : (
                    <span className="font-semibold text-fuchsia-400">
                      {SeasonDetails?.season_number}
                    </span>
                  )
                }
              />
              <DetailsLine
                text="Episodes"
                value={
                  SeasonDetails?.episodes?.length === 0 ? (
                    <span className="italic text-gray-400">Unknown</span>
                  ) : (
                    <span className="font-semibold text-fuchsia-400">
                      {SeasonDetails?.episodes?.length}
                    </span>
                  )
                }
              />
              <DetailsLine
                noLine
                text="Air Date"
                value={
                  SeasonDetails?.air_date === "" ? (
                    <span className="text-gray-400">Unknown</span>
                  ) : (
                    <span className="font-semibold">
                      {SeasonDetails?.air_date}
                    </span>
                  )
                }
              />
            </div>
          </MotionItem>
        </GridContainer>
      </div>

      {/* Overview Section */}
      <MotionItem
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-8 md:my-12 glass-dark rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-fuchsia-400 mb-3 md:mb-4">Overview</h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {ShowDetails.overview}
        </p>
      </MotionItem>

      {/* Season Episodes */}
      <Episodes SeasonDetails={SeasonDetails} ShowId={ShowId} />
      <Separator className="my-12 bg-gray-700/20" />

      {/* season cast */}
      {Cast?.cast?.length === 0 && Cast?.crew?.length === 0 ? (
        <Empty message="No Cast Information" icon={<MdPeopleAlt className="w-16 h-16 text-blue-400" />} />
      ) : (
        <CastDetails Cast={Cast?.cast?.length !== 0 ? Cast.cast : Cast.crew} />
      )}
      <Separator className="my-12 bg-gray-700/20" />

      {/* All Seasons */}
      <Seasons ShowId={ShowId} ShowDetails={ShowDetails} withHr={false} />
    </>
  );
}
