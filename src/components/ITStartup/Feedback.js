import React from 'react'; 

import Author1 from "../../assets/images/Xolile.jpg";
import Author2 from "../../assets/images/Masame.jpg";
import Author3 from "../../assets/images/Selomi.jpg";

const Feedback = () => {
    return (
        <div className="bigdata-feedback-area pt-80 pb-50">
            <div className="container">
                <div className="section-title">
                    <h2>What Users Saying</h2>
                    <div className="bar"></div>
                    <p>Here’s what some of our clients and partners say about working with Oceans engineering.</p>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-feedback-box">
                            <div className="feedback-desc">
                                <p>Oceans Engineering & Projects consistently delivers high-quality services during our furnace and PSP operations. Their team is reliable, safety-conscious, and always prepared.</p>
                            </div>

                            <div className="client-info">
                                <img src={Author1} alt="image" />
                                <h3>Xolile</h3>
                                <span>Process Specialist, Samancor</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-feedback-box">
                            <div className="feedback-desc">
                                <p>We’ve worked with Oceans Engineering & Projects on multiple shutdown and HP cleaning projects. Their team operates with professionalism and attention to detail.</p>
                            </div>

                            <div className="client-info">
                                <img src={Author2} alt="image" />
                                <h3>Masame</h3>
                                <span>Engineer, Samancor</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-feedback-box">
                            <div className="feedback-desc">
                                <p>Highly satisfied with the plant hire and vacuum truck services. Their staff is well-trained and committed to safe, efficient work on-site.</p>
                            </div>

                            <div className="client-info"> 
                                <img src={Author3} alt="image" />
                                <h3>Selomi Makubung</h3>
                                <span>Manager, Sebego Beneficiation Plant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;  