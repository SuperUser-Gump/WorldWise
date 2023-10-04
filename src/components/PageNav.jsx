import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo.jsx";
import { HiBars3, HiXMark } from "react-icons/hi2";

function PageNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <header className={`${isNavOpen ? styles["nav-open"] : ""}`}>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
        <button className={styles["nav-icon"]} onClick={toggleNav}>
          {isNavOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>
    </header>
  );
}

export default PageNav;
