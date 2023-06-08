import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";

function Home() {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
