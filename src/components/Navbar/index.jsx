import React from "react";
import { Outlet } from "react-router-dom";
import { Dropdown } from "antd";

import {
  Container,
  Wrapp,
  Items,
  Item,
  Category,
  WrapSearch,
  Search,
  User,
  Icons,
  DropdownWrapp,
  DropdownItems,
  DropdownItem,
} from "./style";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const menu = (
    <DropdownWrapp>
      <DropdownItems>
        <DropdownItem>Sut, qatiq, yog', tusum</DropdownItem>
        <DropdownItem>Poliz ekinlari</DropdownItem>
        <DropdownItem>Mevalar</DropdownItem>
        <DropdownItem>Qolgan maxsulotlar</DropdownItem>
      </DropdownItems>
    </DropdownWrapp>
  );
  return (
    <>
      <Container>
        <Wrapp>
          <Items>
            <Item onClick={() => navigate("/home")}>Logo</Item>
          </Items>
          <Items>
            <Dropdown dropdownRender={() => menu}>
              <Category onClick={() => navigate("/category")}>
                <Icons.Menu />
                <span>Kategory</span>
              </Category>
            </Dropdown>
            <WrapSearch>
              <Search placeholder="Search" />
              <Icons.Search />
            </WrapSearch>
          </Items>
          <Items>
            <Item>
              <Icons.Love />
              <span>Tanlangan</span>
            </Item>
            <Item>
              <Icons.Get />
              <span>Buyurtma</span>
            </Item>
            <Item>
              <Icons.Shopping />
              <span>Savat</span>
            </Item>
            <User>
              <span>Login</span>
            </User>
          </Items>
        </Wrapp>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
