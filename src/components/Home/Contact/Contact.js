import React from 'react';
import './Contact.css'
import contactLogo from '../../../images/contact-us.png'

const Contact = () => {
    return (
        <section className="container px-3 py-5 contact-container my-5" id="contact-section">
            <img src={contactLogo} className="contactLogo m-auto" alt="contactLogo" />
            <h4 className="text-center"><span className="text-colorful">Contact</span> Us</h4>
            <h2 className="text-center py-3">For More Queries Please Contact Us</h2>
            <form className="w-75 m-auto">
                <div class="mb-4">
                    <input type="name" class="form-control" placeholder="Enter Your Name" required/>
                </div>
                <div class="mb-4">
                    <input type="email" class="form-control" placeholder="Enter Your Email" required/>
                </div>
                <input type="submit" class="btn btn-info" value="Contact Us" />
            </form>
        </section>
    );
};

export default Contact;