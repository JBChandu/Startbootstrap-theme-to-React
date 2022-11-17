import React from "react";
import ModalCardSection from "./ModalCardSection";
import Card from "./Card";

const PortfolioCardsSection=()=>{
    return(
    <>
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <div className="text-center">
                    <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
                </div>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row justify-content-center">
                    {/* <!-- Portfolio Items--> */}
                    <Card dataTarget="#portfolioModal0" imgSrc="assets/img/portfolio/cabin.png"/>
                    <Card dataTarget="#portfolioModal1" imgSrc="assets/img/portfolio/cake.png"/>
                    <Card dataTarget="#portfolioModal2" imgSrc="assets/img/portfolio/circus.png"/>
                    <Card dataTarget="#portfolioModal3" imgSrc="assets/img/portfolio/game.png"/>
                    <Card dataTarget="#portfolioModal4" imgSrc="assets/img/portfolio/safe.png"/>
                    <Card dataTarget="#portfolioModal5" imgSrc="assets/img/portfolio/submarine.png"/>
                </div>
            </div>
        </section>
        <ModalCardSection/>
        </>
    )
}

export default PortfolioCardsSection;