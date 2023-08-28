import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./footer.css";


const Footer = () => {

    return (

        <footer className="footer bg-dark text-white py-6" id="footer">
            <div className="container">
                <div className="footer-content text-center">
                    <div className="footer-item-group grid">
                        <div className="footer-item">
                            <h3 className="footer-item-title text-upper"> portfólio </h3>
                            <ul className="footer-item-links">
                                <li> <a href="#"> Web Designer </a></li>
                                <li> <a href="#"> Branding & Identify </a></li>
                                <li> <a href="#"> Mobile Designer </a></li>
                                <li> <a href="#"> Print </a></li>
                                <li> <a href="#"> User Interface </a></li>
                            </ul>
                        </div>

                        <div className="footer-item">
                            <h3 className="footer-item-title text-upper"> Sobre </h3>
                            <ul className="footer-item-links">
                                <li> <a href="#"> Sobre a Empresa </a></li>
                                <li> <a href="#"> História </a></li>
                                <li> <a href="#"> Mobile Designer </a></li>
                                <li> <a href="#"> Vision </a></li>
                              
                            </ul>
                        </div>

                        <div className="footer-item">
                            <h3 className="footer-item-title text-upper"> Galeria </h3>
                            <ul className="footer-item-links">
                                <li> <a href="#"> Flicker </a></li>
                                <li> <a href="#"> PiCasa </a></li>
                                <li> <a href="#"> StockPhoto </a></li>
                                <li> <a href="#"> PhotoDune </a></li>
                                
                            </ul>
                        </div>

                        <div className="footer-item">
                            <h3 className="footer-item-title text-upper"> Contato </h3>
                            <ul className="footer-item-links">
                                <li> <a href="#"> Basic Info </a></li>
                                <li> <a href="#"> Map </a></li>
                                <li> <a href="#"> Contact Form </a></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="footer-social-icons flex flex-center">
                        <a href="https://facebook.com" 
                            className="bg-red flex flex-center"> 
                            <FaFacebookF />
                        </a>

                        <a href="https://facebook.com" 
                            className="bg-red flex flex-center"> 
                            <FaFacebookF />
                        </a>

                        <a href="https://facebook.com" 
                            className="bg-red flex flex-center"> 
                            <FaFacebookF />
                        </a>

                        <a href="https://facebook.com" 
                            className="bg-red flex flex-center"> 
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            
            </div>
        
        </footer>
    );
}

export default Footer;