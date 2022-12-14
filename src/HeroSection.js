import React from "react";

const HeroSection=()=>{
    return(
        <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            {/* <!-- Masthead Avatar Image--> */}
            <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt=""></img>
            {/* <!-- Masthead Heading--> */}
            <h1 className="masthead-heading mb-0">START BOOTSTRAP</h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Masthead Subheading--> */}
            <p className="pre-wrap masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </header>
    )
}

export default HeroSection;