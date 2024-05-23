import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/Slices/SearchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="lg:px-16 px-8 lg:py-8 sm:py-8 py-2 w-full">
      <div className="lg:flex sm:flex justify-between items-center ">
        <div>
          <Link to="/">
            <h1 className="text-4xl lg:text-start text-center lg:mb-0 mb-2 cursor-pointer text-primary font-semibold font-Montserrat">
              Feast
            </h1>
          </Link>
        </div>

        <input
          type="search"
          placeholder="Seach here..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="px-4 w-80 py-2 rounded-lg outline-none border border-primary  font-Lato "
        />
        <div className="hidden lg:flex sm:flex gap-4 font-Montserrat">
          <button className="btn-grad px-4 py-1.5  font-medium rounded-md">
            Login
          </button>
          <button className="btn-grad px-4 py-1.5  font-medium rounded-md">
            SignUp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
