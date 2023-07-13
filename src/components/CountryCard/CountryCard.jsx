import React from "react";
import { Card, Button } from "antd";
import styles from "./CountryCard.module.css";
import { Link } from "react-router-dom";

const { Meta } = Card;
const CountryCard = ({ name, image, population, region, capital }) => {
  return (
    <Card
      hoverable
      style={{ width: "264px" }}
      cover={<img alt="card-img" src={image} />}
    >
      <div className={styles.card_text}>
        <Meta title={name} />
        <br></br>
        <div className={styles.card_description}>
          <p className={styles.card_description_title}>
            <b>Population:</b> {population}
          </p>
          <p className={styles.card_description_title}>
            <b>Region:</b> {region}
          </p>
          <p className={styles.card_description_title}>
            <b>Capital:</b> {capital}
          </p>
          <Button type="primary" className={styles.card_description_btn}>
            <Link to={`/details/${name}`}>Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CountryCard;
