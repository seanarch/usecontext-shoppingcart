import React from "react";
import { CartState } from "../context/Context";

function Home() {
  const { state } = CartState();
  console.log(state);
  return <div>Home</div>;
}

export default Home;
