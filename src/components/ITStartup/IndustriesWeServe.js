import React from 'react';
import { Link } from "gatsby";

import Vector from "../../assets/images/bigdata-analytics/vector.png";

const IndustriesWeServe = () => {
    return (
        <div className="industries-serve-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Industries We Serve</h2>
					<div className="bar"></div>
                    <p>Oceans Engineering provides specialized technical services to a wide range of sectors that demand safety, precision, and efficiency. Our qualified teams support high-performance environments across South Africa.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-buildings'></i>
                            </div>
                            Mining & Minerals Processing
                            <Link to="/service-details" className="link-btn"></Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-building-house'></i>
                            </div>
                            Metals & Smelting
                            <Link to="/service-details" className="link-btn"></Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-car'></i>
                            </div>
                            Power & Energy
                            <Link to="/service-details" className="link-btn"></Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-credit-card'></i>
                            </div>
                            Water Treatment & Pumping
                            <Link to="/service-details" className="link-btn"></Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-building'></i>
                            </div>
                            Construction & Infrastructure
                            <Link to="/service-details" className="link-btn"></Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bxs-plane-alt'></i>
                            </div>
                            Manufacturing & Industrial Plants
                            <Link to="/service-details" className="link-btn"></Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-group'></i>
                            </div>
                            Engineering Consulting Firms
                            <Link to="/service-details" className="link-btn"></Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-bitcoin'></i>
                            </div>
                            Municipal & Utility Services
                            <Link to="/service-details" className="link-btn"></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="analytics-shape2">
                <img src={Vector} alt="image" />
            </div>
        </div>
    )
}

export default IndustriesWeServe;  