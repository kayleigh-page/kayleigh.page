"use client";
import Link from "next/link";
//import { useRouter } from "next/router";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

//import { Caveat } from "next/font/google";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
//import { GoLightBulb } from "react-icons/go";

/*const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});*/

const linkedin = "https://www.linkedin.com/in/kayleigh-page";
const github = "https://github.com/kayleigh-page";
const bluesky = "https://bsky.app/profile/kayleigh.page";
const twitter = "https://x.com/kayleigh_page_";
const instagram = "https://instagram.com/kayleigh_page_developer";
const facebook = "https://facebook.com/kayleigh.page.developer";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, title, children }) => {
    const extraProps = title
      ? {
          title,
          target: "_blank",
          rel: "me noopener noreferrer",
          "aria-label": title,
        }
      : {};
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`text-4xl uppercase py-3 px-4 transition duration-200 ${
          isActive
            ? "bg-pink-500 text-white shadow-lg"
            : "text-gray-700 hover:bg-pink-500 hover:text-white hover:shadow-lg"
        } ${title ? "mr-0 mt-[-4px]" : "mr-0"}`}
        onClick={() => setMenuOpen(false)}
        {...extraProps}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="bg-white flex items-center justify-start">
      {/* Mobile nav button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden text-6xl p-2 fixed left-0 top-0 transition duration-200"
      >
        <TbMenu2
          className={`${
            menuOpen ? "text-pink-500" : "text-pink-500 hover:text-pink-700"
          }`}
        />
      </button>

      {/* Desktop nav */}
      <div className="hidden flex-grow sm:flex items-center justify-start transition duration-200">
        <div className="flex gap-0">
          <NavLink href="/">Home</NavLink>
          {/*<NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/blog">Blog</NavLink>*/}
        </div>
      </div>
      {/*<Link
        href="/"
        className={`${caveat.className} font-sans hidden sm:flex mt-[-22px] mb-[-22px] text-[72px] justify-center flex-grow text-gray-700 hover:text-gray-500 font-medium`}
      >
        Kayleigh Page
      </Link>*/}
      <div className="hidden sm:flex items-center justify-end">
        <div className="flex gap-0">
          <NavLink href={linkedin} title="Kayleigh Pages's LinkedIn">
            <FaLinkedin />
          </NavLink>
          <NavLink href={github} title="Kayleigh Pages's GitHub">
            <FaGithub />
          </NavLink>
          <NavLink href={bluesky} title="Kayleigh Pages's Bluesky">
            <FaBluesky />
          </NavLink>
          <NavLink href={twitter} title="Kayleigh Pages's Twitter">
            <FaTwitter />
          </NavLink>
          <NavLink href={instagram} title="Kayleigh Pages's Instagram">
            <FaInstagram />
          </NavLink>
          <NavLink href={facebook} title="Kayleigh Pages's Facebook">
            <FaFacebook />
          </NavLink>
        </div>
      </div>
      {/*<div className="hidden sm:flex items-center justify-end">
        <div className="flex gap-0">
          <button className="ml-3 cursor-pointer text-4xl uppercase px-3 py-3 text-gray-700 hover:text-pink-500">
            <GoLightBulb />
          </button>
        </div>
      </div>*/}

      {/* Mobile nav */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-md z-50 transition duration-200">
          <div className="flex flex-col mt-28 p-2 space-y-1 items-center">
            <Link
              href="#!"
              className="text-7xl fixed left-1 top-2 text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              <IoClose />
            </Link>
            {/* Mobile darkmode button */}
            {/*<button className="cursor-pointer text-5xl p-2 fixed right-1 top-2 text-gray-700 hover:text-gray-500">
              <GoLightBulb />
            </button>*/}
            <NavLink href="/">Home</NavLink>
            {/*<NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/blog">Blog</NavLink>*/}
          </div>
          <div className="flex p-4 mt-6 space-y-1 justify-center">
            <NavLink href={linkedin} title="Kayleigh Pages's LinkedIn">
              <FaLinkedin />
            </NavLink>
            <NavLink href={github} title="Kayleigh Pages's GitHub">
              <FaGithub />
            </NavLink>
            <NavLink href={bluesky} title="Kayleigh Pages's Bluesky">
              <FaBluesky />
            </NavLink>
            <NavLink href={twitter} title="Kayleigh Pages's Twitter">
              <FaTwitter />
            </NavLink>
            <NavLink href={instagram} title="Kayleigh Pages's Instagram">
              <FaInstagram />
            </NavLink>
            <NavLink href={facebook} title="Kayleigh Pages's Facebook">
              <FaFacebook />
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
