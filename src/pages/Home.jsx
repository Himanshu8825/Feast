import React from "react";
import { Cart, Category, FoodItem, Footer, Navbar } from "../Index";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Category />
        <FoodItem />
        <Cart />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
