import React from "react";

const SearchItem = ({search,setSearch}) => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input id="search" type="text" placeholder="Search Here..."
      role="searchBox"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      
      ></input>
    </form>
  );
};

export default SearchItem;
