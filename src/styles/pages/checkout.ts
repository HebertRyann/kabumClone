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
  padding-bottom: 50px;
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
}
a {
  text-decoration: none;
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
  font-size: 17.7px;
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
  background: #28262E;
  padding: 10px;
  width: 300px;
  height: 250px;
  border-left: 0.5px solid #fff;
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
      background: transparent;
      color: #fff;
      height: 33%;
      width: 100%;
      padding-left: 10px;
    }

`;

export const ProductContainer = styled.div<ParentProps>`
  max-width: 1500px;
  margin: 70px auto;
  transition: 1s;
  ${props => props.isVisible && css`
    margin-top: 300px;
  `}
`;
export const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 200px;
`;

export const ContentProductImage = styled.img`
  display: flex;
  width: 200px;
  height: 176px;
  background: #fff;
  border: 5px solid transparent;
  border-radius: 6px;
  transition: border 0.5s;
  & + img {
    margin-top: 10px;
  }
  &.selected {
    border: 5px solid #ff9000;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  /* button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    outline: #ff9000 solid 1.5px;
    background: transparent;
    height: 35px;
    width: 90%;
    border-radius: 0;
    transition: 0.7s;
    &:hover {
      background: #ff9000;
      color: #000;
    }
  } */
  strong {
    font-size: 20px;
  }
  h1 {
    font-size: 26px;
  }
  div.HeaderProduct {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 120px;
      margin-right: 30px;
    }
  }
  div.DetailsProduct {
    display: flex;
    align-items: center;
    span {
      font-size: 25px;
      margin: 0 10px;
    }
    strong {
      font-size: 26px;
      margin: 0 20px;
    }
    svg {
       cursor: pointer;
    }

  }
  & + div {
    margin-top: 30px;
  }
`;
export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 550px;
`;

export const ListProductsCart = styled.div`

  background: transparent;
  width: 75%;
  height: 650px;
  margin: 50px auto;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fff;
  border-radius: 5px;
  width: 600px;
  height: 200px;
  margin: 0 auto;
  padding: 0 20px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 22px;
    }
    strong {
      color: #ff9000;
      font-size: 25px;
      font-weight: normal;
    }
  }
`;

export const EmpytCheckout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  h1 {
    margin: 50px 0;
    color: #fff;
  }
`;

