import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../StatusCode";

const initialState = {
  data: [],
  state: StatusCode.IDLE,
};

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data; // Return only the data
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status =StatusCode.LOADING;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status=StatusCode.IDLE;
      });
  },
});

export default productSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   data: [],
// };

// export const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     // fetchProducts(state, action) {
//     //   state.data = action.payload;
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getProducts.fulfilled, (state, action) => {
//       state.data = action.payload;
//     });
//   },
// });

// export const { fetchProducts } = productSlice.actions;
// export default productSlice.reducer;
// export const getProducts = createAsyncThunk("products/get", async () => {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   return response;
// });
// // export function getProducts() {
// //   return async function (dispatch, getState) { // Renamed getProducts to getState
// //     try {
// //       const response = await axios.get("https://fakestoreapi.com/products");
// //       dispatch(fetchProducts(response.data)); // Accessing response.data
// //     } catch (error) {
// //       console.error("Failed to fetch products:", error);
// //     }
// //   };
// // }
