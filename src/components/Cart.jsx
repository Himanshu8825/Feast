import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CartItem } from "../Index";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.total);

  const handleCheckout = () => {
    if (totalAmount > 100) {
      navigate("/success");
    } else {
      setErrorMessage(
        "Total amount must be greater than 100 to proceed to checkout."
      );
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      setErrorMessage("");
    }
  }, [cartItems]);

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[22vw] h-full p-5 bg-white shadow-lg ${
          toggle ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center py-4">
          <span className="text-xl font-Lato font-bold text-primary">
            My Orders
          </span>
          <IoMdClose
            onClick={() => setToggle(!toggle)}
            className="border-2 border-primary text-primary font-bold text-xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer"
          />
        </div>

        {errorMessage ? (
          <p className="text-xl font-medium font-Lato text-red-500 text-center py-2">
            {errorMessage}
          </p>
        ) : (
          ""
        )}

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <CartItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <p className="text-xl font-medium font-Lato text-primary text-center py-12">
            Your cart is empty!..
          </p>
        )}

        <div className="w-full font-Montserrat absolute bottom-0 pr-2">
          <h2 className="font-semibold text-gray-800">
            Items:{" "}
            <span className="font-semibold text-primary">
              {cartItems.length}
            </span>
          </h2>
          <h2 className="font-semibold text-gray-800">
            Total Amount:{" "}
            <span className="font-semibold text-primary">
              &#x20B9;{totalAmount}
            </span>
          </h2>
          <div className="w-[90%] border border-primary mb-2 mt-2"></div>
          <button
            onClick={handleCheckout}
            className="w-11/12 btn-grad py-2 rounded-lg font-semibold mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setToggle(true)}
        className={`rounded-full bg-white text-primary shadow-md lg:text-4xl text-2xl p-1 lg:p-2 fixed bottom-4 lg:right-2 sm:right-4 right-1 cursor-pointer ${
          cartItems.length > 0 && "animate-bounce duration-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
