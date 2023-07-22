import React from "react";
import Home from "../components/Home";
import Contact from "../components/Contact";
export const navbar = [
  {
    id: 1,
    title: "Home",
    element: <Home />,
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: 1,
    title: "Contact",
    element: <Contact />,
    path: "/contact",
    private: false,
    hidden: false,
  },
];
