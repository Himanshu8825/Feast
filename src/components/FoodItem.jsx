import React from "react";
import Data from "../Data";
import FoodCart from "./FoodCart";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const handleToast = (name) =>
    toast.success(`Added ${name}`, {
      className: "text-primary font-Montserrat font-medium",
    });

  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  // Filter the data based on category and search
  const filteredData = Data.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return (
        food.category === category &&
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <div className="w-full">
      <Toaster position="top-center" reverseOrder={false} />
      {filteredData.length === 0 && (
        <div className=" flex justify-center items-center gap-2 font-Montserrat text-center py-16">
          <p className="text-xl">No search results for</p>
          <span className="font-semibold font-Lato text-2xl">"{search}"</span>
        </div>
      )}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 px-4  lg:gap-6 sm:px-8 lg:px-0">
        {filteredData.map((item) => (
          <FoodCart
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            desc={item.desc}
            rating={item.rating}
            img={item.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodItem;
