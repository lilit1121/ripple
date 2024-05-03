import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/components/auth/AuthHeader.css";

function AuthHeader({ title, description }) {
  return (
    <div className="auth-header">
      <Link className="auth-header__logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <h1 className="auth-header__title">{title}</h1>
      <p className="auth-header__description">{description}</p>
    </div>
  );
}

export default AuthHeader;
