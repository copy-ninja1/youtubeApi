import React from "react";

export default function ListItem({ media, onClick }) {
  return (
    <article
      className="p-4 flex space-x-4 cursor-pointer overflow-x-hidden"
      onClick={onClick}
    >
      <img
        src={media.imageSrc}
        alt={media.title}
        className="flex-none w-20 h-20 rounded-lg object-cover bg-gray-100"
      />
      <div className="min-w-0 relative flex-auto sm:pr-4 lg:pr-0 ">
        <h2 className="text-base font-medium text-black mb-0.5">
          {media.title}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">Time</dt>
            <dd>
              {/* <abbr title={`${media.publishedAt}`}>
                {media.publishedAt}
              </abbr> */}
            </dd>
          </div>
          {/* <div>
            <dt className="sr-only">Difficulty</dt>
            <dd> · {media.difficulty}</dd>
          </div>
          <div>
            <dt className="sr-only">Servings</dt>
            <dd> · {media.servings} servings</dd>
          </div> */}
          <div className="flex-none w-full mt-0.5 font-normal">
            {/* <dt className="inline">By</dt>{" "} */}
            {/* <dd className="inline text-black">{media.channelTitle}</dd> */}
          </div>
        </dl>
      </div>
    </article>
  );
}
