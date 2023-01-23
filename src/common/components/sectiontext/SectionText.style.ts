import styled from "styled-components";
import ColorPallete from "../../styles/ColorPalette";

interface StyledSectionTextProps {
    fontSize: number,
    underlineWidth: number,
    underlineHeight: number,
    underlinePosY: number,
    underlineRotate?: string,
}

const StyledSectionText = styled.h3<StyledSectionTextProps>`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: ${props => props.fontSize}em;
    text-align: center;
    position: relative;

    &::before {
        display: block;     
        z-index: -1;
        content: '';
        width: ${props => props.underlineWidth}%;
        height: ${props => props.underlineHeight}%;
        top: ${props => props.underlinePosY}%;
        left: 50%;
        right: 50%;
        transform: ${props => props.underlineRotate ? props.underlineRotate : "translate(-50%, 0)"};
        background-color: ${ColorPallete.mainBlue};
        position: absolute;
        opacity: .5;
    }
`

export default StyledSectionText;