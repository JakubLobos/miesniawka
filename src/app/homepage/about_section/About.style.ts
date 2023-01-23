import styled from "styled-components";
import ColorPallete from "../../../common/styles/ColorPalette";
import Breakpoints from "../../../common/utils/breakpoints";

const StyledAbout = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & .about_grid_wrapper {
        display: grid;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        max-width: 2100px;
        height: auto;
        padding: 18vh 50px 50px 50px;
        font-size: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 700px));
        grid-template-rows: repeat(auto-fit, auto);
        grid-gap: 2em;
    }
    

    & .about_header {
        width: 260px;
    }

    & .about_content {
        width: 100%;
        font-size: 1.6em;
        font-style: oblique;
        padding: 20px;
    }

    & .about_img_wrapper {
        position: relative;
        justify-self: center;
        width: 300px;
    }

    & .about_img_author {
        position: absolute;
        top: 1.5em;
        right: -4.5em;
        font-size: 1.5em;
        width: 5em;
        font-family: 'Montserrat', sans-serif;
        font-style: italic;
    }

    & .deco_tape {position: absolute;}
    
    & .tape_top { 
        top: 0px;
        left: -16px;
    }

    & .tape_bottom {
        bottom: 8px;
        right: -16px;
    }

    @media (max-width: ${Breakpoints.xxsmall}) {
        & .about_grid_wrapper { font-size: 0.8rem }
    }

    @media (max-height: 610px) {
        padding-top: 100px;
    }

    @media (max-width: ${Breakpoints.xsmall}) {
        & .about_img_author {
            left: 20%;
            top: 71%;
            color: ${ColorPallete.mainWhite};
        }
    }
`

export default StyledAbout;