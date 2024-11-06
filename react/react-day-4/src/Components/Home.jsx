import React, { useContext } from "react";
import { CountContext } from "../Context/CountContext";

export default function Home() {
  const { count } = useContext(CountContext);

  return (
    <div>
      I am home
      <h1>Count is{count}</h1>
    </div>
  );
}
