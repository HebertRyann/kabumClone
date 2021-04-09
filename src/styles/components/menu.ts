import styled from 'styled-components';

export const Container = styled.div`
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
  outline: none;
  height: 100%;
  text-align: center;
  &:hover {
    border-bottom: 1px solid #ff9000;
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