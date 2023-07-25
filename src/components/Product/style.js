import styled from "styled-components";
import { ReactComponent as star } from "../../assets/icons/star.svg";
import { ReactComponent as like } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 292px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
const WrapImage = styled.div`
  position: relative;
  max-width: 292px;
  height: 160px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Discount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  font-size: 16px;
  font-family: "Rubik";
  left: 10px;
  bottom: 10px;
  height: 32px;
  border-radius: 4px;
  background: #f63;
  color: #fff;
  line-height: 150%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: ${({ $cl }) => $cl && "column"};
  padding: ${({ $pad }) => $pad && `${$pad}px`};
  justify-content: ${({ $center }) => $center && "center"};
  gap: 8px;
  span {
    font-size: 14px;
  }
`;
const Salary = styled.h4`
  color: #414141;
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  padding-top: 8px;
`;
const Benefit = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Description = styled.p`
  height: 48px;
  font-size: 16px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #414141;
  margin-top: 18px;
`;
const Button = styled.div`
  font-family: "Rubik";
  max-width: 256px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #70c05b;
  border-radius: 4px;
  color: #70c05b;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  margin: 0 8px;
  &:active {
    transform: scale(0.97);
  }
`;

const Icons = styled.div``;
Icons.Star = styled(star)`
  path {
    fill: ${({ $cl }) => $cl && "#ff6633"};
    width: 16px;
    height: 16px;
  }
`;
Icons.Like = styled(like)`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 36px;
  height: 36px;
  padding: 4px 5px;
  background: #888;
  border-radius: 4px;
  cursor: pointer;
  path {
    fill: #fff;
  }
  &:hover {
    background: #fff;
    path {
      fill: red;
    }
  }
`;

export {
  Container,
  WrapImage,
  Img,
  Discount,
  Content,
  Salary,
  Benefit,
  Description,
  Button,
  Icons,
};
