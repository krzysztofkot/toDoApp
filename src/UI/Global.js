import { createGlobalStyle } from "styled-components";
import RobotoLight from "../fonts/Roboto-Light.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Roboto light";
  src: url(${RobotoLight}) format("truetype");
  font-display: swap;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.inputFontColor};
}

body {
  background: linear-gradient(-40deg, #a3cef1 50%, #95c6ef 50%);
  font-family: "Roboto light", sans-serif;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}`;

export default GlobalStyles;
