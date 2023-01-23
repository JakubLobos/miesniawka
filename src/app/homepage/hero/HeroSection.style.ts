import styled from "styled-components";
import Breakpoints from "../../../common/utils/breakpoints";

const StyledHeroSection = styled.section`
    width: 100%;
    height: 100vh;
    min-height: 568px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & .hero_desc {
        width: 100%;
        text-align: center;
        margin: 16px 0 113px 0;
        font-style: oblique;
        
    }

    & .hero_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    & .button_container { position: relative; }
    & .arrow { position: absolute; }
    & .arrow_up {
        left: -120%;
        top: -80%;
    }
    
    & .arrow_down {
        left: 115%;
        top: -50%;
        height: 41px;
    } 

    @media (max-width: ${Breakpoints.xsmall}) {
        & .hero_desc {
            font-size: 8vw;
            margin: 5px 0 50px 0;
        }
    }
`

export default StyledHeroSection;