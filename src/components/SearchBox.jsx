import React from "react";

import './search.css'

const SearchBox = ({ setSearchValue, searchValue }) => {
  return (
    <>
      <div className="search" >
        <input
          type="search"
          placeholder="Search any Movie"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBox;
