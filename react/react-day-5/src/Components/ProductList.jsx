import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";

const ProductList = () => {
  const { getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return <div></div>;
};

export default ProductList;
