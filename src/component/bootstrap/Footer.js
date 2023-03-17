import React, {Fragment} from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-black text-center py-5">
                <div className="container px-5">
                    <div className="text-white-50 small">
                        <div className="mb-2">&copy; Your Website 2022. All Rights Reserved.</div>
                        <a href="#!">Privacy</a>
                        <span className="mx-1">&middot;</span>
                        <a href="#!">Terms</a>
                        <span className="mx-1">&middot;</span>
                        <a href="#!">FAQ</a>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;