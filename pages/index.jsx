import React from "react";
import Head from "next/head";
import Image from "next/image";

import artistGroup from "../global/artists";

export default function Home() {
  const [artist, setArtist] = React.useState([]);

  function reStructureArray(arr) {
    var newArray = [[]];
    var init = 0;
    var step = 6;
    console.log(arr.length);
    for (var i = 0; i < arr.length; i++) {
      if (newArray[init]) {
        if (newArray[init].length <= step - init) {
          newArray[init].push(arr[i]);
          console.log(i);
        } else {
          // i--;
          init++;
        }
      } else {
        newArray.push([]);
        i--;
      }
    }
    //
    console.log({ newArray });
    setArtist(newArray);
  }

  React.useEffect(() => {
    reStructureArray(artistGroup);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Free Music Videos</h1>

        <p className="my-3 text-2xl">
          Get started by editing
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
        <div className="flex box border rounded-lg border-gray-100 w-96 mt-6 mb-12">
          <form>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full px-4 py-3 outline-none rounded-lg"
            />
          </form>
          <button className="bg-teal-500 w-32 m-2 rounded text-white">
            Search
          </button>
        </div>
        {/*  */}

        <div className="">
          {artist.map((group, index) => {
            return (
              <div
                className="flex justify-center align-items-center"
                key={index}
              >
                {group.map((art, i) => {
                  return (
                    <div key={art} className="m-1 mt-0 mb-3 text-center">
                      <div class="mx-auto w-16 h-16 p-1 border-2 border-light-blue-400 rounded-full  cursor-pointer hover:shadow-lg">
                        <img
                          src={art.imageSrc}
                          alt={art.name}
                          class="w-full h-full rounded-full bg-light-blue-100 "
                          loading="lazy"
                        />
                      </div>
                      <p class="text-gray-700"> {art.name}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
