import styled from "styled-components";
import ColorPallete from "../../styles/ColorPalette";

interface StyledMainButtonProps {
    isFilled: boolean,
}

const StyledMainButton = styled.button<StyledMainButtonProps>`
    background-color: ${props => props.isFilled ? ColorPallete.mainBlue : "transparent"};
    border: 2px solid ${ColorPallete.mainBlue};
    padding: 7px 45px 7px 45px;
    font-size: 24px;
    color: ${props => props.isFilled ? ColorPallete.mainWhite : ColorPallete.mainBlue};
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &::before {
        position: absolute;
        display: block;
        content: '';
        height: calc(100% + 4px);
        opacity: 0;
        box-shadow: -13px 4px 35px 36px;
        left: 0px;
        top: -2px;
        
    }

    @keyframes ShineEffect {
        0% {
            opacity: 0;
        }

        50% {
            opacity: .4;
            left: 50%;
        }

        100% {
            left: 100%;
            opacity: 0;
        }
    }

    &:hover::before {
        animation: ShineEffect .5s linear forwards;
    }

`

export default StyledMainButton;