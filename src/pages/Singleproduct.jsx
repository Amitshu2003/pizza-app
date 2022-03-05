import React from "react";
import { useNavigate } from "react-router-dom";
const Singleproduct = ({ pizzaName, pizzaSize, images, price }) => {
  const history = useNavigate();
  return (
    <div className="container mx-auto mt-12 ">
      <button
        className="mb-12 py-1 px-8 rounded-full font-bold ml-20 bg-yellow-500"
        onClick={() => {
          history(-1);
        }}
      >
        Back
      </button>

      <div className="flex flex-shrink ml-20">
        <img src={images} alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{pizzaName}</h1>
          <div className="text-md">{pizzaSize}</div>
          <div className="font-bold mt-2">Rs. {price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
