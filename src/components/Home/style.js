import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow-right.svg";

const Bg = styled.div`
  background: #fbf8ec;
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 0 116px;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ gap }) => gap && `${gap}px`};
  margin-top: ${({ mt }) => mt && `${mt}px`};
`;
const Title = styled.h1`
  font-family: "Rubik";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  color: #414141;
  line-height: 150%;
  padding-top: 80px;
`;
const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 80px;
  cursor: pointer;
  span {
    text-align: center;
    font-family: "Rubik";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #606060;
    line-height: 150%;
  }
`;

const Icons = styled.div``;
Icons.Arrow = styled(arrow)`
  width: 24px;
  height: 24px;
`;

export { Bg, Container, Wrapper, Title, SubTitle, Icons };
