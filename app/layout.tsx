import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GridContainer from "./components/defaults/GridContainer";
import SideBar from "./components/nav/SideBar";
import MaxWidthWrapper from "./components/defaults/MaxWidthWrapper";
import NavBar from "./components/nav/NavBar";
import { Footer, Search } from "./components";


const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: "Movies Club - Discover Movies & TV Shows",
    template: "%s | Movies Club"
  },
  description: "Explore trending movies and TV shows. Get detailed information about your favorite films, cast, ratings, and recommendations.",
  keywords: ["movies", "tv shows", "cinema", "entertainment", "streaming", "film database"],
  authors: [{ name: "Mostafa Mahmoud" }],
  creator: "Mostafa Mahmoud",
  openGraph: {
    type: "website",
    title: "Movies Club - Discover Movies & TV Shows",
    description: "Explore trending movies and TV shows with detailed information",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${inter.className} dark background min-h-screen h-full antialiased`}
      >
        <GridContainer className="grid-cols-12" cols={12}>
          <div className="glass-dark text-gray-50 hidden lg:block lg:justify-center lg:col-span-2">
            <SideBar />
          </div>
          <MaxWidthWrapper className="col-span-full lg:col-span-10">
            <NavBar />
            <Search />
            {children}
            <Footer />
          </MaxWidthWrapper>
        </GridContainer>
      </body>
    </html>
  );
}
