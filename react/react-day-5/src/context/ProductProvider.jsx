import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  }

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        Products,
        product,
        setProducts,
        setProduct,
        cart,
        setCart,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
