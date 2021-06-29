import React from "react";
import HashLoader from "react-spinners/HashLoader";
import ListItem from "./ListItem";

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

export default MediaListing;
