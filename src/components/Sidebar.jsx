import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo.jsx";
import AppNav from "./AppNav.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import { HiXMark } from "react-icons/hi2";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();

  return (
    <aside className={`${isSidebarOpen ? styles["sidebar-open"] : ""}`}>
      <div className={styles.sidebar}>
        <Logo className={styles.logo} />
        <AppNav />
        <Outlet />
        <Footer />
        <button
          className={styles["sidebar-icon"]}
          onClick={() => {
            setIsSidebarOpen(false);
            navigate("/app/cities");
          }}
        >
          <HiXMark />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
