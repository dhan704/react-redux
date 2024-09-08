import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const showLabel = useSelector((state) => state.showLabel);
  
  return <div>{showLabel && <label>Label is active</label>}</div>;
}

export default Home;
