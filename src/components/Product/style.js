import styled from "styled-components";
import { ReactComponent as star } from "../../assets/icons/star.svg";
import { ReactComponent as like } from "../../assets/icons/love.svg";

const Container = styled.div`
  max-width: 272px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
const WrapImage = styled.div`
  position: relative;
  width: 272px;
  height: 160px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: ${({ cl }) => cl && "column"};
  padding: ${({ pad }) => pad && `${pad}px`};
  gap: 8px;
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
  width: 256px;
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
  &:active {
    transform: scale(0.97);
  }
`;

const Icons = styled.div``;
Icons.Star = styled(star)`
  path {
    fill: ${({ cl }) => cl && "#ff6633"};
    width: 16px;
    height: 16px;
  }
`;
Icons.Like = styled(like)`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export {
  Container,
  WrapImage,
  Img,
  Content,
  Salary,
  Description,
  Button,
  Icons,
};
