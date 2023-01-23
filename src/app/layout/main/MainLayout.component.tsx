import { FC, PropsWithChildren } from "react";
import GlobalStyle from "../../../common/styles/GlobalStyle";
import StyledMainLayout from "./MainLayout.style";
import Navbar from "./navbar/Navbar.component";

interface MainLayoutProps {
    children: any,
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = (props) => {
    return (
        <>
            <GlobalStyle />
            <StyledMainLayout>
                {props.children}
                <Navbar />
                <footer>siemasiema</footer>
            </StyledMainLayout>    
        </>
    )
}