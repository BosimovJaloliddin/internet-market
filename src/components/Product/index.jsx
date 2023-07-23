import React from "react";
import {
  Container,
  WrapImage,
  Img,
  Content,
  Salary,
  Description,
  Button,
  Icons,
} from "./style";
import img from "../../assets/images/no-img.png";

const Product = (prop) => {
  const { url, salary, description } = prop.data;
  return (
    <Container>
      <WrapImage>
        <Img src={url || img} />
        <Icons.Like />
      </WrapImage>
      <Content pad={8} cl="true">
        <Salary>{salary || "Narxda xatolik"} so'm</Salary>
        <Description>{description || "Izoh mavjud emas"}</Description>
        <Content>
          <Icons.Star cl="true" />
          <Icons.Star cl="true" />
          <Icons.Star cl="true" />
          <Icons.Star cl="true" />
          <Icons.Star />
        </Content>
        <Button>Savatga solish</Button>
      </Content>
    </Container>
  );
};

export default Product;
