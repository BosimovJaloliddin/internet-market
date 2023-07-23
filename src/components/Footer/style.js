import styled, { css } from "styled-components";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as ok } from "../../assets/icons/ok.svg";
import { ReactComponent as vkontakte } from "../../assets/icons/vkontakte.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";

const Bg = styled.div`
  background: yellow;
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 24px 116px;
  margin: 0 auto;
`;
const WrapItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 133px;
`;
const Items = styled.div`
  display: flex;
  gap: ${({ gap }) => gap && `${gap}px`};
`;
const Item = styled.div`
  font-family: "Rubik";
  font-size: ${({ fs }) => (fs ? `${fs}px` : `${12}px`)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #414141;
  cursor: pointer;
`;

const iconsStyle = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 0 5px #222;
  }
  &:active {
    transform: scale(0.94);
  }
`;
const Icons = styled.div``;

Icons.Instagram = styled(instagram)`
  ${iconsStyle}
`;
Icons.Ok = styled(ok)`
  ${iconsStyle}
`;
Icons.Vkontakte = styled(vkontakte)`
  ${iconsStyle}
`;
Icons.Phone = styled(phone)`
  ${iconsStyle}
`;
Icons.Facebook = styled(facebook)`
  ${iconsStyle}
`;

export { Bg, Container, WrapItems, Items, Item, Icons };
