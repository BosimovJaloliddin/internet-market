import React from "react";
import HomePage from "../pages/Home";
import CategoryPage from "../pages/Category";
import ProductPage from "../pages/Products";
import ProductDiscountPage from "../pages/ProductDiscount";
import CategoryItemPage from "../pages/CategoryItem";

export const navbar = [
  {
    id: "1",
    title: "Home",
    element: <HomePage />,
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: "2",
    title: "Category",
    element: <CategoryPage />,
    path: "/category",
    private: false,
    hidden: false,
  },
  {
    id: "3",
    title: "ProductDiscount",
    element: <ProductDiscountPage />,
    path: "/product-discount",
    private: false,
    hidden: false,
  },
  {
    id: "4",
    title: "Product",
    element: <ProductPage />,
    path: "/product",
    private: false,
    hidden: false,
  },
  {
    id: "5",
    title: "Category",
    element: <CategoryItemPage />,
    path: "/category/:id",
    private: false,
    hidden: false,
  },
];
