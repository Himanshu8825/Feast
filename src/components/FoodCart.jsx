import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlice";

const FoodCart = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
        img,
        rating,
        qty: 1,
      })
    );
    handleToast(name);
  };

  return (
    <div className="font-Lato bg-white pb-2 shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg">
      <img
        src={img}
        alt={name}
        className="h-[200px] w-full object-cover hover:scale-105 transition-transform duration-500  cursor-pointer"
      />

      <div className="px-4 py-2 flex flex-col">
        <h2 className="truncate text-lg font-semibold">{name}</h2>
        <span className="text-primary font-bold">₹{price}</span>

        <p className="text-sm font-normal text-gray-700 line-clamp-2">
          {desc.slice(0, 50)}...
        </p>

        <div className="flex justify-between items-center">
          <span className="flex items-center font-extrabold">
            <AiFillStar className="mr-1 text-yellow-400" /> {rating}
          </span>
          <button
            onClick={clickHandler}
            className="px-4 py-1.5  hover:bg-gradient-to-r from-green-400 to-blue-500 btn-grad text-white rounded-md text-sm font-semibold"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
