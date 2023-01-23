import styled from "styled-components";
import ColorPallete from "../../../../common/styles/ColorPalette";
import Breakpoints from "../../../../common/utils/breakpoints";

const StyledNavbar = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: ${ColorPallete.mainBlack};
    height: 55px;
    justify-content: center;
    padding: 10px;

    & h3, p, a {font-size: 23px}

    & img {
        position: absolute;
        height: 90px;
        left: 0;
        bottom: 0;
    }

    & ul {list-style: none;}

    & .label_wrapper {
        position: absolute;
        display: flex;
        left: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    & .label_wrapper h3 {
        display: inline-flex;
        text-align: center;
        margin-left: 100px;
    }

    & .label {
        margin-left: 16px;
        font-weight: 700;
        color: ${ColorPallete.mainWhite};
    }

    & .label p {
        font-weight: 10;
        opacity: .9;
        color: ${ColorPallete.mainWhite};
    }

    & .nav_buttons_wrapper {
        display: flex;
        align-items: center;
    }

    @media (max-width: ${Breakpoints.small}) {
        & .label { display: none !important; }
    }

    @media (max-width: ${Breakpoints.xsmall}) {
        & .label_wrapper { display: none !important; }
    }

    @media (max-width: ${Breakpoints.xxsmall}) {
        justify-content: flex-end;
        & .label_wrapper { display: flex !important; }
        & .nav_buttons_wrapper { display: none;}
    }


`

export default StyledNavbar;