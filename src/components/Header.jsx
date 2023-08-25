import React from "react";
import SearchBox from "./SearchBox";

import "./header.css";

const Header = ({ setSearchValue, searchValue }) => {
  return (
    <>
      <div className="header" >
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </>
  );
};

export default Header;
