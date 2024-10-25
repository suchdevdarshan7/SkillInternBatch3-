import { useState } from "react";
import Product from "./Components/Product";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  let products = [
    {
      id: 1,
      name: "Chicken Pizza",
      price: 299,
      img: "https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_640.jpg",
    },
    {
      id: 2,
      name: "Gobi manchurian",
      price: 199,
      img: "https://cdn.pixabay.com/photo/2022/01/27/07/34/manchurian-6971355_640.jpg",
    },
    {
      id: 3,
      name: "Chocolate Milkshake ",
      price: 99,
      img: "https://cdn.pixabay.com/photo/2024/05/19/08/53/ai-generated-8772026_640.jpg",
    },
    {
      id: 4,
      name: "Paneer Fried Rice",
      price: 179,
      img: "https://cdn.pixabay.com/photo/2018/09/29/04/19/fried-rice-3710741_640.jpg",
    },
    {
      id: 5,
      name: "Coke",
      price: 40,
      img: "https://cdn.pixabay.com/photo/2020/04/08/08/09/cocacola-5016273_640.jpg",
    },
  ];

  return (
    <div className="center">
      <button className="btn" onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>
      <div className="container">
        {showProducts && products.map((el) => <Product product={el} />)}
      </div>
    </div>
  );
}

// ! Don't repeat yourself
// ! Component driven architeture

export default App;
