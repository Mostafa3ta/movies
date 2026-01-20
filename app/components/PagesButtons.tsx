"use client";
import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { updateSearchParams } from "../api";
import { useRouter } from "next/navigation";
import CustomPagesBtn from "./defaults/CustomPagesBtn";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function PagesButtons({
  movies,
  requestedPage,
}: {
  movies: any;
  requestedPage?: number;
}) {
  const MAX_PAGE_LIMIT = 500; // TMDB API hard limit
  const actualTotalPages = Math.min(movies?.total_pages || 1, MAX_PAGE_LIMIT);
  const currentPage = movies?.page || 1;
  const totalPages: boolean = currentPage >= actualTotalPages;
  const page_1: boolean = currentPage === 1;
  const router = useRouter();

  // Check if user requested a page beyond the maximum
  const pageExceedsMax = requestedPage && requestedPage > actualTotalPages;
  const exceededLimit = requestedPage && requestedPage > MAX_PAGE_LIMIT;

  const handleUpdateParams = (condition: boolean, num: number) => {
    const clampedPage = Math.min(Math.max(1, num), MAX_PAGE_LIMIT);
    const newPathName = updateSearchParams("page", clampedPage.toString());
    if (!condition) {
      router.push(newPathName);
    }
  };

  return (
    <>
      {/* Warning when requested page exceeds maximum */}
      {pageExceedsMax && (
        <div className="flex justify-center my-8 px-4">
          <Alert className="max-w-2xl glass-dark border-2 border-amber-500/40 shadow-xl shadow-amber-500/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <div className="p-2 rounded-full bg-amber-500/20 border border-amber-500/40">
                  <AlertCircle className="h-5 w-5 text-amber-400" />
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-semibold text-amber-300">Page Limit Exceeded</h4>
                <AlertDescription className="text-sm text-gray-300 leading-relaxed">
                  {exceededLimit
                    ? `Page ${requestedPage} exceeds TMDB API limit. Displaying page ${MAX_PAGE_LIMIT} (maximum available).`
                    : `Page ${requestedPage} is not available. Displaying page ${actualTotalPages} (maximum for this content).`}
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </div>
      )}

      <section
        className="flex justify-center mt-16 mb-4 items-center gap-1.5 md:gap-2"
        aria-label="Pagination"
      >
        <CustomPagesBtn
          onClick={() => handleUpdateParams(page_1, currentPage - 1)}
          condition={page_1}
        >
          <MdOutlineArrowBackIos size={16} className="shrink-0" />
          <span className="sr-only">Previous</span>
        </CustomPagesBtn>

        {/* page number 1 */}
        <div
          className={` flex items-center gap-2 ${page_1 || currentPage === 2 || currentPage === 3 ? "hidden" : ""}`}
        >
          <CustomPagesBtn
            onClick={() => handleUpdateParams(page_1, 1)}
            condition={page_1}
          >
            1
          </CustomPagesBtn>
          <span className="text-sm text-gray-500 font-bold">•••</span>
        </div>

        <CustomPagesBtn
          onClick={() => handleUpdateParams(page_1, currentPage - 1)}
          hide={page_1}
        >
          {currentPage - 1}
        </CustomPagesBtn>
        <CustomPagesBtn current={true}>{currentPage}</CustomPagesBtn>
        <CustomPagesBtn
          onClick={() => handleUpdateParams(totalPages, currentPage + 1)}
          hide={totalPages}
        >
          {currentPage + 1}
        </CustomPagesBtn>

        {/*  last page */}
        <div
          className={` flex items-center gap-2 ${totalPages || currentPage >= actualTotalPages - 1 ? "hidden" : ""}`}
        >
          <span className="text-sm text-gray-500 font-bold">•••</span>
          <CustomPagesBtn
            onClick={() => handleUpdateParams(totalPages, actualTotalPages)}
            condition={totalPages}
          >
            {actualTotalPages}
          </CustomPagesBtn>
        </div>

        <CustomPagesBtn
          onClick={() => handleUpdateParams(totalPages, currentPage + 1)}
          condition={totalPages}
        >
          <span className="sr-only z-40">Next</span>
          <MdOutlineArrowForwardIos size={16} className="shrink-0" />
        </CustomPagesBtn>
      </section>
    </>
  );
}
