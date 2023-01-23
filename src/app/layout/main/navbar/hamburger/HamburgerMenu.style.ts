import styled from "styled-components";
import ColorPallete from "../../../../../common/styles/ColorPalette";
import Breakpoints from "../../../../../common/utils/breakpoints";

interface StyledHamburgerProps {
    isHidden: boolean,
}

const StyledHamburgerMenu = styled.div<StyledHamburgerProps>`
    position: absolute;
    display: none;
    top: -200px;
    left: 0;
    z-index: -1;
    height: 50%;
    min-height: 200px;
    width: 100%;
    opacity: .9;
    backdrop-filter: blur(30px) brightness(30%);
    padding: 10px;
    animation: showMenu .5s linear forwards;

    & .hamburger_buttons_wrapper {
        text-align: center;
        font-size: 40px;
    }

    @keyframes showMenu {
        0% {
            top: 400px;
        }

        100% {
            top: -200px;
        }
    }

    @media (max-width: ${Breakpoints.xxsmall}) {
        display: ${props => props.isHidden ? "none" : "block"};
    }
`

export default StyledHamburgerMenu;