import React from "react";
import Link from "next/link";
import { SearchBox } from "./";

function Header() {
  return (
    <div className="header-2 fixed w-full z-50 shadow-lg top-0 left-0 ">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="font-bold text-xl text-teal-600">ROK</a>
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
  );
}

export default Header;
