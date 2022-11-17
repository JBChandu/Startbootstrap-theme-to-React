import React from "react";
import ScrollTopButton from "./ScrollTopButton";

const Copyright=()=>{
    return(
        <>
        {/* // <!-- Copyright Section--> */}
        <section className="copyright py-4 text-center text-white">
            <div className="container"><small className="pre-wrap">Copyright © Your Website 2020</small></div>
        </section>

        {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
        <ScrollTopButton/>
        </>
    )
}

export default Copyright;