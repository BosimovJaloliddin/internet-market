import React from "react";
import HomePage from "../pages/Home";
import CategoryPage from "../pages/Category";
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
];
