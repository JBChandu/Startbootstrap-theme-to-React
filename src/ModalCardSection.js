import React from "react";
import ModalCard from "./ModalCard";

const ModalCardSection=()=>{
    return(
        <>
        {/* <!-- Portfolio Modal--> */}
        <ModalCard id="portfolioModal0" ariaLabel="#portfolioModal0Label" imgSrc="assets/img/portfolio/cabin.png" altText="Log Cabin" ModalTitle="Log Cabin"/>
        <ModalCard id="portfolioModal1" ariaLabel="#portfolioModal1Label" imgSrc="assets/img/portfolio/cake.png" altText="Tasty Cake" ModalTitle="Tasty Cake"/>
        <ModalCard id="portfolioModal2" ariaLabel="#portfolioModal2Label" imgSrc="assets/img/portfolio/circus.png" altText="Circus Tent" ModalTitle="Circus Tent"/>
        <ModalCard id="portfolioModal3" ariaLabel="#portfolioModal3Label" imgSrc="assets/img/portfolio/game.png" altText="Controller" ModalTitle="Controller"/>
        <ModalCard id="portfolioModal4" ariaLabel="#portfolioModal4Label" imgSrc="assets/img/portfolio/safe.png" altText="Locked Safe" ModalTitle="Locked Safe"/>
        <ModalCard id="portfolioModal5" ariaLabel="#portfolioModal5Label" imgSrc="assets/img/portfolio/submarine.png" altText="sub-Marine" ModalTitle="Submarine"/>
        </>
    )
}

export default ModalCardSection;