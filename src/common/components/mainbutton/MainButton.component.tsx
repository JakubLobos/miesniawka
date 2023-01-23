import { FC } from "react";
import StyledMainButton from "./MainButton.style"

interface MainButtonProps {
    value: string,
    isFilled: boolean,
    buttonService: Function,
}

const MainButton:FC<MainButtonProps> = (props) => {
    

    return (
        <StyledMainButton
            isFilled={props.isFilled}
            onClick={() => props.buttonService}
        >
            {props.value}
        </StyledMainButton>
    )
}

export default MainButton;