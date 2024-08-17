import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/cartSlice";
function Products() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removetoCart = (id) => {
    // !dispatch a remove action
    dispatch(remove(id));
  };
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-gray-800 my-8">
        <u>Product Orders :</u>
      </h1>
  
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((prod, id) => (
            <div
              className="card card-compact bg-base-100 w-80 h-auto shadow-xl"
              key={id}
            >
              <figure className="w-full">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-40 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-lg">{prod.title}</h2>
                <p>{prod.description.slice(0, 80)}...</p>
                <p className="font-bold">${prod.price}</p>
                <p className="text-warning font-bold">
                  Rating - {prod.rating.rate}
                </p>
                <div className="card-actions">
                  <div className="text-center w-full">
                    <button
                      className="btn btn-danger w-full"
                      onClick={() => removetoCart(id)}
                    >
                      REMOVE ITEM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
