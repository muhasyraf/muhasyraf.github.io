import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React from "react";

function Page({ currentPage, addClass, meta: { desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Home - Muhammad Asyraf Faiz Kamil"
      : `${currentPage} - Muhammad Asyraf Faiz Kamil`
  }`;
  return (
    <div className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible">
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asyraf.live/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://asyraf.live/static/misc/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://asyraf.live/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta
          property="twitter:image"
          content="https://asyraf.live/static/misc/og.png"
        ></meta>
      </Head>
      <div className="hidden sm:block z-50 sticky top-0 left-0 right-0 w-full">
        <Navbar currentPage={currentPage} />
      </div>
      <div className="-m-5 block sm:hidden z-100 top-0 left-0 right-0 w-full">
        <MobileNavbar />
      </div>
      <main className="py-5 px-2 sm:px-10 w-full flex-1 text-center">
        <div className={`max-sm:pt-20 ${addClass}`}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  addClass?: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};
