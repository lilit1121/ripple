import { Link } from "react-router-dom";
import footer from "../assets/styles/components/Footer.module.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={footer.footer}>
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <ul>
            <li>Marketplace</li>
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
          <ul>
            <li>Community</li>
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
          <ul>
            <li>REIMAGIA</li>
            <li>
              The world's first and largest ethical Generative AI marketplace
              for creators worldwide where anything is possible and all are
              welcome
            </li>
            <li></li>
          </ul>
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
