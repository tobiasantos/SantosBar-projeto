import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    body {
        background-color: #f2f2f2;
        ::-webkit-scrollbar {
        width: 6 px;
        }
        ::-webkit-scrollbar-thumb {
            background: #FCBB19;
        }
        ::-webkit-scrollbar-track {
            background: #EDEDED;
        }
    }
`;
