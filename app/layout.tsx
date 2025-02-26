import type { Metadata } from "next";
import { Alegreya, Geist, Geist_Mono, Limelight } from "next/font/google";
import "./globals.css";
import GridContainer from "./components/defaults/GridContainer";
import SideBar from "./components/nav/SideBar";
import MaxWidthWrapper from "./components/defaults/MaxWidthWrapper";
import NavBar from "./components/nav/NavBar";
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaFireAlt, FaHeart, FaPlayCircle, FaStar } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { MdDashboard, MdLocalMovies, MdOutlineLiveTv } from 'react-icons/md'
import { CgGames } from 'react-icons/cg'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { TbMovie } from 'react-icons/tb'


const IcoStyle = 'w-4 h-4 text-red-500'

const MoviesLinks = [
  { name: 'All Movies', link: '/Movies/AllMovies/?page=1', icon: <TbMovie className='IcoStyle' /> },
  { name: 'Trending', link: '/Movies/Trending/?page=1', icon: <FaArrowTrendUp className='IcoStyle' /> },
  { name: 'Now Playing', link: '/Movies/now_playing/?page=1', icon: <FaPlayCircle className='IcoStyle' /> },
  { name: 'Popular', link: '/Movies/popular/?page=1', icon: <FaFireAlt className='IcoStyle' /> },
  { name: 'Top Rated', link: '/Movies/top_rated/?page=1', icon: <FaStar className='IcoStyle' /> },
]

const ShowsLinks = [
  { name: 'All Shows', link: '/TvShows/AllShows/?page=1', icon: <MdOutlineLiveTv /> },
  { name: 'Trending', link: '/TvShows/Trending/?page=1', icon: <FaArrowTrendUp /> },
  { name: 'Airing Today', link: '/TvShows/airing_today/?page=1', icon: <FaPlayCircle /> },
  { name: 'On The Air', link: '/TvShows/on_the_air/?page=1', icon: <FaFireAlt /> },
  { name: 'Top Rated', link: '/TvShows/top_rated/?page=1', icon: <FaStar /> },
]

const limelight = Limelight({
  weight: ['400'],
  subsets: ['latin']
});
const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['cyrillic', 'latin', 'latin-ext'],
});


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Movies App",
  description: "Movies App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${alegreya.className} customScrollBar dark background min-h-screen h-full antialiased`}
      >
        <GridContainer className="grid-cols-12" cols={12}>
          <div className="bg-black/30 text-gray-50 hidden lg:block lg:justify-center lg:col-span-2">
            <SideBar MoviesLinks={MoviesLinks} ShowsLinks={ShowsLinks} />
          </div>
          <MaxWidthWrapper className="col-span-full lg:col-span-10">
            <NavBar MoviesLinks={MoviesLinks} ShowsLinks={ShowsLinks} />
            {children}
          </MaxWidthWrapper>
        </GridContainer>
      </body>
    </html>
  );
}
