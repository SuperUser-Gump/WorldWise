import React from "react";
import Map from "../components/Map.jsx";
import styles from "./AppLayout.module.css";
import User from "../components/User.jsx";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
