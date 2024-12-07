import React, { useEffect, useState } from "react";
// import "../css/Products.css";

import styles from "../css/Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      {products.map((el) => (
        <li className={styles.box}>{el.title}</li>
      ))}
    </div>
  );
};

export default Products;
