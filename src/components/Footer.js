import React from "react";
import { Link } from "react-router-dom";
import footerStyles from "../assets/styles/components/Footer.module.css";
import Discord from "../assets/images/socialmedia/Discord.svg";
import Twitter from "../assets/images/socialmedia/Twitter.svg";
import LinkedIn from "../assets/images/socialmedia/ln.svg";
import Message from "./svg/Message";
import Select from "../components/base/Select";

function SocialMediaLink({ to, image, alt }) {
  return (
    <Link to={to} className={footerStyles.socialMediaLink}>
      <img src={image} alt={alt} />
    </Link>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const socialMediaLinks = [
    { to: "/", image: Discord, alt: "discord" },
    { to: "/", image: Twitter, alt: "twitter" },
    { to: "/", image: LinkedIn, alt: "linkedin" },
  ];

  return (
    <footer className={footerStyles.footer}>
      <div className={`flex flex-wrap ${footerStyles.footer_container}`}>
        <div className="flex">
          <div>
            <h6 className={footerStyles.footer_title}>Subscribe to updates</h6>
            <div className={`flex ${footerStyles.footer_subscribe}`}>
              <div className="relative">
                <input type="text" placeholder="Enter your e-mail" />
                <Message color="#5D5D5B" />
              </div>
              <button className="btn secondary-btn-black">Subscribe</button>
            </div>
          </div>
          <div>
            <h6 className={footerStyles.footer_title}>Follow us</h6>
            <div className={footerStyles.footer_socialMedia}>
              {socialMediaLinks.map((link, index) => (
                <SocialMediaLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div>
            <h6 className={footerStyles.footer_title}>Marketplace</h6>
            <ul className="list-unstyled">
              <FooterLink to="/">Explore</FooterLink>
              <FooterLink to="/">Help Center</FooterLink>
              <FooterLink to="/">Become a Partner</FooterLink>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Platform Status</FooterLink>
            </ul>
          </div>
          <div>
            <h6 className={footerStyles.footer_title}>Community</h6>
            <ul className="list-unstyled">
              <FooterLink to="/">Profile</FooterLink>
              <FooterLink to="/">Favorites</FooterLink>
              <FooterLink to="/">Watchlist</FooterLink>
              <FooterLink to="/">My Collections</FooterLink>
              <FooterLink to="/">Rankings</FooterLink>
              <FooterLink to="/">Activity</FooterLink>
            </ul>
          </div>
          <div className={footerStyles.footer__reimagia_block}>
            <h6 className={footerStyles.footer_title}>REIMAGIA</h6>
            <p>
              The world's first and largest ethical Generative AI marketplace
              for creators worldwide where anything is possible and all are
              welcome
            </p>
            <Select defaultValue="Currency - USD" list={[{ name: "Currency - USD", value: "test" }]} />
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
