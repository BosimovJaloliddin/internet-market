import React from "react";
import { productDiscount, productNew } from "../../data/product";
import Product from "../Product";
import { Bg, Container, Icons, SubTitle, Title, Wrapper } from "./style";
import Footer from "../Footer";

import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <h1>{text}</h1>;

const Home = () => {
  const defaultProps = {
    center: {
      lat: 41,
      lng: 69,
    },
    zoom: 11,
  };
  return (
    <Bg>
      <Container>
        <Wrapper $pt={80}>
          <Title>Aksiyalar</Title>
          <SubTitle>
            <span>Hammasini ko'rish</span>
            <Icons.Arrow />
          </SubTitle>
        </Wrapper>
        <Wrapper $mt={40} $gap={10}>
          {productDiscount.slice(0, 4).map((value) => {
            return <Product key={value.id} data={value} />;
          })}
        </Wrapper>
        <Wrapper $mt={120}>
          <Title>Yangilari</Title>
          <SubTitle>
            <span>Hammasini ko'rish</span>
            <Icons.Arrow />
          </SubTitle>
        </Wrapper>
        <Wrapper $mt={40} $gap={10}>
          {productNew.slice(0, 4).map((value) => {
            return <Product key={value.id} data={value} />;
          })}
        </Wrapper>
        <Wrapper $al="flex-start" $mt={120} $cl="true">
          <Title>Bizning do'konlar</Title>
          <div
            style={{
              height: "450px",
              width: "100%",
              marginTop: "40px",
              marginBottom: "80px",
            }}
          >
            <GoogleMapReact
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>
        </Wrapper>
      </Container>
      <Footer />
    </Bg>
  );
};
export default Home;
