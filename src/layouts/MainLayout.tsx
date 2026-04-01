import NavBar from "../components/NavBar";
import Hero from "../components/Hero/HeroSection";
import AboutSection from "../components/About/AboutSection";
import ExperienceSection from "../components/Experience/ExperienceSection";
import ProcessSection from "../components/Process/ProcessSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProcessSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
