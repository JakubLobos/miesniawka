import { FC, useState } from "react";
import HeadingText from "./headingtext/HeadingText.component";
import MainButton from "../../../common/components/mainbutton/MainButton.component";
import StyledHeroSection from "./HeroSection.style";
import arrowDown from "../../../images/static/deco/arrow_down.svg"
import arrowUp from "../../../images/static/deco/arrow_up.svg"
import ParrallaxPost from "./parrallaxpost/ParrallaxPost.component";
import igpost3Guys from "../../../images/static/igposts/igpost3Guys.png"
import igpostLifting from "../../../images/static/igposts/igpostLifting.png"
import igpostArm from "../../../images/static/igposts/igpostArm.png"

const HeroSection:FC = () => {
    const [clientMousePos, setClientMousePos] = useState({
        x: 0,
        y: 0,
    })

    return (
        <StyledHeroSection onMouseMove={(e) => setClientMousePos({
            x: e.clientX,
            y: e.clientY,
        })}>
            <ParrallaxPost
                left={10}
                top={-210}
                axis={2}
                clientX={clientMousePos.x}
                clientY={clientMousePos.y}
                src={igpostLifting.src}
                size={650} />
            <ParrallaxPost
                left={-220}
                top={-150}
                axis={6}
                clientX={clientMousePos.x}
                clientY={clientMousePos.y}
                src={igpost3Guys.src}
                size={650} />
            <ParrallaxPost
                axis={3}
                clientX={clientMousePos.x}
                clientY={clientMousePos.y}
                src={igpostArm.src}
                bottom={-140}
                right={-100}
                size={620} />
            <div className="hero_wrapper">
                <main>
                    <HeadingText
                        value="Mięśniawka"
                    />  
                    <p className="hero_desc">Optimal Weight Lifting</p>
                </main>
                <div className="button_container">
                    <img className="arrow arrow_up" src={arrowUp.src} height="170" alt="arrow" />
                    <MainButton
                        value={"Kontakt"}
                        isFilled={true}
                        buttonService={undefined} />
                    <img className="arrow arrow_down" src={arrowDown.src} height="50" alt="arrow" />
                </div>
            </div>
        </StyledHeroSection>
    )
}

export default HeroSection;