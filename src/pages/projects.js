import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import { Link } from "gatsby";

// Works Images
import WorksImage1 from "../assets/images/works-image/pipeline.jpg";
import WorksImage2 from "../assets/images/works-image/PlantM.jpg";
import WorksImage3 from "../assets/images/works-image/IndustialCleaning.jpg";
import WorksImage4 from "../assets/images/works-image/Conveyorstructures.jpg";
import WorksImage5 from "../assets/images/works-image/Tela.jpg";
import WorksImage6 from "../assets/images/works-image/pipe.jpg";
// import WorksImage7 from "../assets/images/works-image/works-image7.jpg";
// import WorksImage8 from "../assets/images/works-image/works-image8.jpg";
// import WorksImage9 from "../assets/images/works-image/works-image9.jpg";

// Shape Images
import Shape2 from "../assets/images/shape2.svg";
import Shape4 from "../assets/images/shape4.svg";

const Projects1 = () => (
    <Layout>
        <SEO title="Projects" /> 

        <Navbar />

        <PageBanner pageTitle="Our Complited Projects" />

        <div className="works-area pt-80 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-works">
                            <img src={WorksImage1} alt="image" />

                            <Link to="#" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link to="#">
                                     Pipeline projects at Black
                                    </Link>
                                </h3>
                                <p>We finished building a pipeline from Black Chrome to Phuka Thaba. This shows our hard work and strong skills in engineering.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-works">
                            <img src={WorksImage2} alt="image" />

                            <Link to="#" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link to="#">
                                    Strong Conveyor Belt Work
                                    </Link>
                                </h3>
                                <p>We finished building and setting up a conveyor belt system at Black Chrome. It helps move materials easily and safely.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-works">
                            <img src={WorksImage3} alt="image" />

                            <Link to="#" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link to="#">
                                    Industrial Cleaning at Samancor TAS
                                    </Link>
                                </h3>
                                <p>We completed a full industrial cleaning project at Samancor TAS, ensuring equipment and facilities meet top safety and operational standards.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-works">
                            <img src={WorksImage4} alt="image" />

                            <Link to="#" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link to="#">
                                        Plant Commissioning Project
                                    </Link>
                                </h3>
                                <p>We successfully carried out the commissioning of a new plant, ensuring all systems were tested, operational, and ready for full production.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-works">
                            <img src={WorksImage5} alt="image" />

                            <Link to="#" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link to="#">
                                        Plant Hire Services
                                    </Link>
                                </h3>
                                <p>We provided reliable plant hire services, supplying a telelogger, TLB, screen, dump truck, and crusher to support critical on-site operations.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-works">
                            <img src={WorksImage6} alt="image" />

                            <Link to="#" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link to="#">
                                        Vendriling Structures
                                    </Link>
                                </h3>
                                <p>We designed and installed durable vendriling structures, ensuring safety and efficiency in challenging industrial environments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
        </div>

        <Footer />
    </Layout>
)

export default Projects1;