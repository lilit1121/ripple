import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";
import search from "../assets/images/svg/search.svg";
import basket from "../assets/images/svg/basket.svg";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <input placeholder="Search collections and creators" />
          <img src={search} alt="search icon" />
        </div>
      </div>
      <div>
        <nav>
          <Link to="/">Explore</Link>
          <Link to="/">Marketplace</Link>
          <Link to="/">Collections</Link>
        </nav>
        <button>Create</button>
        <button>
          <img src={basket} alt="basket icon" />
        </button>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
