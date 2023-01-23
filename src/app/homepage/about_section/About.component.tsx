import { FC } from "react";
import SectionText from "../../../common/components/sectiontext/SectionText.component";
import StyledAbout from "./About.style";
import Tape from "../../../images/static/deco/tape.svg"
import OwnerIMG from "../../../images/static/igposts/ownerIgorImg.png"

const About:FC = () => {
    
    return (
        <StyledAbout>
            <div className="about_grid_wrapper">
                <article className="about_article">
                    <header className="about_header">
                    <SectionText
                        value={"O mnie"}
                        fontSize={3.5}
                        underlineWidth={110}
                        underlineHeight={40}
                        underlinePosY={30}
                        underlineRotate={"translate(-50%, 0) rotate(-2deg)"}
                        />
                    </header>
                    <p className="about_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quibusdam, quisquam assumenda eius delectus molestiae? Ab officiis reiciendis aut. Quam fuga repellat nam magni tempora distinctio laudantium libero porro non iure placeat debitis cum labore aperiam magnam vitae repellendus autem sequi, explicabo molestias officia aut minus eaque. Ratione optio vero rerum ducimus ex. Laboriosam cumque veritatis esse! Quis itaque fugiat dolorem, officia accusantium ea laboriosam!</p>
                </article>
                <div className="about_img_wrapper">
                    <img className="deco_tape tape_top" alt="tape image" width={80} src={Tape.src} />
                    <img alt="muscle men picture, owner of miesniawka" width={300} src={OwnerIMG.src} />
                    <figcaption className="about_img_author">Igor Grygorjew</figcaption>
                    <img className="deco_tape tape_bottom" alt="tape image" width={80} src={Tape.src} />
                </div>
            </div>
        </StyledAbout>
    )
}

export default About;