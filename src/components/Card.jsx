import React, { useState } from "react";
import "./Card.css";
const Card = ({ name, model, brand }) => {
  const [isBestseller, setIsBestseller] = useState(false);
  return (
    <div className="product_card">
      <div className="card_content">
        {isBestseller ? (
          <span className="tag">Bestseller</span>
        ) : (
          <span className="tag unvisible">Bestseller</span>
        )}
        <h2>{name}</h2>
        <p>This is an {name}</p>
        <p>Model: {model}</p>
        <p>Brand: {brand}</p>
      </div>
      <button
        onClick={() => {
          setIsBestseller(!isBestseller);
        }}
      >
        {isBestseller ? (
          <span>Remove a bestseller</span>
        ) : (
          <span>Make a bestseller</span>
        )}
      </button>
    </div>
  );
};

export default Card;
