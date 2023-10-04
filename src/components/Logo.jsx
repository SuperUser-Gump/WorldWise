import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="WorldWise logo"
        className={`${styles.logo} ${className}`}
      />
    </Link>
  );
}

export default Logo;
