import React from 'react';
import './Faq.css'

import faq from '../../../images/faq.jpg'

const Faq = () => {
    return (
        <section className="container py-5 px-3" id="faq-section">
            <div className="row">
                <h2>Useful <span className="text-colorful">FAQ’s</span></h2>
                <div className="col-md-7">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    24/7 Customer Support
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    24 x 7 dedicated Technical Support for connection problem
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    OUR PRICING PLAN
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    We offer all our services at really low prices in comparison with similar companies. The price of your connection must be paid in full in advance.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Download upto 1Gbps
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Connect all your devices and access High-speed Internet with ease
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 pb-5">
                    <img src={faq} className="img-fluid" alt="faq" />
                </div>
            </div>
        </section>
    );
};

export default Faq;