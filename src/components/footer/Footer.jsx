import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-waves">
                <video id="footerVideo" preload="metadata" class="highlight__video" autoPlay muted loop playsinline>
                    <source src="https://www.avenga.com/wp-content/themes/custom-theme/images/mp4-footer-wave-decoration.mp4" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2" />
                    <source src="https://www.avenga.com/wp-content/themes/custom-theme/images/webm-footer-wave-decoration.webm" type="video/webm" codecs="vp8" />
                </video>
            </div>
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>You can mail us:<a href="mailto: forthriftyofficial@gmail.com" id="mail"> @forthriftyofficial@gmail.com</a></li>
                            <li><a href="#">Book a Session</a></li>

                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="mailto: forthriftyofficial@gmail.com" class="snip1472">
                                <i class="fas fa-envelope-square"></i>
                            </a>
                            <a href='https://www.youtube.com/watch?v=_j3FQf5yqu8'>
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/thrifty.ai/">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/thrifty-official/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>

                        </div>
                    </div>
                </div>
                <div class="footer-col">
                    <div class="arrow" >
                        <span><a href="  "> </a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
