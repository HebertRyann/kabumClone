import styled, { css } from 'styled-components';

interface SearchProps {
  isVisible: boolean;
}

export const Container = styled.header`
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
> a {
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  margin-right: 10px;
  color: #ff9000;
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