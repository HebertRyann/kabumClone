import styled, { css } from 'styled-components';


interface ChildrensMenuProps {
  isVisible: boolean;
}


export const Container = styled.div`
  padding-bottom: 30px;
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


