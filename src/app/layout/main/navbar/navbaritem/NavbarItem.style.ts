import styled from "styled-components";
import ColorPallete from "../../../../../common/styles/ColorPalette";

const StyledNavbarItem = styled.li`
        & .nav_button {
        padding: 10px;
        text-decoration: none;
        opacity: .5;
        color: ${ColorPallete.mainWhite};
    }
`

export default StyledNavbarItem;