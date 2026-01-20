import { GridContainer, LoadingSkelton } from "@/app/components";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <>
      {/* Header Skeleton */}
      <div className="my-6 flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-8 w-48 sm:w-64 rounded-lg" />
      </div>

      {/* Grid Skeleton */}
      <GridContainer
        cols={2}
        className="my-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <LoadingSkelton key={i} />
        ))}
      </GridContainer>

      {/* Pagination Skeleton */}
      <div className="flex justify-center items-center gap-3 my-8">
        <Skeleton className="h-10 w-20 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-20 rounded-lg" />
      </div>
    </>
  );
}

export default loading;
