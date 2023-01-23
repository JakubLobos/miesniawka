import { FC } from "react";
import Igtest from "../../../../images/static/igposts/debugimgexample_files/242456294_2691027924525065_1331107274955055576_n.jpg"
import StyledPosts from "./Posts.style";

const Posts:FC = () => {

    return (
        <StyledPosts>
            <img className="insta_post" width={320} src={Igtest.src} alt="test" />
            <img className="insta_post" width={320} src={Igtest.src} alt="test" />
            <img className="insta_post" width={320} src={Igtest.src} alt="test" />
        </StyledPosts>
    )
}

export default Posts;