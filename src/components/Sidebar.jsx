import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo.jsx";
import AppNav from "./AppNav.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import { HiXMark } from "react-icons/hi2";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <aside className={`${isSidebarOpen ? styles["sidebar-open"] : ""}`}>
      <div className={styles.sidebar}>
        <Logo className={styles.logo} />
        <AppNav />
        <Outlet />
        <Footer />
        <button
          className={styles["sidebar-icon"]}
          onClick={() => setIsSidebarOpen(false)}
        >
          <HiXMark />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
