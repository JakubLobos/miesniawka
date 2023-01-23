import styled from "styled-components";

const StyledPosts = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, 320px);
    grid-template-rows: repeat(auto-fit, auto);
    grid-gap: 2em;

    & .insta_post:nth-child(2) {
        transform: rotate(4deg);
        margin-top: 100px;
    }

    & .insta_post:nth-child(1), & .insta_post:nth-child(3) {
        transform: rotate(-4deg);
        margin-bottom: auto;
    }
`

export default StyledPosts;