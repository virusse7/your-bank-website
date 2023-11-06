import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    };

    body {
        font-family: Lexend, 'sans-serif';
        background: ${({ theme }) => theme.grey10};
        color: ${({ theme }) => theme.white};
    }
`;