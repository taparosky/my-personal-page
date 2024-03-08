import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: helvetica;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    color: white;
  }


  body {
    background: var(--background);
  }

  button {
    cursor: pointer;
  }

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --background: black;
  }
`;

export { GlobalStyles };
