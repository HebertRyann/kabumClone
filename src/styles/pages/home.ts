import styled, { css, keyframes } from 'styled-components';

interface CartProps {
  isVisible: boolean;
  isScrolling: boolean;
}

interface SearchProps {
  isVisible: boolean;
}

interface ParentProps {
  isVisible: boolean;
}

interface ChildrensMenuProps {
  isVisible: boolean;
}


export const Container = styled.div`
  padding-bottom: 30px;
`;
const OpacityInScrenn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

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

export const ContainerOrffers = styled.div<ChildrensMenuProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  ${props => props.isVisible && css`
    margin-top: 300px;
  `}
`;

export const ContentOffers = styled.div`
max-width: 1200px;
margin-top: 35px;
> h1 {
  display: flex;
  align-items: center;
  margin: 0 0 30px 0;
  color: #FFF;
  p {
    display: flex;
    align-items: center;
    background: #ff9000;
    padding: 0 3px;
    border-radius: 5px;
    margin-left: 5px;
    color: #000;
  }
}
`;

export const WrapperOffers = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Offers = styled.div`
  & + div{
     margin-left: 10px;
  }
  a {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    height: 400px;
    width: 330px;
    border-radius: 5px;
    padding: 15px 15px;
    cursor: pointer;
    > span {
      display: flex;
      justify-content: center;
      background: #ff9000;
      border-radius: 3px;
      padding: 3px;
      max-width: 40px;
      color: #000;
    }
    > div.ContainerDetails {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      p {
        color: #000;
      }
      > span {
        text-decoration: line-through;
        color: #999591;
      }
      strong {
        font-size: 25px;
        color: #000;
      }
    }
    h1 {
      color: #000;
    }
  }
`;

export const IconContainerLeft = styled.div`
display: flex;
align-items: center;
justify-content: center;
div {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ff9000;
  margin-right: 10px;
  svg {
    cursor: pointer;
  }
}

`;

export const IconContainerRight = styled.div`
display: flex;
align-items: center;
justify-content: center;
div {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: -10px;
  border-radius: 50%;
  background: #ff9000;
}
`;

export const ContainerReleases = styled.div`
max-width: 1020px;
margin: 0 auto;
h1 {
  margin: 60px 0 60px 0;
}
`;

export const WrapperRealeases = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const ProductsReleases = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 10px;
    & + div {
      margin-left: 20px;
    }
  a {
    display: flex;
    color: #000;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    height: 375px;
  }
  button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      outline: #ff9000 solid 1.5px;
      border-radius: 0;
      background: transparent;
      height: 35px;
      width: 280px;
      transition: 1s;
      margin-top: 20px;
      &:hover {
        background: #ff9000;
        color: #000;
      }
    }
`;

export const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #FFF;

`;

export const ContainerPreOrder = styled.div`
max-width: 1020px;
margin: 0 auto;
h1 {
  margin: 60px 0 60px 0;
}
`;

export const TextPreOrder = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #fff;
`;

export const WrapperPreOrder = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const PreOrder = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 10px;
    & + div {
      margin-left: 20px;
    }
  a {
    display: flex;
    color: #000;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    height: 375px;
  }
  button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      outline: #ff9000 solid 1.5px;
      border-radius: 0;
      background: transparent;
      height: 35px;
      width: 280px;
      transition: 1s;
      margin-top: 20px;
      &:hover {
        background: #ff9000;
        color: #000;
      }
    }
`;
export const Header = styled.header`
background: #28262E;
height: 100px;
`;

export const HeaderContent = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1100px;
margin: 0 auto;
padding: 0 30px;
height: 100%;
h1 {
  margin-right: 10px;
  font-size: 35px;
  color: #ff9000;
  font-weight: bold;
}
div {
  display: flex;
  align-items: center;
  > p {
    color: #ff9000;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 5px;
    }
  }
}
div.IconContainerUser {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background: rgba(0, 0, 0,0.25);
  border-radius: 5px;
  margin-right: 10px;
  padding: 10px;
}
div.IconContainerCart {
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0,0.25);
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  svg {
    transition: 0.7s;
  }
  &:hover {
    svg {
      transform: scale(1.15);
    }
  }
}
span {
  font-size: 15px;
  position: absolute;
  margin: -15px -30px 0px 0px;
  background: #ff9000;
  border-radius: 50%;
  p {
    padding: 4px 8px;
  }
}
span.spanContainer {
  position: absolute;
  font-size: 15px;
  margin: -15px -30px 0px 0px;
  background: #ff9000;
  border-radius: 50%;
  p {
    padding: 6px 6px;
  }
}
div.containerCart {
  display: flex;
  flex-direction: column;
}
`;


export const CartContainer = styled.div<CartProps>`
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
  height: 50px;
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

export const Menu = styled.div`
display: flex;
align-items: center; 
border-bottom: #000 1px solid;
height: 60px;
padding: 0 40px;
color: #fff;
background: #312E38;
button {
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: transparent;
  outline: none;
  margin-left: 100px;
  svg {
    margin-right: 10px;
  }
}
`;

export const MenuContent = styled.div`
display: flex;
width: 1100px;
align-items: center;
justify-content: space-between;
margin-left: 300px;
height: 100%;
button {
  color: #fff;
  width: 155px;
  background: transparent;
  font-size: 16px;
  height: 105%;
  text-align: center;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  &:hover {
    border-bottom: 2px solid #ff9000;
  }
}
span {
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-left: 5px;
    color: #000;
    background: #ff9000;
    padding: 4px 6px;
    border-radius: 5px;
  }
}
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 410px;
  height: 38px;
`;
export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
`;

export const ContentSearch = styled.div<SearchProps>`
  display: none;
  ${props => props.isVisible && css`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 410px;
    margin-top: 20px;
    background: #28262E;
    border-radius: 0 0 5px 5px;
  `}
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  a.ProductsSearch {
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    p {
      color: #ff9000;
    }
    strong {
      color: snow;
    }
    & + a {
      margin-top: 15px;
    }
  }

`;


export const Parent = styled.div`
  display: flex;
  position: absolute;
`;

export const ParentMenu = styled.div<ParentProps>`
  display: none;
  ${props => props.isVisible && css`display: block;`}
  background: #28262E;
  padding: 5px 20px;
  width: 300px;
  height: 250px;
  margin-left: 100px;
  button {
    display: flex;
    width: 100%;
    outline: none;
    background: transparent;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    height: 33%;
    font-size: 16px;
  }
`;

export const ChildrensMenu = styled.div<ChildrensMenuProps>`
  display: none;
  ${props => props.isVisible && css`display: block;`}
  background: #FFF;
  border-left: 0.5px solid #FFF;
  padding: 10px;
  width: 300px;
  height: 250px;
  p {
    font-size: 16px;
    & + p {
      margin-top: 20px;
    }
  }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 16px;
      color: #000;
      height: 33%;
      width: 100%;
      padding-left: 10px;
    }
`;

