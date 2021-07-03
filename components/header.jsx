import React from "react";
import Head from "next/head";
import Link from "next/link";
import { SearchBox } from "./";

function Header() {
  return (
    <React.Fragment>
      <Head>
        <title>ROK- Free music</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lemonada:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
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
