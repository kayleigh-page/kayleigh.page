import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata = {
  title: "Kayleigh Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
