import React, { useState, useEffect } from "react";
import { productNew } from "../../data/product";
import Footer from "../Footer";
import Product from "../Product";
import { Wrapper, Container } from "./style";

const Products = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(productNew);
  }, []);
  return (
    <>
      <Container>
        <Wrapper>
          {data?.map((value) => {
            return <Product key={value.id} data={value} />;
          })}
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Products;
