import React from "react";

const Footer=()=>{
    return(
        <footer className="footer text-center">
        <div className="container">
            <div className="row">
                {/* <!-- Footer Location--> */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="mb-4">LOCATION</h4>
                    <p className="pre-wrap lead mb-0">2215 John Daniel Drive Clark, MO 65243</p>
                </div>
                {/* <!-- Footer Social Icons--> */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="mb-4">AROUND THE WEB</h4><a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/StartBootstrap"><i className="fab fa-fw fa-facebook-f"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/sbootstrap"><i className="fab fa-fw fa-twitter"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/startbootstrap"><i className="fab fa-fw fa-linkedin-in"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.dribble.com/startbootstrap"><i className="fab fa-fw fa-dribbble"></i></a>
                </div>
                {/* <!-- Footer About Text--> */}
                <div className="col-lg-4">
                    <h4 className="mb-4">ABOUT FREELANCER</h4>
                    <p className="pre-wrap lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;