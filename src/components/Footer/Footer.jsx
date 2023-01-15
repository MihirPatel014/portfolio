import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Mihir</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">portfolio</a>
                </li>
            </ul>
            <div className="footer__sociall">
            <a href="https://www.instagram.com/mihir_2974/" 
            className="homee__social-icon" 
            target="_blank" rel="noreferrer" >
            <i className="uil uil-instagram"></i>
            </a>

            <a href="https://github.com/MihirPatel014"
            className="homee__social-icon"  >
            <i className="uil uil-github"></i>
            </a>

            <a href="https://twitter.com/i/flow/login" 
            className="homee__social-icon" >
            <i className="uil uil-twitter-alt"></i>
            </a>

            <a href="https://www.linkedin.com/in/mihir-patel-49053220a/" 
            className="homee__social-icon" >
            <i className="uil uil-linkedin"></i>
            </a>


            </div>
        
            <span className="footer__copy">&#169; Mihir, All rigits are reserved</span>
        </div>
    </footer>
    </>
  )
}

export default Footer