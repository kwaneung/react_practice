import React, {Fragment} from "react";

const Div = () => {
    return (
        <Fragment>
            <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-gradient-primary-to-secondary p-4">
                            <h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
                            <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body border-0 p-4">
                            {/* * * * * * * * * * * * * * * **/}
                            {/* * * SB Forms Contact Form * **/}
                            {/* * * * * * * * * * * * * * * **/}
                            {/* This form is pre-integrated with SB Forms.*/}
                            {/* To make this form functional, sign up at*/}
                            {/* https://startbootstrap.com/solution/contact-forms*/}
                            {/* to get an API token!*/}
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                {/* Name input*/}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text"
                                           placeholder="Enter your name..." data-sb-validations="required"/>
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is
                                        required.
                                    </div>
                                </div>
                                {/* Email address input*/}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email"
                                           placeholder="name@example.com" data-sb-validations="required,email"/>
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is
                                        required.
                                    </div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not
                                        valid.
                                    </div>
                                </div>
                                {/* Phone number input*/}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890"
                                           data-sb-validations="required"/>
                                    <label htmlFor="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number
                                        is required.
                                    </div>
                                </div>
                                {/* Message input*/}
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" type="text"
                                              placeholder="Enter your message here..." style={{height: "10rem"}}
                                              data-sb-validations="required"></textarea>
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is
                                        required.
                                    </div>
                                </div>
                                {/* Submit success message*/}
                                {/**/}
                                {/* This is what your users will see when the form*/}
                                {/* has successfully submitted*/}
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br/>
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                {/* Submit error message*/}
                                {/**/}
                                {/* This is what your users will see when there is*/}
                                {/* an error submitting the form*/}
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>
                                {/* Submit Button*/}
                                <div className="d-grid">
                                    <button className="btn btn-primary rounded-pill btn-lg disabled" id="submitButton"
                                            type="submit">Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Div;