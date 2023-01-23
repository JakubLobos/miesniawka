import { FC } from "react";
import StyledHeadingText from "./HeadingText.style";

interface HeadingTextProps {
    value: string,
}

const HeadingText:FC<HeadingTextProps> = (props) => {

    return(
        <StyledHeadingText>
            {props.value}
        </StyledHeadingText>
    )
}

export default HeadingText;