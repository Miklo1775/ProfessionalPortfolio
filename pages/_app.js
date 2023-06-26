import "@/styles/globals.css";
import MajinBuu from "@/components/MajinBuu";
import Name from "@/components/Home/HomeHeadings/Name";
import Navbar from "@/components/Navbar";
import { v4 } from "uuid";
import localFont from "next/font/local";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Particles from "@/components/Particles";

const myFont = localFont({ src: "fonts/Roboto-Thin.ttf" });

export default function App({ Component, pageProps, router }) {
  const Router = useRouter();

  return (
    <main className={myFont.className}>
      {/* <Navbar /> */}
      {/* <MajinBuu /> */}
      <Particles />
      <Name />
      <Navbar />

      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          html,
          body {
            height: 100vh;
            position: relative;
            background-color: black;
          }

          body::-webkit-scrollbar {
            display: none;
          }

          .selected {
            color: white;
            scale: 1.2;
          }
          .selected {
            color: white;
            scale: 1.2;
          }
          .home-container,
          .about-container,
          .project-container,
          .news-container,
          .contact-container {
            height: 100vh;
            width: 100%;
            display: flex;

            justify-content: center;
            align-items: center;
          }

          .svg-container {
            position: fixed;
            top: 0;
            left: 0;
            height: 75px;
            width: 100%;
            background-color: transparent;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .heading-underline {
            width: 50%;
            border: 2px solid white;
            height: 1px;
            border-radius: 50%;
          }

          .about-div {
            color: white;
          }

          .headings-container {
            position: relative;

            width: 55%;
            display: flex;
            justify-content: center;
          }

          #message {
            margin: 0;
          }
          #message {
            margin: 0;
          }
        `}
      </style>
    </main>
  );
}
