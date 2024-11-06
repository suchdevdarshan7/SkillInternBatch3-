import React, { useState } from "react";
import Navbar from "./Components/Navbar";

import { CountContext } from "./Context/CountContext";
import About from "./Components/About";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <p>count: is {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <Navbar />
        <About />
      </CountContext.Provider>
    </div>
  );
}
