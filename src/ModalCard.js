import React from "react";

const ModalCard=({id="portfolioModal0",ariaLabel="#portfolioModal0Label" ,imgSrc="assets/img/portfolio/cabin.png", altText="Image...", ModalTitle="Title of The Card"})=>{
    return(
        <div className="portfolio-modal modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby={ariaLabel} aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary mb-0">{ModalTitle}</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img className="img-fluid rounded mb-5" src={imgSrc} alt={altText}/>
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCard;