import styled, { css, keyframes } from 'styled-components';

interface CartProps {
  isVisible: boolean;
  isScrolling: boolean;
}

const RightToleft = keyframes`
0% {
  opacity: 0;
  transform: translateX(450px);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

const OpacityInScrenn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const Container = styled.div<CartProps>`
  display:  none;
  position: fixed;
  width: 400px;
  height: 800px;
  background: #28262E;
  right: 0;
  top: 16%;
  transition: height 0.7s, top 0.7s;
  border-radius: 5px;
  ${props => props.isVisible && css`
    display: flex;
    animation: ${RightToleft} 1s;
  `}
  ${props => props.isScrolling && css`
    height: 100%;
    top: 0;
  `}
`;

export const WrapperCart = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
padding: 10px;

`;

export const ContentCart = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 800px;
overflow: auto;
svg {
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.15);
  }
}
::-webkit-scrollbar {
  display: none;
}
`;

export const CartProducts = styled.div`
background: #FEF8F8;
display: flex;
justify-content: space-between;
align-items: center;
min-height: 80px;
padding: 10px;
animation: ${OpacityInScrenn} 1s;
& + div {
  margin-top: 10px;
}
border-radius: 5px;
`;
export const SubTotalCart = styled.footer`
display: flex;
align-content: center;
justify-content: space-between;
flex-direction: column;
min-height: 160px;
padding: 15px 0 5px 0;
color: #fff;
font-size: 18px;
a {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  height: 56px;
  border-radius: 5px;
  background: #ff9000;
  color: #000;
  font-size: 16px;
  text-decoration: none;
}
`;

export const TextContainerCart = styled.div`
display: flex;
justify-content: space-between;
align-content: center;
`;

export const EmptyBag = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex: 1;
p {
  margin-top: 10px;
  color: snow;
  font-size: 24px;
}
`;