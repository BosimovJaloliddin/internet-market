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
  Benefit,
  Discount,
} from "./style";
import img from "../../assets/images/no-img.png";

const Product = (prop) => {
  const { url, salary, description, discount, markets } = prop.data;

  return (
    <Container>
      <WrapImage>
        <Img src={url || img} />
        <Icons.Like />
        {discount && <Discount>-{discount} %</Discount>}
      </WrapImage>
      <Content $pad={8} $cl="true">
        <Salary>
          {salary || "Narxda xatolik"} {salary && "so'm"}
        </Salary>
        <Benefit>
          <Content $cl="true" $center="true">
            <h5>Do'konda</h5>
            <span>
              {markets || "Xatolik"} {markets && "so'm"}
            </span>
          </Content>
          <Content $cl="true">
            <h5>Bizda</h5>
            <span>
              {salary || "Xatolik"} {salary && "so'm"}
            </span>
          </Content>
          <Content $cl="true">
            <h5>Foydangiz</h5>
            <span>
              {markets - salary || "Xatolik"} {salary && markets && "so'm"}
            </span>
          </Content>
        </Benefit>
        <Description>{description || "Izoh mavjud emas"}</Description>
        <Content>
          <Icons.Star $cl="true" />
          <Icons.Star $cl="true" />
          <Icons.Star $cl="true" />
          <Icons.Star $cl="true" />
          <Icons.Star />
        </Content>
        <Button>Savatga solish</Button>
      </Content>
    </Container>
  );
};

export default Product;
