import { createGlobalStyle } from "styled-components";
import DefaultBackgroundImg from "../../images/static/defbackgroundimg.svg"
import FixedDefaultBackgroundImg from "../../images/static/fixedbgmain.svg"
import ColorPallete from "./ColorPalette";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        min-height: 100vh;
        background-image: url(${DefaultBackgroundImg.src});
        overflow-x: hidden;
    }

    @font-face {
        font-family: 'Montserrat', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap');
    }

    p, h1, h2, h3, h4, a {
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        color: ${ColorPallete.mainBlack};
    }
`

export default GlobalStyle;