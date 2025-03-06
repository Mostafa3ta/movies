import type { Metadata } from "next";
import {Lora } from "next/font/google";
import "./globals.css";
import GridContainer from "./components/defaults/GridContainer";
import SideBar from "./components/nav/SideBar";
import MaxWidthWrapper from "./components/defaults/MaxWidthWrapper";
import NavBar from "./components/nav/NavBar";
import { Search } from "./components";


const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'latin-ext'],
});


// const limelight = Limelight({
//   weight: ['400'],
//   subsets: ['latin']
// });
// const alegreya = Alegreya({
//   weight: ['400', '500', '600', '700', '800', '900'],
//   subsets: ['cyrillic', 'latin', 'latin-ext'],
// });
// const alegreya = Merienda({
//   weight: ['300','400', '500', '600', '700', '800', '900'],
//   subsets: ['latin', 'latin-ext'],
// });
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
        className={`${lora.className} customScrollBar dark background min-h-screen h-full antialiased`}
      >
        <GridContainer className="grid-cols-12" cols={12}>
          <div className="bg-black/30 text-gray-50 hidden lg:block lg:justify-center lg:col-span-2">
            <SideBar />
          </div>
          <MaxWidthWrapper className="col-span-full customScrollBar lg:col-span-10">
            <NavBar />
            <Search />
            {children}
          </MaxWidthWrapper>
        </GridContainer>
      </body>
    </html>
  );
}
