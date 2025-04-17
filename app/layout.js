import Cookies from "js-cookie";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";


export const metadata = {
  title: "Kayleigh Page",
};

export default function RootLayout({ children }) {
  const consent = Cookies.get("userConsent");

  return (
    <html lang="en">
      <head>
        {consent === "accepted" && <GoogleAnalytics />}

        {/*<title>{metadata.title}</title>*/}
      </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
