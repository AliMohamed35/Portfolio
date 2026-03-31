import Hero from "../components/Hero/HeroSection";
import NavBar from "../components/NavBar";

// header and footer
function MainLayout(){
    return(
        <>
        <NavBar/>
        <Hero/>
        </>
    );
}

export default MainLayout;