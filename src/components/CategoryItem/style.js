import styled from "styled-components";
import { ReactComponent as x } from "../../assets/icons/x.svg";

const Bg = styled.div`
  background: #fbf8ec;
  margin-top: 8px;
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 27px 116px 80px 116px;
  margin: auto;
`;
const Title = styled.h1`
  color: #414141;
  font-family: "Rubik";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-top: 27px;
  text-transform: capitalize;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ $cl }) => $cl && $cl};
  justify-content: ${({ $jc }) => $jc && $jc};
  flex-wrap: ${({ $fw }) => $fw && $fw};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
  flex: ${({ $flx }) => $flx && $flx};
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
  /* align-items: ${({ $align }) => $align && $align}; */
`;
const Navigate = styled.span`
  color: #414141;
  font-size: 12px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ $col }) => $col && $col};
  text-transform: capitalize;
`;
const FilterText = styled.span`
  height: ${({ $h }) => $h && `${$h}px`};
  width: 100%;
  display: flex;
  justify-content: ${({ $jc }) => $jc && $jc};
  background: ${({ $bg }) => $bg && $bg};
  padding: ${({ $p }) => $p && `${$p}px`};
  align-items: center;
  font-family: "Rubik";
  color: #414141;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ $fw }) => $fw && $fw};
  line-height: 150%;
`;
const ButtonDelete = styled.button`
  display: flex;
  width: 85px;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: none;
  background: #f3f2f1;
  cursor: pointer;
  &:active {
    transform: scale(0.96);
  }
`;
const Input = styled.input`
  font-size: 12px;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  text-align: start;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
  background: #fff;
  outline: none;
`;
const ButtonSubmit = styled.button`
  font-family: "Rubik";
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background: #f63;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  border: none;
  cursor: pointer;
  &:active {
    transform: scale(0.96);
  }
`;
const FilterInfo = styled.div`
  font-family: "Rubik";
  display: flex;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${({ $bg }) => $bg && $bg};
  color: ${({ $col }) => $col && $col};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Icons = styled.div``;
Icons.X = styled(x)`
  path {
    fill: ${({ $col }) => $col && $col};
  }
`;
export {
  Bg,
  Container,
  Wrapper,
  Title,
  Navigate,
  FilterText,
  ButtonDelete,
  Input,
  ButtonSubmit,
  FilterInfo,
  Icons,
};
