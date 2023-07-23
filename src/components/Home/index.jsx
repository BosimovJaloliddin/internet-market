import React from "react";
import { product } from "../../data/product";
import Product from "../Product";
import { Bg, Container, Icons, SubTitle, Title, Wrapper } from "./style";

const Home = () => {
  return (
    <Bg>
      <Container>
        <Wrapper>
          <Title>Aksiyalar</Title>
          <SubTitle>
            <span>Hammasini ko'rish</span>
            <Icons.Arrow />
          </SubTitle>
        </Wrapper>
        <Wrapper mt={40} gap={40}>
          {product.slice(0, 4).map((value) => {
            return <Product key={value.id} data={value} />;
          })}
        </Wrapper>
      </Container>
    </Bg>
  );
};
export default Home;
