import React, { useState } from "react";
import Card from "./Card";
import "./List.css";

const List = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Iphone 14 Pro Max", model: "14", brand: "Iphone" },
    { id: 2, name: "Iphone 13 Pro Max", model: "13", brand: "Iphone" },
    { id: 3, name: "Iphone 12 Pro Max", model: "12", brand: "Iphone" },
    { id: 4, name: "Iphone 11 Pro Max", model: "11", brand: "Iphone" },
  ]);

  return (
    <>
      <div className="cards">
        {products.map((product, id) => {
          return (
            <Card
              name={product.name}
              model={product.model}
              brand={product.brand}
              key={id}
            />
          );
        })}
      </div>
    </>
  );
};

export default List;
