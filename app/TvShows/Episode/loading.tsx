import { GridContainer } from "@/app/components";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <div className="relative mb-12">
        <GridContainer
          className="glass-dark rounded-3xl items-center md:grid-cols-2 shadow-2xl shadow-fuchsia-500/20 p-8 gap-8 border border-gray-700/30"
          cols={1}
        >
          <div className="md:col-span-1">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 blur-xl z-0"></div>
              <Skeleton className="relative w-full h-64 md:h-96 rounded-2xl" />
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col gap-6">
            <Skeleton className="h-10 w-3/4 mx-auto md:mx-0" />

            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Skeleton className="h-4 w-20 flex-shrink-0" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </div>
        </GridContainer>
      </div>

      {/* Overview Skeleton */}
      <div className="glass-dark rounded-2xl p-6 mb-8 border border-gray-700/30">
        <Skeleton className="h-8 w-32 mb-4" />
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full my-2" />
        ))}
      </div>

      {/* Episodes Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="glass-dark rounded-xl overflow-hidden border border-gray-700/30"
            >
              <Skeleton className="h-40 w-full" />
              <div className="p-3 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Player Skeleton */}
      <div className="glass-dark rounded-3xl overflow-hidden shadow-2xl border border-gray-700/30 mb-8">
        <div className="bg-gradient-to-r from-fuchsia-600/20 via-purple-600/20 to-pink-600/20 p-6 border-b border-gray-700/50">
          <Skeleton className="h-8 w-64" />
        </div>
        <Skeleton className="w-full aspect-video bg-black" />
        <div className="bg-gray-900/50 backdrop-blur-sm p-4 text-center">
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      </div>

      {/* Similar Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-[200px] space-y-2">
              <Skeleton className="h-[300px] w-full rounded-xl" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
