import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.app_admin_header}>
      <div className="app_admin_header_left">
        <Logo />
      </div>
      <div className="app_admin_header_right">
        <ul className="app_admin_header_right_list">
          <li className={styles.app_admin_header_right_list_item}>
            <Link to={"/admin/coins"}>Coins</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
