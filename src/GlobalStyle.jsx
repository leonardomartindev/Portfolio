import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }
    body {
        background-color: ${theme.colors.bg_color}; 
        overflow-x: hidden;
        
    }
    html {
        font-size: 62.5%;
        @media(max-width: 800px){
            font-size: 55%;
        }
    }
    a{
        text-decoration: none;
        color: inherit;
    }
   
`;

export default GlobalStyle;
