import { FC, useState } from "react";
import NavbarItem from "../navbaritem/NavbarItem.component";
import StyledHamburger from "./Hamburger.style";
import StyledHamburgerMenu from "./HamburgerMenu.style";

const Hamburger: FC = () => {

    const [isMenuHidden, setIsMenuHidden] = useState(true);

    return (
        <>
            <StyledHamburgerMenu isHidden={isMenuHidden}>
                <ul className="hamburger_buttons_wrapper">
                    <NavbarItem href="#" value="Start" />
                    <NavbarItem href="#" value="Miesniopedia" />
                    <NavbarItem href="#" value="Kalkulator CPM" />
                </ul>
            </StyledHamburgerMenu>
            <StyledHamburger onClick={() => setIsMenuHidden(isMenuHidden ? false : true)}>
                <span className="hamburger_btn_lines"></span>
            </StyledHamburger>
        </>
        )
}

export default Hamburger;