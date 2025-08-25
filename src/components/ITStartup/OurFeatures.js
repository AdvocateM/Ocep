import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

const OurFeatures = () => {
    return (
        <div className="features-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Our Features</h2>
                    <div className="bar"></div>
                    <p>At Oceans Engineering, we combine technical expertise, strict compliance, and a hands-on approach to deliver reliable, efficient, and safe engineering solutions for the mining and industrial sectors.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.HardDrive />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                Reliable On-Site Execution
                                </Link>
                            </h3>
                            <p>Our experienced teams deliver results directly on-site, handling everything from commissioning to shutdown maintenance with precision.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.User />
                            </div> 
                            <h3>
                                <Link to="/feature-details">
                                Certified and Qualified Workforce
                                </Link>
                            </h3>
                            <p>We deploy only medically fit, trade-certified artisans trained to meet the strictest safety and operational standards.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-c679e3">
                                <Icon.MessageCircle />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                Client-Centric Communication
                                </Link>
                            </h3>
                            <p>We keep stakeholders informed throughout every project phase, ensuring transparency, responsiveness, and accountability.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-c679e3">
                                <Icon.Edit3 />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                Custom Design & Documentation
                                </Link>
                            </h3>
                            <p>Our team offers accurate drawing and design services tailored to project-specific technical requirements and compliance needs.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-eb6b3d">
                                <Icon.BookOpen />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                Ongoing Skills Development
                                </Link>
                            </h3>
                            <p>We invest in internal training to continuously improve our team’s capabilities and adapt to evolving industry demands.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-eb6b3d">
                                <Icon.Clock />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                On-Time, On-Budget Delivery
                                </Link>
                            </h3>
                            <p>We pride ourselves on completing all projects within the agreed scope, timeline, and budget—without compromising quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures;  