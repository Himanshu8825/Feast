import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreamentQuantity,
  increamentQuantity,
  removeFromCart,
} from "../Redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(
      removeFromCart({ id }),
      toast.error(`${name} Removed `, {
        icon: "😭",
        className: "text-primary font-Montserrat font-medium ",
      })
    );
  };
  return (
    <>
      <div className="w-full flex gap-2 shadow-md rounded-lg p-4 font-Montserrat mb-4">
        <img src={img} alt="" className="w-[50px] h-[50px] " />
        <div className="w-full">
          <div className="flex justify-between items-center mb-1.5">
            <h2 className="text-gray-800 font-semibold  ">{name}</h2>
            <MdDelete
              onClick={clickHandler}
              className="text-lg text-primary hover:text-red-600 cursor-pointer"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className=" font-semibold text-primary text-sm">
              &#x20B9;{price * qty}
            </span>
            <div className="flex gap-2 items-center">
              <AiOutlineMinus
                onClick={() =>
                  qty > 1 ? dispatch(decreamentQuantity({ id })) : null
                }
                className="border border-gray-600 text-gray-600 hover:text-white hover:bg-primary hover:border-none rounded-md  transition-all duration-500 ease-in-out cursor-pointer"
              />
              <span className=" font-medium">{qty}</span>
              <AiOutlinePlus
                onClick={() => dispatch(increamentQuantity({ id }))}
                className="border border-gray-600 text-gray-600 hover:text-white hover:bg-primary hover:border-none rounded-md  transition-all duration-500 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
