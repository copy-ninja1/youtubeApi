import React from "react";
import Head from "next/head";
import artistGroup from "../global/artists";

export default function Home() {
  const [artist, setArtist] = React.useState([]);

  function reStructureArray(arr) {
    var newArray = [[]];
    var init = 0;
    for (var i = 0; i < arr.length; i++) {
      if (newArray[init]) {
        if (newArray[init].length < 5 - init /*slideNumber*/) {
          newArray[init].push(arr[i]);
          console.log("ok");
        } else {
          i--;
          // step--;
          console.log({ init });
          init++;
        }
      } else {
        newArray.push([]);
        i--;
      }
    }
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
        {/* let n = 5; // you can take input from prompt or change the value
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
} */}
        <div className="flex">
          {artist.map((group, index) => {
            return (
              <div key={index}>
                {group.map((art, i) => {
                  return <div>{art.name}</div>;
                })}
              </div>
            );
          })}
        </div>
        {/*  */}
        {/* <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div> */}
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
