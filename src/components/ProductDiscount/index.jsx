import React, { useEffect, useState } from "react";
import { productDiscount } from "../../data/product";
import Footer from "../Footer";
import Product from "../Product";
import { Wrapper, Container } from "./style";

const ProductDiscount = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(productDiscount);
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

export default ProductDiscount;
