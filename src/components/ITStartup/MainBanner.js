import React from 'react';
import { Link } from "gatsby";

// Banner Images
// import Man from "../../assets/images/banner-image/man.png";
// import Code from "../../assets/images/banner-image/code.png";
// import Carpet from "../../assets/images/banner-image/carpet.png";
// import Bin from "../../assets/images/banner-image/bin.png";
// import Book from "../../assets/images/banner-image/book.png";
// import Dekstop from "../../assets/images/banner-image/dekstop.png";
// import Dot from "../../assets/images/banner-image/dot.png";
// import FlowerTopBig from "../../assets/images/banner-image/flower-top-big.png";
// import FlowerTop from "../../assets/images/banner-image/flower-top.png";
// import Keyboard from "../../assets/images/banner-image/keyboard.png";
// import Pen from "../../assets/images/banner-image/pen.png";
// import Table from "../../assets/images/banner-image/table.png";
// import TeaCup from "../../assets/images/banner-image/tea-cup.png";
// import HeadPhone from "../../assets/images/banner-image/headphone.png";
import MainPic from "../../assets/images/banner-image/BannerP.jpg";

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";
import Shape5 from "../../assets/images/shape5.png";

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            
                            {/* Text Content */}
                            <div className="col-lg-5">
                                <div className="hero-content">
                                    <h1>Safety-Driven Engineering for Mining Success, Delivered with Passion</h1>
                                    <p>
                                        Oceans Engineering is a 100% Black-owned company serving the Burgersfort and Steelpoort regions. 
                                        Our skilled team delivers compliant, safety-focused engineering services—driven by excellence, professionalism, and industry expertise.
                                    </p>

                                    <Link to="/contact" className="btn btn-primary">
                                        Get Started
                                    </Link>
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="col-lg-6 offset-lg-1">
                                <div >
                                    <img 
                                        src={MainPic} 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                        alt="main-pic"
                                        style={{ borderRadius: '15px' }} 
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Elements */}
            <div className="shape1">
                <img src={Shape1} alt="shape1" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape2" />
            </div>
            <div className="shape3">
                <img src={Shape3} alt="shape3" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape4" />
            </div>
            <div className="shape5">
                <img src={Shape5} alt="shape5" />
            </div>
            <div className="shape6 rotateme">
                <img src={Shape4} alt="shape6" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape7" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape8" />
            </div>
        </div>
    );
};

export default MainBanner;
