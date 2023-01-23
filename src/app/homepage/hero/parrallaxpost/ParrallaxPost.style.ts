import styled from "styled-components";
import Breakpoints from "../../../../common/utils/breakpoints";

interface StyledParrallaxPostProps {
    width: number,
    left?: number,
    top?: number,
    bottom: number,
    right: number,
}

const StyledParrallaxPost = styled.img<StyledParrallaxPostProps>`
    position: absolute;
    width: ${props => props.width}px;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    right: ${props => props.right}px;
    bottom: ${props => props.bottom}px;

    @media (max-width: 1700px) {width: 500px;}
    @media (max-height: 1030px) {width: 500px;}
    @media (max-width: 860px) {width: 440px}
    
    @media (max-height: 840px) {width: 400px;}
    @media (max-width: ${Breakpoints.xsmall}) { width: 360px; }
    @media (max-width: ${Breakpoints.xxsmall}) { 
        width: 320px !important;
        transform: translate(20%, -10%) !important;
    }
`

export default StyledParrallaxPost;