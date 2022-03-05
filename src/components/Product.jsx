import { React, useState } from "react";
import { useCart } from "react-use-cart";
const Product = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();
  const total = () => {
    setIsAdding(true);
    
  };
  return (
    <div>
      <img src={props.img} alt="pizza" className="rounded-full" />
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">{props.title}</h2>
        <span className="bg-yellow-500 text-white py-1 text-black rounded-full px-4 text-sm">
          {props.size}
        </span>
        <div className="bg-yellow-500  mt-2 text-white py-1 text-black rounded-full text-sm">
          {props.topping}
        </div>
      </div>
      
      <div className=" flex justify-around items-center mt-4">
        <span>Rs. {props.price}</span>
        <button
          onClick={() => {
            addItem(props.items);
            total();
          }}
          className={`${
            isAdding ? "bg-green-500" : "bg-gray-200"
          }  py-1 px-4 rounded-full font-bold text-black`}
        >
          ADD{isAdding && "ED"}
        </button>

      </div>
    </div>
  );
};

export default Product;
