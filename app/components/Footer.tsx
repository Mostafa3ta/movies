import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  const FooterLinks = [
    {
      name: "Portfolio",
      link: "https://portfolio2-eosin-six.vercel.app/",
      icon: <IoPersonCircleOutline className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      link: "https://github.com/Mostafa3ta",
      icon: <BsGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0",
      icon: <LiaLinkedin className="w-6 h-6" />,
    },
  ];
  return (
    <footer className="mt-16 glass-dark rounded-t-2xl py-8 text-white shadow-2xl">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          {FooterLinks.map((item, index) => (
            <Link
              key={index}
              className="group flex items-center gap-2 transition-all duration-300 hover:text-fuchsia-400 hover:-translate-y-1"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <span className="hidden sm:inline text-sm font-medium">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center text-sm text-gray-400 px-2 md:px-1">
          <p>
            © {new Date().getFullYear()} Movies Club. Built with Next.js &
            TypeScript
          </p>
          <p className="mt-1 text-xs">
            Data provided by{" "}
            <Link
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-400 hover:underline"
            >
              TMDB
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
