import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  title: "Portfolio of Mark Cirineo - Software Developer",
  description:
    "This is the portfolio of Mark Cirineo. I am a graduate CS student and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  icons: {
    icon: [
      { url: "/favicon-32x32-v2.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16-v2.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-v2.ico" },
    ],
    shortcut: "/favicon-v2.ico",
    apple: "/apple-touch-icon-v2.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="app-shell min-h-screen relative mx-auto w-full px-4 py-5 text-white sm:px-6 md:px-10 lg:py-8">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
