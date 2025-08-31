import React from 'react';
import * as Icon from 'react-feather';
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
import AgencyUser1 from '../../assets/images/agency-image/agency-user1.png';
import AgencyUser2 from '../../assets/images/agency-image/agency-user2.png';
import AgencyUser3 from '../../assets/images/agency-image/agency-user3.png';
import AgencyUser4 from '../../assets/images/agency-image/agency-user4.png';
import AgencyUser5 from '../../assets/images/agency-image/agency-user5.png';
import AgencyUser6 from '../../assets/images/agency-image/agency-user6.png';

const testimonials = [
    {
        image: Client1,
        name: 'Sarah Taylor',
        position: 'CEO at Envato',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!'
    },
    {
        image: Client2,
        name: 'Steven Smith',
        position: 'CEO at Envato',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!'
    },
    {
        image: Client3,
        name: 'James Eva',
        position: 'CEO at Envato',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!'
    }
];

const FeedbackStyleThree = () => {
    return (
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title st-fs-28">
                    <span className="sub-title">Testimonials</span>
                    <h2>Our Clients Feedback</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Swiper
                    className="ml-feedback-slides"
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    speed={1000}
                    effect="fade"
                    loop={false}
                    pagination={{ clickable: true }}
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="single-testimonials-item">
                                <p>{item.content}</p>
                                <div className="client-info">
                                    <img src={item.image} alt={item.name} />
                                    <div className="rating">
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <span>{item.position}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Shape Images */}
            <div className="user-shape1">
                <img src={AgencyUser1} alt="shape" />
            </div>
            <div className="user-shape2">
                <img src={AgencyUser2} alt="shape" />
            </div>
            <div className="user-shape3">
                <img src={AgencyUser3} alt="shape" />
            </div>
            <div className="user-shape4">
                <img src={AgencyUser4} alt="shape" />
            </div>
            <div className="user-shape5">
                <img src={AgencyUser5} alt="shape" />
            </div>
            <div className="user-shape6">
                <img src={AgencyUser6} alt="shape" />
            </div>
        </div>
    );
};

export default FeedbackStyleThree;
