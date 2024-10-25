import { useState } from "react";

import Box from "./components/Box";

function App() {
  let a = 10;

  const [clicked, setClicked] = useState(false);

  let array = new Array(1000);

  return (
    <div>
      <h1>{clicked && a}</h1>
      <button onClick={() => setClicked(!clicked)}>Click here</button>

      {array.map((el) => {
        return <Box />;
      })}
    </div>
  );
}

export default App;
