import { NavLink, Link } from "react-router-dom";

import header from "../assets/styles/components/Header.module.scss";

import logo from "../assets/images/logo.svg";
import basket from "../assets/images/svg/basket.svg";
import img from "../assets/images/example/Img.png";

import Search from "./base/Search";

function Header() {
  return (
    <header className={header.header}>
      <div className={`flex ${header.logo_block}`}>
        <Link className={header.logo} to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Search placeholder="Search collections and creators" />
      </div>
      <div className={`flex ${header.nav_block}`}>
        <nav className={header.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Explore
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Marketplace
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Collections
          </NavLink>
        </nav>
        <div>
          <button className="btn blue-btn">Create</button>
          <button className="cursor-pointer">
            <img src={basket} alt="basket icon" />
          </button>
          <div className={header.user}>
            <img src={img} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
