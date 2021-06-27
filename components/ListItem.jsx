import React from "react";

export default function ListItem({ media, onClick }) {
  return (
    <article
      className="p-4 flex space-x-4 cursor-pointer overflow-x-hidden"
      onClick={onClick}
    >
      <img
        src={media.snippet.thumbnails.default.url}
        alt={media.snippet.title}
        className="flex-none w-20 h-20 rounded-lg object-cover bg-gray-100"
      />
      <div className="min-w-0 relative flex-auto sm:pr-4 lg:pr-0 ">
        <h2 className="text-base font-medium text-black mb-0.5">
          {media.snippet.title}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">Time</dt>
            <dd>
              <abbr title={`${media.snippet.publishedAt}`}>
                {media.snippet.publishedAt}
              </abbr>
            </dd>
          </div>
          {/* <div>
            <dt className="sr-only">Difficulty</dt>
            <dd> · {media.snippet.difficulty}</dd>
          </div>
          <div>
            <dt className="sr-only">Servings</dt>
            <dd> · {media.snippet.servings} servings</dd>
          </div> */}
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">By</dt>{" "}
            <dd className="inline text-black">{media.snippet.channelTitle}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
