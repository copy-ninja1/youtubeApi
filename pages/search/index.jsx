import React, { useState } from "react";
import Layout from "../../layout";
import cheerio from "cheerio";

import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MediaListing, useWindowDimensions } from "../../components";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

function SearchPage({ mediaDetails, query }) {
  const foundVideos = mediaDetails.videos;
  const { width } = useWindowDimensions();

  const [currentMedia, setCurrentMedia] = useState({});
  const [_width, setWidth] = React.useState();
  function handleVideoChange(media) {
    setCurrentMedia(media);
  }
  React.useEffect(() => {
    setWidth(width);
  }, [width]);
  return (
    <Layout
      pageTitle={`ROK - ${query} Free Music Videos`}
      keywords={query}
      socialImage={foundVideos && foundVideos[0] ? foundVideos[0].imageSrc : ""}
      description="Rok Download Free MP3 Rock and other soul, Pop, Latin, Jazz, Hip hop, Folk, Electronic, Country, Blues, Asian, African and a lot of Remixes.And in order to download music"
    >
      <div className="lg:flex mt-20">
        <div
          className="fixed z-40 inset-0 flex-none h-full 
       bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto 
       lg:overflow-y-visible lg:pt-0 lg:w-20 xl:w-24 lg:block hidden"
        ></div>
        {/* {currentMedia.uid.videoId} */}
        <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible ">
          {/* <div className="md:hidden">
            <SearchBox />
          </div> */}
          <div className="w-full md:flex">
            <div className="min-w-0 flex-auto  sm:px-6 xl:px-8 pt-10 pb-10 md:pb-24 lg:pb-16">
              <div
                className={`video-box shadow-xl sm:rounded-md mb-6 fixed top-11 sm:relative ${
                  currentMedia.uid || _width > 900 ? "block" : "hidden"
                }`}
              >
                {/* video player */}
                {currentMedia.uid ? (
                  <React.Fragment>
                    <div className="text-lg p-2 bg-white border-t border-gray-200 md:border-0">
                      {currentMedia.title}
                    </div>
                    <Plyr
                      source={{
                        type: "video",
                        sources: [
                          {
                            src: currentMedia.uid,
                            provider: "youtube",
                          },
                        ],
                      }}
                    />
                  </React.Fragment>
                ) : (
                  <div className="hidden md:flex justify-center items-center h-full w-full text-8xl bg-teal-500 text-white sm:rounded-md">
                    <div className="text-center">
                      <BsFillCollectionPlayFill className="mx-auto"></BsFillCollectionPlayFill>
                      <h1 className=" text-xl md:text-2xl">
                        Play any song from the list
                      </h1>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`md:hidden sm:mt-0 ${
                  currentMedia.uid && width < 640 ? "mt-60" : ""
                }`}
              >
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
              <div className="md:flex justify-center h-full pt-10">
                <MediaListing
                  videos={foundVideos}
                  onhandleChange={handleVideoChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  // Fetch data from external API
  // console.log("context : :", Object.keys(context));
  // let videos = await fetch(`http://${req.headers.host}/api/media?q=${query.q}`)
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw res.statusText;
  //     }
  //     return res.json(); //we only get here if there is no error
  //   })
  //   .then(function (data) {
  //     // console.log({ data });
  //     return data;
  //   })
  //   .catch((err) => {
  //     console.log({ err });
  //   });

  // const html = await fethHtml(
  //   `https://mail.naijagreen.com.ng/s/${
  //     query.q != "undefined"
  //       ? query.q
  //       : "Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor"
  //   }/`
  // );
  let response = await fetch(
    `https://mail.naijagreen.com.ng/s/${
      query.q != "undefined"
        ? query.q
        : "Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor"
    }/`
  );
  // .then((res) => {
  //   if (!res.ok) {
  //     throw res.statusText;
  //   }
  //   return res.text(); //we only get here if there is no error
  // })
  // .then(function (data) {
  //   // console.log({ data });
  //   return data;
  // })
  // .catch((err) => {
  //   console.log({ err });
  // });

  const htmlString = await response.text();
  const $ = cheerio.load(htmlString);
  const { data } = await getData($);

  console.log({ data });

  function getData(cheerio) {
    return new Promise(async (resolve, reject) => {
      // console.log('ok')
      var _videos = [];

      await cheerio("div.card.card-cascade").each(function (i, element) {
        var $ele = cheerio(element);
        var id = $ele.find("a").attr("href").split("/")[1];
        var img = $ele.find("img");
        // console.log({ element: img.attr('alt') })

        _videos.push({
          id: i + 1,
          uid: id,
          title: img.attr("alt"),
          imageSrc: img.attr("src"),
        });
      });
      resolve({ data: _videos });
    });
  }
  // Pass data to the page via props
  return {
    props: { mediaDetails: { videos: data }, query: query.q ? query.q : "" },
  };
}

export default SearchPage;
