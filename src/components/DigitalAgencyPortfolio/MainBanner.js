import React from 'react';
import { Link } from "gatsby";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const MainBanner = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            effect="fade"
            speed={1000}
            className="agency-portfolio-home-slides"
        >
            <SwiperSlide>
                <div className="agency-portfolio-main-banner portfolio-banner-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="portfolio-banner-content">
                                    <span className="sub-title">We are Creative</span>
                                    <h1>Digital Agency</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <Link to="/contact" className="btn btn-secondary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="agency-portfolio-main-banner portfolio-banner-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="portfolio-banner-content">
                                    <span className="sub-title">We are Digital</span>
                                    <h1>UX/UI Design</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <Link to="/contact" className="btn btn-secondary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="agency-portfolio-main-banner portfolio-banner-bg3">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="portfolio-banner-content">
                                    <span className="sub-title">We are Agency</span>
                                    <h1>Digital Marketing</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <Link to="/contact" className="btn btn-secondary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* Navigation buttons */}
            <div className="swiper-button-prev"><i className='bx bx-chevron-left'></i></div>
            <div className="swiper-button-next"><i className='bx bx-chevron-right'></i></div>
        </Swiper>
    )
}

export default MainBanner;
