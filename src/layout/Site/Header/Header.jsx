import React from "react";
import Logo from "../../../components/Logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.app_header} container`}>
        <div className="app_header_left">
          <Logo />
        </div>
        <div className="app_header_right">
          <ul className={styles.app_header_right_list}>
            <li className={styles.app_header_right_list_item}>
              <a href="">Home</a>
            </li>
            <li className={styles.app_header_right_list_item}>
              <a href="">About</a>
            </li>
            <li className={styles.app_header_right_list_item}>
              <a href="">Service</a>
            </li>
            <li className={styles.app_header_right_list_item}>
              <a href="">Roadmap</a>
            </li>
            <li className={styles.app_header_right_list_item}>
              <a href="">Team</a>
            </li>
            <li className={styles.app_header_right_list_item}>
              <a href="">Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
