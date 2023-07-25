import React from "react";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Bg,
  Container,
  Navigator,
  Title,
  CategoryItems,
  CategoryItem,
  Img,
  WrapImg,
  Gradient,
} from "./style";
import milk from "../../assets/images/milk.png";
import bread from "../../assets/images/bread.png";
import fruits from "../../assets/images/fruits.png";
import meat from "../../assets/images/meat.png";

const Category = () => {
  const navigate = useNavigate();

  return (
    <>
      <Bg>
        <Container>
          <Navigator>
            <span>Home {">"} Category</span>
          </Navigator>
          <Title>Category</Title>
          <CategoryItems>
            <CategoryItem>
              <WrapImg onClick={() => navigate("/category/sut")} $w={584}>
                <Img src={milk} />
                <span>Sut, yog', tuxum</span>
                <Gradient></Gradient>
              </WrapImg>
              <WrapImg onClick={() => navigate("/category/non")} $w={272}>
                <Img src={bread} />
                <span>Non</span>
                <Gradient></Gradient>
              </WrapImg>
              <WrapImg onClick={() => navigate("/category/meva")} $w={272}>
                <Img src={fruits} />
                <span>Mevalar</span>
                <Gradient></Gradient>
              </WrapImg>
            </CategoryItem>
            <CategoryItem>
              <WrapImg onClick={() => navigate("/category/sabzavot")} $w={272}>
                <Img src={bread} />
                <span>Sabzavot</span>
                <Gradient></Gradient>
              </WrapImg>
              <WrapImg onClick={() => navigate("/category/ko'kat")} $w={272}>
                <Img src={bread} />
                <span>Ko'kat</span>
                <Gradient></Gradient>
              </WrapImg>
              <WrapImg $w={272}>
                <Img src={bread} />
                <span>Non</span>
                <Gradient></Gradient>
              </WrapImg>
              <WrapImg $w={272}>
                <Img src={fruits} />
                <span>Mevalar</span>
                <Gradient></Gradient>
              </WrapImg>
            </CategoryItem>
            <CategoryItem>
              <WrapImg $w={272}>
                <Img src={bread} />
                <span>Non</span>
                <Gradient></Gradient>
              </WrapImg>
              <WrapImg $w={272}>
                <Img src={fruits} />
                <span>Non</span>
                <Gradient></Gradient>
              </WrapImg>
              <WrapImg $w={584}>
                <Img src={meat} />
                <span>Non</span>
                <Gradient></Gradient>
              </WrapImg>
            </CategoryItem>
          </CategoryItems>
        </Container>
      </Bg>
      <Footer />
    </>
  );
};

export default Category;
