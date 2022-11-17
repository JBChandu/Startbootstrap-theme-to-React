import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PortfolioCardsSection from "./PortfolioCardsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Copyright from "./Copyright";

const App=()=>{
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <PortfolioCardsSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
        <Copyright/>
        </>
    )
}

export default App;