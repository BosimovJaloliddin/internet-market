import React from "react";
import { Bg, Container, WrapItems, Items, Item, Icons } from "./style";

const Footer = () => {
  return (
    <Bg>
      <Container>
        <WrapItems>
          <Items gap={40}>
            <Item>Logo</Item>
            <Item>Biz haqimizda</Item>
            <Item>A'loqa</Item>
            <Item>Vakansiya</Item>
            <Item>Maqola</Item>
            <Item>Shaxsiy ma'lumotlarni qayta ishlash siyosati</Item>
          </Items>
          <Items gap={40}>
            <Items gap={16}>
              <Icons.Instagram />
              <Icons.Vkontakte />
              <Icons.Facebook />
              <Icons.Ok />
            </Items>
            <Items gap={8}>
              <Icons.Phone />
              <Item fs={16}>+998 99 479 19 09</Item>
            </Items>
          </Items>
        </WrapItems>
      </Container>
    </Bg>
  );
};

export default Footer;
