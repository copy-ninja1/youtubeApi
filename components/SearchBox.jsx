import React from "react";
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
export default SearchBox;
