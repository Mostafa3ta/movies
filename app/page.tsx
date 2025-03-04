import { fetchGeneres, fetchShowsLists } from "./api";
import { Heading, Hero, Hr, Similar } from "./components";
import GenereFilters from "./components/GenereFilters";
import { Genre } from "./types";

export default async function Home() {
  const cardItems = await fetchShowsLists({ listType: 'Trending', pageNum: 1 })


  return (
    <>
      <Hero />
      <Hr className="my-8" />
      <div className="my-6">
        <Heading title='Trending Tv Shows' />
        <Similar showType={true} hideTitle={true} Recommend={cardItems[0]} detailsLink="/TvShows/ShowDetails" />
      </div>
    </>
  );
}
