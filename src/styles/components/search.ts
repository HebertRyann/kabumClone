import styled, { css } from 'styled-components';

interface SearchProps {
  isVisible: boolean;
}


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