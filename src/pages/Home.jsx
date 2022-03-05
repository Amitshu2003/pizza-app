import React from "react";
import Products from "../components/Products";
import pizza from "../images/pizza.png";

const Home = () => {
  return (
    <>
      <div className="hero py-16">
        <div className="container mx-auto flex flex-shrink items-center justify-between">
          <div style={{ marginLeft: 70 }} className="w-1/2">
            <h2 className="ml-4 mb-8 text-4xl font-bold">Welcome to Pizza Shop!!!</h2>
            <a className="p-2 ml-4 rounded-md bg-blue-400 font-bold" href="#products">
              Order Now 
            </a>
          </div>
          <div className="w-1/2">
            <img className="w-3/5" src={pizza} alt="pizza" />
          </div>
        </div>
      </div>
      <div id="products">
        <Products />
      </div>
    </>
  );
};

export default Home;
