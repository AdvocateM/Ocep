import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

import Icon1 from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";

const WhyWeAreBest = () => {
    return (
        <div className="iot-why-choose-us pt-80">
            <div className="container">
                <div className="section-title">
                    <h2>Why We Are Best From Others</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-iot-box">
                            <div className="icon">
                                <img src={Icon1} alt="image" />
                            </div>
                            <h3>Delivering Services with Passion</h3>
                            <p>At Oceans engineering, we go beyond the ordinary to provide quality-driven, cost-effective services tailored to the needs of mining, industrial, and private clients.</p>
                            <Link to="/service-details">
                                <Icon.ArrowRight />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-iot-box">
                            <div className="icon">
                                <img src={Icon2} alt="image" />
                            </div>
                            <h3>Trust & Professionalism</h3>
                            <p>We provide qualified artisans (fitters and boilermakers) and certified machine operators (FEL/TLB) for reliable on-site operations, shutdowns, and ongoing maintenance..</p>
                            <Link to="/service-details">
                                <Icon.ArrowRight />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-iot-box">
                            <div className="icon">
                                <img src={Icon3} alt="image" />
                            </div>
                            <h3>Environmental Commitment</h3>
                            <p>We are deeply committed to preserving the environment. We practice responsible waste management and promote sustainability through reduce, reuse, and recycle policies.</p>
                            <Link to="/service-details">
                                <Icon.ArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyWeAreBest;
