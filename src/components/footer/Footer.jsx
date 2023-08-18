import React from 'react'
import './footer.css'
import hashnde from "../../assets/brand-icon.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Abhishek</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
            
                <div className="footer__social">
                    <a 
                        href="https://www.linkedin.com/in/a-bhishekyadav" className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a 
                        href="https://twitter.com/assert_eth?t=boj8yGfAdUV1m8BwK8_5hA&s=08" className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-twitter"></i>
                    </a>

                    <a 
                        href="https://github.com/decentralized-86" className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Abhishek Yadav.</span>
            </div>
        </footer>
    )
}

export default Footer
