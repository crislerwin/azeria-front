import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        background: #f0f0f5;
        color: #333;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
