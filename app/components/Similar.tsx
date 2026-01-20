import React from "react";
import SwiperCards from "./SwiperCards";
import MovieCard from "./MovieCard";
import Heading from "./defaults/Heading";
import MotionItem from "./defaults/MotionItem";

export default function Similar({
  Recommend,
  detailsLink,
  showType = false,
  isPeople = false,
  hideTitle = false,
  title,
}: {
  Recommend: any;
  detailsLink: string;
  showType?: boolean;
  isPeople?: boolean;
  hideTitle?: boolean;
  title?: string;
}) {
  return (
    <div className="my-6 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/5 to-transparent -z-10 blur-3xl"></div>

      {!hideTitle && (
        <Heading center title={`${title} ${showType ? "Shows" : "Movies"}`} />
      )}

      <MotionItem
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SwiperCards
          spaceBetween={20}
          xsSlides={{ slidesPerView: 2, spaceBetween: 15 }}
          smSlides={{ slidesPerView: 3, spaceBetween: 20 }}
          mdSlides={{ slidesPerView: 4, spaceBetween: 20 }}
          lgSlides={{ slidesPerView: 5, spaceBetween: 20 }}
          pauseOnMouseEnter
          className="text-center items-center h-full glass-dark rounded-2xl py-8 shadow-xl"
          items={Recommend?.results
            ?.slice(0, 12)
            .map((show: any, index: number) => ({
              card: (
                <MotionItem
                  key={show.id}
                  delay={index * 0.05}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="group min-h-full my-4"
                >
                  <MovieCard
                    show={showType}
                    isPerson={isPeople}
                    movie={show}
                    pageLink={detailsLink}
                  />
                </MotionItem>
              ),
            }))}
        />
      </MotionItem>
    </div>
  );
}
