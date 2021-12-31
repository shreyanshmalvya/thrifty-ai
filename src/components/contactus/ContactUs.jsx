import React from 'react'
import './contactUs.css'

const ContactUs = () => {
    return (
        <div className="contactWrapper">
            <div className="contact-form">
                <div className="first-container">
                    <div className="info-container">
                        <div><img className="icon" />
                            <h3>Address</h3>
                            <p>Gujrat, India</p>
                        </div>
                        <div> <img className="icon" />
                            <h3>Lets Talk</h3>
                            <p>+91 800 1236879</p>
                        </div>
                        <div><img className="icon" />
                            <h3>General Support</h3>
                            <p>forthriftyofficial@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="second-container">
                    <h2>Book an Appointment</h2>
                    <form>
                        <div className="form-group">
                            <label for="name-input">Tell us your name*</label>
                            <input id="name-input" type="text" placeholder="First name" required />
                            <input type="text" placeholder="Last name" required />
                        </div>
                        <div className="form-group">
                            <label for="email-input">Enter your email*</label>
                            <input id="email-input" type="text" placeholder="Eg. example@email.com" required />
                        </div>
                        <div className="form-group">
                            <label for="phone-input">Enter phone number*</label>
                            <input id="phone-input" type="text" placeholder="Eg. +1 800 000000" required />
                        </div>
                        <div className="form-group">
                            <label for="message-textarea">Message</label>
                            <textarea id="message-textarea" placeholder="Write us a message"></textarea>
                        </div>
                        <button>Book Now!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs; 
