import { FC } from "react";
import StyledParrallaxPost from "./ParrallaxPost.style";

interface ParrallaxPostProps {
    left?: number,
    top?: number,
    axis: number;
    clientX: number,
    clientY: number,
    src: string,
    bottom?: number,
    right?: number,
    size: number,
}

const ParrallaxPost:FC<ParrallaxPostProps> = (props) => {
    const translateX = props.clientX * props.axis / 200;
    const translateY = props.clientY * props.axis / 200;

    return (
        <StyledParrallaxPost
            alt="Miesniawka instagram post"
            src={props.src}
            left={props.left}
            top={props.top}
            right={props.right}
            bottom={props.bottom}
            style={{transform: "translateX(" + translateX + "px) "+ "translateY(" + translateY + "px)"}}
            width={props.size} />
    )
}

export default ParrallaxPost;