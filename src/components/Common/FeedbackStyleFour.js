import React from 'react';
import * as Icon from 'react-feather';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Client Images
import Client1 from '../../assets/images/client-image/client1.jpg';
import Client2 from '../../assets/images/client-image/client2.jpg';
import Client3 from '../../assets/images/client-image/client3.jpg';

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

const FeedbackStyleFour = () => {
    return (
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Our Clients Feedback</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    speed={1000}
                    loop={false}
                    slidesPerView={1}
                    className="ml-feedback-slides"
                >
                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={Client1} alt="image" />
                                <h3>Sarah Taylor</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={Client2} alt="image" />
                                <h3>Steven Smith</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={Client3} alt="image" />
                                <h3>James Eva</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape3">
                <img src={Shape3} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </div>
    );
};

export default FeedbackStyleFour;