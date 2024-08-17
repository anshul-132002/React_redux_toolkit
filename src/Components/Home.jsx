import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { add } from "../Redux/cartSlice";
import { getProducts } from "../Redux/productSlice";
import StatusCode from "../StatusCode";
import Loading from "./Loading";
import Error from "./Error"; // Make sure to import the Error component

function Home() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (search) {
      setFilteredProducts(
        products.filter((prod) =>
          prod.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [search, products]);

  if (status === StatusCode.LOADING) {
    return <Loading />;
  }

  if (status === StatusCode.ERROR) {
    return <Error />;
  }

  const addtoCart = (prod) => {
    try {
      dispatch(add(prod));
      toast.success("Successfully added to cart!");
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full max-w-md mx-auto px-4">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white rounded-full shadow focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <h1 className="text-4xl font-extrabold text-center text-gray-800 my-8">
        <u>Product Dashboard</u>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((prod, id) => (
          <div
            className="card card-compact bg-base-100 w-96 h-auto shadow-xl"
            key={id}
          >
            <figure className="w-full">
              <img
                src={prod.image}
                alt={prod.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{prod.title}</h2>
              <p>{prod.description.slice(0, 100)}...</p>
              <p className="font-bold">${prod.price}</p>
              <p className="text-warning font-bold">
                Rating - {prod.rating.rate}
              </p>
              <div className="card-actions">
                <div className="text-center w-full">
                  <button
                    className="btn btn-success w-full"
                    onClick={() => addtoCart(prod)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Home;
