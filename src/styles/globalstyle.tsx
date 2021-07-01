import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    background: #312E38;
    font-family: 'Roboto';
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar {
      display: none;
    }
    scroll-behavior: smooth;

  }
  button {
    cursor: pointer;
  }
`;