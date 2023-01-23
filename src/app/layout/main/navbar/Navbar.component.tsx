import { FC, useState } from "react";
import StyledNavbar from "./Navbar.style";
import MiesniawkaLogo from "../../../../images/static/logo/miesniawkalogo.svg"
import Hamburger from "./hamburger/Hamburger.component";
import NavbarItem from "./navbaritem/NavbarItem.component";

const Navbar:FC = () => {

    return (
        <StyledNavbar>
            <div className="label_wrapper">
                <img src={MiesniawkaLogo.src} alt="Mięśniawka logo" />
                <h3 className="label">Mięśniawka<p>.pl</p></h3>
            </div>
            <ul className="nav_buttons_wrapper">
                <NavbarItem href="#" value="Start" />
                <NavbarItem href="#" value="Miesniopedia" />
                <NavbarItem href="#" value="Kalkulator CPM"/>
            </ul>
            <Hamburger />
            
        </StyledNavbar>
    )
}

export default Navbar;