import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Product = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState({});

  console.log(slug);

  async function getProduct() {
    const response = await fetch(`https://fakestoreapi.com/products/${slug}`);
    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Link to={"/products"}>Back</Link>

      <h1>{product.title}</h1>
      <img src={product.image} alt="" />
      <p>$ {product.price}</p>
    </div>
  );
};

export default Product;
