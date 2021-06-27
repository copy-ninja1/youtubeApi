import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import HashLoader from "react-spinners/HashLoader";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import "plyr/dist/plyr.css";
import { ListItem } from "../../components";
import Plyr from "plyr-react";

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
    router.push("/search?q=" + searchQuery);
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
          <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <div className="plyr__video-embed shadow-xl rounded-md">
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
                <div className="flex justify-center items-center h-full w-full text-8xl bg-gray-500 text-white">
                  <div className="text-center">
                    <BsFillCollectionPlayFill className="mx-auto"></BsFillCollectionPlayFill>
                    <h1 className=" text-xl md:text-2xl">
                      Play any song from the list
                    </h1>
                  </div>
                </div>
              )}
            </div>
            <div class="md:hidden">
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

function MediaListing({ videos, onhandleChange }) {
  return (
    <div
      className="side-width bg-white shadow-xl md:fixed rounded-md border-2 
    border-gray-100  md:h-5/6 style-2  md:overflow-auto"
    >
      {!videos ? (
        <div className="flex justify-center items-center h-full w-full">
          <HashLoader color="#4da4ff"></HashLoader>
        </div>
      ) : (
        <div className=" divide-y divide-gray-100">
          {videos.map((media, indx) => {
            return (
              <ListItem
                key={indx}
                onClick={() => onhandleChange(media)}
                media={media}
              ></ListItem>
            );
          })}
        </div>
      )}
    </div>
  );
}

function SearchBox({ actionUrl, onChange, onSubmit }) {
  // console.log({ actionUrl });
  return (
    <div className="box border border-gray-100  md:fixed side-width  md:mt-4  md:ml-4">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={onChange}
          className="w-full h-full px-4 py-3 outline-none"
        />
      </form>
    </div>
  );
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  console.log("context : :", context.query);
  const res = await fetch(
    `http://localhost:3000/api/media?q=${context.query.q}`
  );
  const videos = await res.json();

  // Pass data to the page via props
  return { props: { mediaDetails: { ...videos } } };
}

export default SearchPage;
