import styled, { css } from 'styled-components';

export const Container = styled.div`
display: flex;
position: absolute;
`;

interface ParentProps {
  isVisible: boolean;
}
interface ChildrensMenuProps {
  isVisible: boolean;
}

export const ParentMenu = styled.div<ParentProps>`
display: none;
${props => props.isVisible && css`display: block;`}
background: #fff;
padding: 5px 20px;
width: 250px;
height: 200px;
border-right: 1px solid;
margin-left: 100px;
button {
  display: flex;
  width: 100%;
  outline: none;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}
`;

export const ChildrensMenu = styled.div<ChildrensMenuProps>`
display: none;
${props => props.isVisible && css`display: block;`}
background: #FFF;
padding: 10px;
min-width: 130px;
p {
  font-size: 16px;
  & + p {
    margin-top: 20px;
  }
}
`;