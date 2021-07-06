import React from "react";
import Head from "next/head";

import Link from "next/link";
import { SearchBox } from "./";

function Header({ pageTitle, keywords, description, socialImage }) {
  const [_pageTitle, setPageTitle] = React.useState(pageTitle);
  const updateMeta = (val) => {
    setPageTitle(val);
  };
  // React.useEffect(() => {
  //   upd
  // }, []);
  return (
    <React.Fragment>
      <Head>
        <title>ROK- Free music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lemonada:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={_pageTitle} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`The,Best,YouTube,to,MP3,Converter ${keywords}`}
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="vibes" />
        <meta property="og:site_name" content="Rokmovies" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rokmovies.net/" />
        <meta property="og:title" content={_pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta
          property="og:image"
          content={`${socialImage ? socialImage : "/rok.png"}`}
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.rokmovies.net/" />
        <meta property="twitter:title" content={_pageTitle} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={`${socialImage ? socialImage : "/rok.png"}`}
        />
        {/*  */}
        <meta name="theme-color" content="#439588" />
        <meta name="description" content={description} />
        <title>{_pageTitle}</title>
      </Head>
      <div className="header-2 fixed w-full z-50 shadow-lg top-0 left-0 ">
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="font-bold text-2xl text-teal-600 appName">ROK</a>
              </Link>
              <button
                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <SearchBox />
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Header;
