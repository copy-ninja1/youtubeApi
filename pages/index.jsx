import React from "react";
import Head from "next/head";
import Link from "next/link";

import artistGroup from "../global/artists";
import { SearchBox, Header } from "../components";

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
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      {/* <div className="flex flex-col items-center justify-center min-h-screen py-2"></div> */}
      <main className="flex flex-col items-center justify-center w-full min-h-screenflex-1 mt-20  py-2  px-4 md:px-20 text-center">
        <h1 className=" text-4xl md:text-6xl font-bold">Free Music Videos</h1>

        <p className="my-3 text-xl md:text-2xl">
          Listening is everything, millions of songs to choose from <br />
          <code className="p-3 font-mono text-lg bg-teal-100 rounded-md">
            Get Started
          </code>
        </p>
        <SearchBox></SearchBox>
        {/*  */}

        <div className="">
          {artist.map((group, index) => {
            return (
              <div
                className="flex flex-wrap sm:flex-nowrap  justify-center align-items-center"
                key={index}
              >
                {group.map((art, i) => {
                  return (
                    <div key={art} className="m-1 mt-0 mb-3 text-center">
                      <div
                        className="mx-auto w-16 h-16 p-1 border-2 border-light-blue-400 rounded-full
                        cursor-pointer hover:shadow-lg"
                      >
                        <a href={`/search?q=${art.name}`}>
                          {" "}
                          <img
                            src={art.imageSrc}
                            alt={art.name}
                            className="w-full h-full rounded-full bg-light-blue-100 "
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <p className="text-gray-700"> {art.name}</p>
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
          Powered by &nbsp;<h5>ROK</h5>
        </a>
      </footer>
    </div>
  );
}
