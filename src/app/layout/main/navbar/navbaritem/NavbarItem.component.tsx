import { FC } from "react";
import StyledNavbarItem from "./NavbarItem.style";

interface NavbarItemProps {
    href: string,
    value: string,
}

const NavbarItem: FC<NavbarItemProps> = (props) => {
    
    return (
        <StyledNavbarItem>
            <a className="nav_button" href={props.href}>{props.value}</a>
        </StyledNavbarItem>
    )
}

export default NavbarItem;