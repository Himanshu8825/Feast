import React, { useEffect, useState } from "react";
import Data from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../Redux/Slices/CategorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(["All"]);

  const handleClick = () => {
    const uniqueCategory = [
      "All",
      ...new Set(Data.map((food) => food.category)),
    ];
    setCategory(uniqueCategory);
  };

  const selectedCategory = useSelector((state) => state.category.category);


  useEffect(() => {
    handleClick();
    // console.log(category)
  }, []);

  return (
    <div className="lg:px-16 sm:px-12 px-6 py-4 ">
      <div>
        <h1 className="text-xl font-Lato font-bold ">Find All Best Foods</h1>
        <div className="flex gap-6 mt-6 overflow-x-scroll">
          {category.map((item, index) => {
            return (
              <div
                className={`px-4 py-2 bg-gray-200 rounded-md font-Lato font-semibold cursor-pointer hover:bg-gradient-to-l from-green-400 to-blue-500  hover:text-white  ${
                  selectedCategory === item ? "btn-grad text-white " : ""
                }`}
                key={index}
                onClick={() => dispatch(addCategory(item))}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
