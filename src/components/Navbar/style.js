import { styled, css } from "styled-components";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as get } from "../../assets/icons/get.svg";
import { ReactComponent as shopping } from "../../assets/icons/shopping.svg";
import { ReactComponent as menu } from "../../assets/icons/menu.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  background: #fff;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;
const Wrapp = styled.ul`
  display: flex;
  max-width: 1440px;
  height: 72px;
  padding: 0px 116px;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  margin: auto;
`;
const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  color: #414141;
  span {
    color: #414141;
    text-align: center;
    font-family: "Rubik";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;
const Category = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 4px;
  background: #70c05b;
  cursor: pointer;
  span {
    color: #fff;
    text-align: center;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;
const WrapSearch = styled.div`
  position: relative;
  width: 375px;
  height: 40px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  font-family: "Rubik";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #232323;
  line-height: 150%;
  margin-left: 1rem;
  padding: 0 18px;
  border: 1px solid #232323;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;
const Search = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #70c05b;
  background: #fff;
  outline: none;
`;

const styleIcons = css`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
`;
const Icons = styled.div``;
Icons.Love = styled(love)`
  ${styleIcons}
`;
Icons.Get = styled(get)`
  ${styleIcons}
`;
Icons.Shopping = styled(shopping)`
  ${styleIcons}
`;
Icons.Search = styled(search)`
  position: absolute;
  right: 8px;
  top: 8px;
  ${styleIcons}
`;
Icons.Menu = styled(menu)`
  ${styleIcons}
`;

// Drobdown style
const DropdownWrapp = styled.div`
  background: #fff;
  margin-top: 18px;
  padding: 12px 24px;
`;
const DropdownItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const DropdownItem = styled.span`
  align-self: stretch;
  color: #414141;
  font-family: "Rubik";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    color: #f63;
  }
`;

export {
  Container,
  Wrapp,
  Items,
  Item,
  Category,
  Search,
  WrapSearch,
  User,
  Icons,
  DropdownWrapp,
  DropdownItems,
  DropdownItem,
};
