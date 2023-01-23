import styled from "styled-components";
import ColorPallete from "../../../../../common/styles/ColorPalette";
import Breakpoints from "../../../../../common/utils/breakpoints";

const StyledHamburger = styled.button`
    display: none;
    position: relative;
    width: 60px;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;

    & .hamburger_btn_lines {
        display: block;
        width: 100%;
        min-height: 6px;
        background-color: ${ColorPallete.mainWhite};
        border-radius: 5px;
    }

    &::after, &::before {
        position: absolute;
        display: block;
        content: '';
        width: 100%;
        height: 5px;
        background-color: ${ColorPallete.mainWhite};
        border-radius: 5px;
    }

    &::after {top: 0;}
    &::before {bottom: 0;}

    @media (max-width: ${Breakpoints.xxsmall}) {
        display: block;
    }

`

export default StyledHamburger;