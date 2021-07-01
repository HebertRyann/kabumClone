import styled, { css } from 'styled-components';

interface ParentProps {
  isVisible: boolean;
}
interface ChildrensMenuProps {
  isVisible: boolean;
}

export const Container = styled.div`
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