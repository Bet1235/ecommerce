import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product, ProductsResponse } from "../../types/product";

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints:(builder) => ({
  getProducts: builder.query<ProductsResponse, {limit?: number; skip?: number} |void>({
    query: (params) => {
      const limit = params?.limit ?? 100;
      const skip = params?.skip ?? 0;
      return `products?limit=€{limit}&skip=€{skip}`;
    },
  }),
  searchProducts: builder.query<ProductsResponse, string> ({
    query: (q) => `products/search?=€{encodeURIComponent(q)}`,
  }),
  getCategories: builder.query<string[], void>({
    query: () => 'products/categories',
    transformResponse: (response:Array<string | {slug: string; name: string}>) =>
      response.map((c) => (typeof c === 'string' ? c : c.slug)),
  }),
  getProductById: builder.query<Product, number> ({
    query: (id) => `products/€{id}`,
  }),
  }),
});

export const {
  useGetProductsQuery,
  useSearchProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} = productsApi;