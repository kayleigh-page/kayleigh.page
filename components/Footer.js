"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { GoMoveToTop } from "react-icons/go";

const linkedin = "https://www.linkedin.com/in/kayleigh-page";
const github = "https://github.com/kayleigh-page";
const bluesky = "https://bsky.app/profile/kayleigh.page";
const twitter = "https://x.com/kayleigh_page_";
const instagram = "https://instagram.com/kayleigh_page_developer";
const facebook = "https://facebook.com/kayleigh.page.developer";
const googleDevelopers = "https://g.dev/kayleigh-page";

export default function Footer() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = "k";
    const domain = "abs.gd";
    setEmail(`${user}@${domain}`);
  }, []);

  const BlogPost = ({ url, title, description, image }) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(url);
    };
    return (
      <div
        className="flex md:gap-4 gap-2 mb-4 cursor-pointer hover:text-gray-400"
        onClick={() => handleClick()}
      >
        <Image
          src={image}
          alt={title}
          width={90}
          height={90}
          loading="lazy"
          className="w-1/5 h-auto rounded-xl hover:rounded-full"
        />
        <div className="w-4/5 mt-[-4px] content-center">
          <h3 className="md:text-3xl text-2xl">{title}</h3>
          <p className="md:text-lg text-md">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-gray-950 text-white text-lg md:pt-0 pt-0 md:mt-50 mt-10">
      {/*<footer className="bg-gray-900 text-white md:pt-60 pt-30 md:mt-50 mt-10">*/}
      {/*<div className="md:p-20 p-6 max-w-4xl text-center md:mx-auto mx-5 bg-gray-800 rounded-2xl">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:mb-6 mb-2 text-center">Hear it first</h2>
          <p className="mb-6 md:text-xl text-lg">
            Subscribe to my newsletter to stay up to date about blog posts,
            behind the scenes, opportunities, discounts, future courses,
            availabilty, ...
          </p>
          <form>
            <input
              className="w-full h-12 bg-white mb-2 hover:bg-gray-100 text-gray-700 p-2 text-center"
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="Your email address"
            />
            <div className="flex md:gap-4 gap-2 items-center text-start md:text-md text-md mb-2">
              <input
                className="md:w-7 md:h-7 w-5 h-5 accent-green-500 cursor-pointer"
                type="checkbox"
                id="consent"
                name="consent"
                value="agree"
                required
              />
              <label for="consent" className="cursor-pointer w-full">
                I consent to receiving newsletters and promotional emails
                from Kayleigh Page.
                <br /> I understand that my personal data will be processed in
                accordance with the <a href="/privacy" className="underline">Privacy Policy</a>.
              </label>
            </div>
            <button className="w-full h-12 bg-gray-600 cursor-pointer hover:bg-gray-500 text-xl">
              Subscribe
            </button>
          </form>
        </div>
      </div>*/}
      <div className="md:flex md:pb-60 md:pt-60 md:p-20 px-2 pt-30 md:gap-10">
        <div className="md:w-2/6 md:mb-0 mb-30">
          <h2 className="text-4xl md:mb-6 mb-4 text-center">Kayleigh Page</h2>
          <Image
            src="/kayleigh-page-1.jpg"
            alt="Kayleigh Page"
            width={300}
            height={300}
            loading="lazy"
            className="w-2/3 mx-auto h-auto rounded-full mb-4 hover:rounded-xl shadow-2xl"
          />
          <p className="text-center text-lg">
            I&apos;m a Full-Stack Developer, Server Architect, DevOps
            Consultant, Security Expert and Marketing Specialist from Belgium.
            When I&apos;m not coding or working on my servers; I read, study,
            work out, game or spend some time hiking.
          </p>
        </div>
        <div className="md:w-2/6 md:mb-0 mb-30">
          <h2 className="text-4xl md:mb-6 mb-4 text-center">Blog posts</h2>
          <p className="text-center text-lg">Blog coming soon!</p>
          {/*<div>
            <BlogPost
              url="/blog/1"
              title="Test post 1"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/2"
              title="Test post 2"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/3"
              title="Test post 3"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/4"
              title="Test post 4"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
          </div>*/}
        </div>
        <div className="md:w-1/6 text-center md:mb-0 mb-30">
          <h2 className="text-4xl md:mb-6 mb-4">Contact me</h2>
          {email ? (
            <a
              className="hover:text-gray-400 text-lg"
              href={`mailto:${email}`}
              title="Send me an email"
            >
              My email: {email}
            </a>
          ) : (
            <span>Loading...</span>
          )}

          <p className="mt-2">
            🔐 PGP Key:{" "}
            <a
              className="cursor-pointer underline hover:text-gray-400"
              href="/pgp/pubkey.asc"
              download
            >
              pubkey.asc
            </a>
            {/*</p>
          <p className="mt-0">
            Fingerprint:*/}
            <br />
            <span className="md:text-lg text-sm">
              9DF1 4FA8 B4A8 597D 7C5E F6B7 6EF2 AED6 AF1A CE39
            </span>
          </p>
          <p className="mt-2">
            Or run:
            <br />
            gpg --locate-keys k@abs.gd
          </p>
        </div>
        <div className="md:w-1/6 md:pb-0 pb-30 text-center">
          <h2 className="text-4xl md:mb-6 mb-4">Follow me</h2>
          <p className="mb-1">
            <a
              className="hover:text-gray-400 text-lg"
              href={linkedin}
              title="Kayleigh Pages's LinkedIn"
              target="_blank"
              rel="me noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p className="mb-1">
            <a
              className="hover:text-gray-400 text-lg"
              href={github}
              title="Kayleigh Pages's Github"
              target="_blank"
              rel="me noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p className="mb-1">
            <a
              className="hover:text-gray-400 text-lg"
              href={bluesky}
              title="Kayleigh Pages's Bluesky"
              target="_blank"
              rel="me noopener noreferrer"
            >
              Bluesky
            </a>
          </p>
          <p className="mb-1">
            <a
              className="hover:text-gray-400 text-lg"
              href={twitter}
              title="Kayleigh Pages's Twitter"
              target="_blank"
              rel="me noopener noreferrer"
            >
              Twitter
            </a>
          </p>
          <p className="mb-1">
            <a
              className="hover:text-gray-400 text-lg"
              href={instagram}
              title="Kayleigh Pages's Instagram"
              target="_blank"
              rel="me noopener noreferrer"
            >
              Instagram
            </a>
          </p>
          <p className="mb-1">
            <a
              className="hover:text-gray-400 text-lg"
              href={facebook}
              title="Kayleigh Pages's Facebook"
              target="_blank"
              rel="me noopener noreferrer"
            >
              Facebook
            </a>
          </p>
          <p className="mb-1">
            <a
              className="hover:text-gray-400 text-lg"
              href={googleDevelopers}
              title="Kayleigh Pages's Google for Developers"
              target="_blank"
              rel="me noopener noreferrer"
            >
              Google for Developers
            </a>
          </p>
          <p className="w-fit mx-auto">
            <a
              id="cy-effective-orcid-url"
              className="hover:text-gray-400 text-md flex items-center content-center w-full"
              href="https://orcid.org/0009-0001-8517-0599"
              title="Kayleigh Pages's ORCID ID"
              target="orcid.widget"
              rel="me noopener noreferrer"
              style={{ verticalAlign: "top" }}
            >
              <Image
                src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
                alt="ORCID ID icon"
                width={16}
                height={16}
                loading="lazy"
                className="w-[16px] h-[16px] mr-1"
              />
              ORCID 0009-0001-8517-0599
            </a>
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 bg-black md:text-lg md:px-20 px-2 py-8 text-white md:text-start text-center">
        <div>
          &copy; {new Date().getFullYear()} Kayleigh Page. All rights reserved.
        </div>
        <div className="flex md:justify-end justify-center gap-4 md:mt-0 mt-4 md:pb-0 pb-10">
          <Link href="/terms" className="hover:text-gray-400">
            Terms of Use
          </Link>
          <Link href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>
      </div>
      <a
        href="#top"
        className="md:text-3xl text-2xl p-3 fixed right-5 bottom-5 rounded-full bg-black text-white hover:bg-pink-500 hover:text-white cursor-pointer"
      >
        <GoMoveToTop />
      </a>
    </footer>
  );
}
