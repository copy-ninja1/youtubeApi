import React from "react";
import HashLoader from "react-spinners/HashLoader";
import ListItem from "./ListItem";

function MediaListing({ videos, onhandleChange }) {
  return (
    <div
      className="side-width bg-white sm:shadow-xl md:fixed rounded-md sm:border-2 
      sm:border-gray-100  md:h-5/6 style-2  md:overflow-auto"
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
          <h1 className="font-bold text-xl pt-6 text-center text-teal-600 appName">
            ROK videos
          </h1>
        </div>
      )}
    </div>
  );
}

export default MediaListing;
