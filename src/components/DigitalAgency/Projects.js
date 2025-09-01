import React from 'react';
import { Link } from "gatsby";

// Project Images
import ProjectsImg1 from "../../assets/images/projects-img1.jpg";
import ProjectsImg2 from "../../assets/images/projects-img2.jpg";
import ProjectsImg3 from "../../assets/images/projects-img3.jpg";
import ProjectsImg4 from "../../assets/images/projects-img4.jpg";
import ProjectsImg5 from "../../assets/images/projects-img5.jpg";

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

// Swiper Core & Required Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';


// Register modules
SwiperCore.use([Autoplay, Pagination]);

const Projects = () => {
    const projectImages = [
        ProjectsImg1,
        ProjectsImg2,
        ProjectsImg3,
        ProjectsImg4,
        ProjectsImg5
    ];

    return (
        <div className="ml-projects-area pt-0 ptb-80">
            <div className="container">
                <div className="section-title st-fs-28">
                    <h2>Proud Projects That Make Us Stand Out</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className="container-fluid">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }
                    }}
                    className="ml-projects-slides"
                >
                    {projectImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="single-ml-projects-box">
                                <img src={img} alt={`Project ${index + 1}`} />
                                <div className="plus-icon">
                                    <Link to="/project-details">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Decorative Shapes */}
            <div className="shape1"><img src={Shape1} alt="shape" /></div>
            <div className="shape2 rotateme"><img src={Shape2} alt="shape" /></div>
            <div className="shape3"><img src={Shape3} alt="shape" /></div>
            <div className="shape4"><img src={Shape4} alt="shape" /></div>
            <div className="shape7"><img src={Shape4} alt="shape" /></div>
            <div className="shape8 rotateme"><img src={Shape2} alt="shape" /></div>
        </div>
    );
};

export default Projects;
