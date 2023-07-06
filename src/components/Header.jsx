import React from "react";
import Logo from "./Logo";
import "./Header.css";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <ul className="header_navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <LoginButton />
    </div>
  );
};

export default Header;
