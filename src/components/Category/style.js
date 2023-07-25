import styled from "styled-components";

const Bg = styled.div`
  background: #fbf8ec;
  margin-top: 6px;
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 0 116px;
  margin: auto;
`;
const Navigator = styled.div`
  padding-top: 27px;
  span {
    font-family: "Rubik";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #414141;
  }
`;
const Title = styled.h1`
  font-family: "Rubik";
  margin-top: 27px;
  color: #414141;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
  padding-bottom: 80px;
`;
const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;
const WrapImg = styled.div`
  position: relative;
  max-width: ${({ $w }) => $w && `${$w}px`};
  height: 200px;
  cursor: pointer;
  span {
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #fff;
    font-family: "Rubik";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    z-index: 3;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Gradient = styled.div`
  position: absolute;
  background: linear-gradient(180deg, rgba(112, 192, 91, 0) 0%, #70c05b 82.81%);
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
`;

export {
  Bg,
  Container,
  Navigator,
  Title,
  CategoryItems,
  CategoryItem,
  WrapImg,
  Img,
  Gradient,
};
