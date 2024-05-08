import searchIcon from "../../assets/images/svg/search.svg";

import search from "../../assets/styles/components/base/Search.module.scss"

function Search({ placeholder }) {
  return (
    <div className={`relative ${search.search}`}>
      <input placeholder={placeholder} />
      <img src={searchIcon} alt="search icon" />
    </div>
  );
}

export default Search;
