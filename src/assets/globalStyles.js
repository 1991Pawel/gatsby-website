import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin:0;
    padding:0;
    border:0;
  }

  body {
    font-family: 'roboto';
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat';
  }
  h1,h2,h3,h4,h5 {
      font-family:"Montserrat"
  }

`

export default GlobalStyle
