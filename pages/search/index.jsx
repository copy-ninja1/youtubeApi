import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MediaListing, SearchBox } from "../../components";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
function SearchPage({ mediaDetails }) {
  const router = useRouter();
  const foundVideos = mediaDetails.videos;

  const [currentMedia, setCurrentMedia] = useState({});
  const [searchQuery, setSearchQuery] = React.useState("");

  //   const player = new Plyr("#player");
  function handleVideoChange(media) {
    setCurrentMedia(media);
  }
  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log("searchQuery! ", searchQuery);
    router.replace("/search?q=" + searchQuery);
  }

  function handleSearchInput(event) {
    let val = event.target.value;
    setSearchQuery(val);
  }

  return (
    <div className="lg:flex">
      <Head>
        <title>Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className="fixed z-40 inset-0 flex-none h-full 
       bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto 
       lg:overflow-y-visible lg:pt-0 lg:w-20 xl:w-24 lg:block hidden"
      ></div>
      {/* {currentMedia.id.videoId} */}
      <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible ">
        <div className="md:hidden">
          <SearchBox
            actionUrl={`http://localhost:3000/search?q=${searchQuery}`}
            onChange={handleSearchInput}
            onSubmit={handleSearchSubmit}
          />
        </div>
        <div className="w-full md:flex">
          <div className="min-w-0 flex-auto  sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <div className="video-box shadow-xl sm:rounded-md mb-6 fixed sm:relative">
              {/* video player */}
              {currentMedia.id ? (
                <Plyr
                  source={{
                    type: "video",
                    sources: [
                      {
                        src: currentMedia.id.videoId,
                        provider: "youtube",
                      },
                    ],
                  }}
                />
              ) : (
                <div className="flex justify-center items-center h-full w-full text-8xl bg-gray-500 text-white sm:rounded-md">
                  <div className="text-center">
                    <BsFillCollectionPlayFill className="mx-auto"></BsFillCollectionPlayFill>
                    <h1 className=" text-xl md:text-2xl">
                      Play any song from the list
                    </h1>
                  </div>
                </div>
              )}
            </div>
            <div className="md:hidden mt-60 ">
              <MediaListing
                videos={foundVideos}
                onhandleChange={handleVideoChange}
              />
            </div>
          </div>
          <div
            className="hidden xl:text-sm  flex-none w-96 md:block
          overflow-hidden h-screen relative"
          >
            <SearchBox
              actionUrl={`http://localhost:3000/search?q=${searchQuery}`}
              onChange={handleSearchInput}
              onSubmit={handleSearchSubmit}
            />

            <div className="md:flex justify-center items-center h-full">
              <MediaListing
                videos={foundVideos}
                onhandleChange={handleVideoChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
  // Fetch data from external API
  // console.log("context : :", Object.keys(context));
  const res = await fetch(`http://${req.headers.host}/api/media?q=${query.q}`);
  const videos = await res.json();

  // Pass data to the page via props
  return { props: { mediaDetails: { ...videos } } };
}

export default SearchPage;
