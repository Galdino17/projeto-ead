import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

button {
    display: block;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1.25rem;
    color: currentColor;
    letter-spacing: -0.39px;
    transition: .2s;
}
a {
    color:inherit;
    text-decoration: none;
    transition: 0.3s;
}
img { 
    display: block;
    max-width: 100%;
}
ul, li{
    list-style: none;
}
`;
