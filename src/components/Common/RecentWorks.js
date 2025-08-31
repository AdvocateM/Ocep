import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Work Images
import WorksImage1 from '../../assets/images/works-image/works-image1.jpg';
import WorksImage2 from '../../assets/images/works-image/works-image2.jpg';
import WorksImage3 from '../../assets/images/works-image/works-image3.jpg';
import WorksImage4 from '../../assets/images/works-image/works-image4.jpg';
import WorksImage5 from '../../assets/images/works-image/works-image5.jpg';

// Shape Images
import Shape2 from '../../assets/images/shape2.svg';
import Shape4 from '../../assets/images/shape4.svg';

const RecentWorks = () => {
    return (
        <div className="works-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Our Recent Works</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={30}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1500: { slidesPerView: 4 },
                }}
                className="works-slides"
            >
                {[ 
                    {
                        image: WorksImage1,
                        title: 'Incredible infrastructure',
                    },
                    {
                        image: WorksImage2,
                        title: 'Email Notifications',
                    },
                    {
                        image: WorksImage3,
                        title: 'Best Analytics Audits',
                    },
                    {
                        image: WorksImage4,
                        title: 'Simple Dashboard',
                    },
                    {
                        image: WorksImage5,
                        title: 'Information Retrieval',
                    }
                ].map((work, index) => (
                    <SwiperSlide key={index}>
                        <div className="single-works">
                            <img src={work.image} alt={`work-${index + 1}`} />

                            <Link to="/project-details" className="icon">
                                <Icon.Settings />
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link to="/project-details">{work.title}</Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

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
    );
};

export default RecentWorks;
