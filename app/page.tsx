import { fetchShowsLists } from "./api";
import { Heading, Hero, Hr, Similar } from "./components";

export default async function Home() {
  const cardItems = await fetchShowsLists({ listType: 'Trending', pageNum: 1 })
  console.log(cardItems);
  

  return (
    <>
      <Hero />
      <Hr className="my-8" />
      <div className="my-6">
      <Heading title='Trending Tv Shows' />
      <Similar showType={true}   Recommend={cardItems[0]} detailsLink="/TvShows/ShowDetails" />
      </div>
    </>
  );
}
