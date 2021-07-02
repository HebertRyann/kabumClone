import styled from 'styled-components';


export const Container = styled.div`
  padding-bottom: 50px;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 5px;
  padding: 10px 20px;
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

