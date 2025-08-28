import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

import Logo from '../../assets/images/ocepLogo.png'
import MapImg from '../../assets/images/map.png'
import Shape1 from '../../assets/images/shape1.png'
import Shape2 from '../../assets/images/shape2.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link to="/it-startup">
                                    <img src={Logo} alt="logo" style={{ width: '100px', height: 'auto' }} />
                                </Link>
                            </div>
                            <p>Oceans Engineering & Projects is a 100% black-owned company delivering high-quality water jetting, plant hire, and labour services across the mining and industrial sectors — with a focus on safety, integrity, and on-time project execution.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link to="/aboutUs">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-1">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/features">
                                        Features
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/pricing">
                                        Our Pricing
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/blog-1">
                                        Latest News
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link to="/faq">
                                        FAQ's
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term-condition">
                                        Terms & Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/team">
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    02 Kadoma Industrial Park <br /> Steelpoort 1133 Limpopo
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <Link to="mailto:info@ocep.co.za">info@ocep.co.za</Link>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <Link to="tel:27130650452">+27 13 065 0452</Link>
                                </li>
                            </ul>

                            <ul className="social-links">
                                <li>
                                    <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer"><Icon.Facebook /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="twitter" target="_blank" rel="noreferrer"><Icon.Twitter /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noreferrer"><Icon.Instagram /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="linkedin" target="_blank" rel="noreferrer"><Icon.Linkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} OCEP. All rights reserved by <a href="https://morubetsi.co.za/" target="_blank">Morubetsi</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={MapImg} className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 