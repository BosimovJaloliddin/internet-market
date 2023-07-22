import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Wrapp, Items, Item } from "./style";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Wrapp>
          <Items>
            <Item>Logo</Item>
          </Items>
          <Items>
            <Item onClick={() => navigate("/home")}>Home</Item>
            <Item>Get Product</Item>
            <Item>Add Product</Item>
            <Item onClick={() => navigate("/contact")}>Contact</Item>
          </Items>
          <Items>
            <Item>Login</Item>
          </Items>
        </Wrapp>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
