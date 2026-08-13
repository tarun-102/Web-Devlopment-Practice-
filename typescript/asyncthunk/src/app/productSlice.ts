import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductResponse {
  products: [];
  total: number;
  skip: number;
  limit: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<ProductResponse, void>(
  "products/fetchProducts",

  async () => {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: ProductResponse = await response.json();

    return data;
  },
);

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers :{},

    extraReducers :  (builder) => {
        builder

        .addCase(fetchProducts.pending, (state) => {
            state.loading = true,
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.loading = false;
            state.products = action.payload.products;
        })

        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "something went wrong";
        })
    }
})

export default ProductSlice.reducer;