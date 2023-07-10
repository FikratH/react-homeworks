import React from "react";
import styles from "./HomeSection.module.css";
import Button from "../../Button/Button";
const HomeSection = () => {
  return (
    <div className={styles.home_section}>
      <div className={`${styles.homepage_homesection} container`}>
        <div className={styles.homepage_homesection_left}>
          <h1>Trade and Invest on Crypto Using Our Platform</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore .
          </p>
          <Button content={"Register Now"} />
        </div>
        <div className={styles.homepage_homesection_right}>
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/hero-img.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
