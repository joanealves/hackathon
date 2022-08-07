import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFF;
        --black: #100f10;
        --gray: #2c3333;
        --green_dark: #395b64;
        --green_light: #a5c9ca;
        --shape: #e7f6f2;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1 {
        color: var(--green_dark);
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5% ;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--shape);
    }

    button {
        cursor: pointer;
        color: var(--green_light);
    }

    p {
        font-size: 16px;
    }
`;
