import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        user-select: none;
        li {
            list-style-type: none;
        }
        &:focus {
            outline: none;
        }
    }
`