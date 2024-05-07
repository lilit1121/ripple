import { Link } from "react-router-dom";
import footer from "../assets/styles/components/Footer.module.css";

import Discord from "../assets/images/socialmedia/Discord.svg";
import Twitter from "../assets/images/socialmedia/Twitter.svg";
import In from "../assets/images/socialmedia/ln.svg";

import Message from "./svg/Message";

import Select from "../components/base/Select";

function Footer() {
  const currentYear = new Date().getFullYear();
  const list = [
    {
      name: "Currency - USD",
      value: "test",
    },
  ];
  return (
    <footer className={footer.footer}>
      <div className={`flex flex-wrap ${footer.footer_container}`}>
        <div className="flex">
          <div>
            <h6 className={footer.footer_title}>Subscribe to updates</h6>
            <div className={`flex ${footer.footer_subscribe}`}>
              <div className="relative">
                <input type="text" placeholder="Enter your e-mail" />
                <Message color="#5D5D5B" />
              </div>
              <button className="btn secondary-btn-black">Subscribe</button>
            </div>
          </div>
          <div>
            <h6 className={footer.footer_title}>Follow us</h6>
            <div className={footer.footer_socialMedia}>
              <Link to="/">
                <img src={Discord} alt="discord" />
              </Link>
              <Link to="/">
                <img src={Twitter} alt="twitter" />
              </Link>
              <Link to="/">
                <img src={In} alt="in" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div>
            <h6 className={footer.footer_title}>Marketplace</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Explore</Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Become a Partner</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Platform Status</Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className={footer.footer_title}>Community</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/">Favorites</Link>
              </li>
              <li>
                <Link to="/">Watchlist</Link>
              </li>
              <li>
                <Link to="/">My Collections</Link>
              </li>
              <li>
                <Link to="/">Rankings</Link>
              </li>
              <li>
                <Link to="/">Activity</Link>
              </li>
            </ul>
          </div>

          <div className={footer.footer__reimagia_block}>
            <h6 className={footer.footer_title}>REIMAGIA</h6>
            <p>
              The world's first and largest ethical Generative AI marketplace
              for creators worldwide where anything is possible and all are
              welcome
            </p>
            <Select defaultValue="Currency - USD" list={list} />
          </div>
        </div>
      </div>
      <div>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">License</Link>
        <Link to="/">API</Link>
        <p>© {currentYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
