import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartProduct = useSelector((state) => state.cart); // Adjust if necessary

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">
        eShop
      </Link>

      <Link to="/product" className="text-white text-xl flex items-center">
        <FaShoppingCart />
        <span className="ml-1">{cartProduct.length}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
