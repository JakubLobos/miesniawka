import { FC } from "react";
import StyledSectionText from "./SectionText.style";

interface SectionTextProps {
    value: string,
    fontSize: number,
    underlineWidth: number,
    underlineHeight: number,
    underlinePosY: number,
    underlineRotate?: string,
}

const SectionText:FC<SectionTextProps> = (props) => {

    return(
        <StyledSectionText
            fontSize={props.fontSize}
            underlineHeight={props.underlineHeight}
            underlinePosY={props.underlinePosY}
            underlineWidth={props.underlineWidth}
            underlineRotate={props.underlineRotate}
        >
            {props.value}
        </StyledSectionText>
    )
}

export default SectionText;