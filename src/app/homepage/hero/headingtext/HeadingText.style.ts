import styled from "styled-components";
import ColorPallete from "../../../../common/styles/ColorPalette";
import Breakpoints from "../../../../common/utils/breakpoints";

const StyledHeadingText = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 113px;
    text-align: center;
    position: relative;

    &::before {
        display: block;
        z-index: -1;
        content: '';
        width: 120%;
        height: 35%;
        top: 70%;
        left: 50%;
        right: 50%;
        transform:translate(-50%, 0);
        background-color: ${ColorPallete.mainCream};
        position: absolute;
    }

    @media (max-width: 850px) {
        font-size: 12vw;
        &::before {width: 120%;}
    }

    @media (max-width: ${Breakpoints.xxsmall}) {
        &::before {width: 80vw;}
    }
`

export default StyledHeadingText;