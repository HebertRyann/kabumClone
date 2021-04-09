import styled from 'styled-components';

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
h1 {
  margin-right: 10px;
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