import { styled } from "styled-components";

const Container = styled.div`
  background: blue;
`;
const Wrapp = styled.ul`
  max-width: 1440px;
  padding: 0 130px;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  margin: auto;
`;
const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
const Item = styled.li`
  display: inline-block;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;

export { Container, Wrapp, Items, Item };
