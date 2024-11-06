import React, { useContext } from "react";
import { CountContext } from "../Context/CountContext";

const About = () => {
  const { count, setCount } = useContext(CountContext);
  return <div onClick={() => setCount(count - 1)}>I am about {count}</div>;
};

export default About;
