"use client";
import Cookies from "js-cookie";
import { Suspense } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { DynamicHead } from "@/components/DynamicHead";
import "./globals.css";

import { Lato } from "next/font/google";
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const hostname = "https://kayleigh.page";
const firstName = "Kayleigh";
const lastName = "Page";
const fullName = `${firstName} ${lastName}`;
const twitterUser = "@kayleigh_page_";
const locale = "en_US";
const facebookUrl = "https://facebook.com/kayleigh.page.developer";
const gender = "female";

export default function RootLayout({ children }) {
  const consent = Cookies.get("userConsent");

  return (
    <html lang="en">
      <head>
        {consent === "accepted" && <GoogleAnalytics />}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <meta name="hostname" content={hostname} />
        <meta name="expected-hostname" content={hostname} />

        <meta name="author" content={fullName} />
        <meta name="creator" content={fullName} />
        <meta name="publisher" content={fullName} />
        <meta name="copyright" content={fullName} />
        <meta name="subject" content={fullName} />

        <meta name="twitter:site" content={twitterUser} />
        <meta name="twitter:creator" content={twitterUser} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:locale" content={locale} />

        <meta property="og:site_name" content={fullName} />

        <meta property="article:author" content={facebookUrl} />
        <meta property="article:publisher" content={fullName} />

        <meta property="profile:first_name" content={firstName} />
        <meta property="profile:last_name" content={lastName} />
        <meta property="profile:gender" content={gender} />

        <link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" />

        <meta name="DC.format" content="text/html" />
        <meta name="DC.creator" content={fullName} />
        <meta name="DC.language" content={locale} />
        <meta name="DC.publisher" content={fullName} />

        <meta property="ya:ovs:allow_embed" content="true" />
        <meta property="ya:ovs:rating" content="10" />
        <meta property="ya:ovs:adult" content="false" />
        <meta property="ya:ovs:status" content="published" />
        <meta property="ya:ovs:is_official" content="true" />
        <meta property="ya:ovs:person" content={fullName} />
        <meta property="ya:ovs:production_company" content={fullName} />
        {/*
        <meta name="fediverse:creator" content="{{ $fediverseCreator->content }}">
        */}

        <link
          rel="icon"
          type="image/png"
          href="/logo/kayleigh-page-96x96.png"
          sizes="96x96"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/logo/kayleigh-page-32x32.png"
          sizes="32x32"
        />
        <meta
          name="msapplication-TileImage"
          content="/logo/kayleigh-page-256x256.png"
        />
        <link rel="mask-icon" href="/logo/kayleigh-page-256x256.png" />
        <meta name="theme-color" content="#ffffff" />
        {/*
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
        <meta name="theme-color" content="#0f0f0f" media="(prefers-color-scheme: dark)">
        */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Kayleigh Page" />
        <link rel="manifest" href="/logo/manifest.json" />
        <link rel="apple-touch-icon" href="/logo/kayleigh-page-256x256.png" />
        <link
          rel="apple-touch-startup-image"
          href="/logo/kayleigh-page-256x256.png"
        />

        <DynamicHead />
      </head>

      <body className={`${lato.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
