import { FC } from "react";
import { MainLayout } from "../layout/main/MainLayout.component";
import About from "./about_section/About.component";
import HeroSection from "./hero/HeroSection.component";
import NewestPosts from "./newestposts/NewestPosts.component";

const HomePage:FC = () => {

    return (
        <MainLayout>
            <HeroSection />
            <About />
            <NewestPosts />
        </MainLayout>    
    )
}

export default HomePage;