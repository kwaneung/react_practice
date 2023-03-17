import React, {Fragment} from "react";

const Section4 = () => {
    return (
        <Fragment>
            <section className="bg-gradient-primary-to-secondary" id="download">
                <div className="container px-5">
                    <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge"
                                                                           src="assets/img/google-play-badge.svg"
                                                                           alt="..."/></a>
                        <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..."/></a>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Section4;