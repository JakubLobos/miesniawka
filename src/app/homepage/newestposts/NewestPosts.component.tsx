import { FC } from "react";
import StyledNewestPosts from "./NewestPosts.style";
import Posts from "./posts/Posts.component";

const NewestPosts:FC = () => {

    return (
        <StyledNewestPosts>
            <Posts />
            
        </StyledNewestPosts>
    )
}

export default NewestPosts;