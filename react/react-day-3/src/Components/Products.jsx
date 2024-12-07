import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

const Products = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />

      <section>
        {products.map((el) => {
          return (
            <li onClick={() => navigate(`/product/${el.id}`)}>{el.title}</li>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
