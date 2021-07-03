import React from "react";
import { useRouter } from "next/router";

function SearchBox() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchQuery != router.query.q && searchQuery) {
      console.log("searchQuery! ", searchQuery);
      router.replace("/search?q=" + searchQuery);
    }
  }

  function handleSearchInput(event) {
    let val = event.target.value;
    setSearchQuery(val);
  }
  React.useEffect(() => {
    if (router.query.q) {
      setSearchQuery(router.query.q);
    }
  }, []);
  // console.log({ actionUrl });
  return (
    <div className="flex box border rounded-lg border-gray-200 md:w-96 mt-6 mb-12 md:m-0 sm-m-0">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          onChange={handleSearchInput}
          value={searchQuery}
          placeholder="Search"
          className="w-full h-full px-4 py-3 outline-none rounded-lg"
        />
      </form>
      <button
        onClick={handleSearchSubmit}
        className="bg-teal-500 w-32 m-2 rounded text-white"
      >
        Search
      </button>
    </div>
  );
}
export default SearchBox;
