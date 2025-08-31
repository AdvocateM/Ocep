import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import SwiperCore from 'swiper';
import { Autoplay, FreeMode } from 'swiper/modules';

import APPartner1 from "../../assets/images/agency-portfolio-partner-image/ap-partner1.png";
import APPartner2 from "../../assets/images/agency-portfolio-partner-image/ap-partner2.png";
import APPartner3 from "../../assets/images/agency-portfolio-partner-image/ap-partner3.png";
import APPartner4 from "../../assets/images/agency-portfolio-partner-image/ap-partner4.png";
import APPartner5 from "../../assets/images/agency-portfolio-partner-image/ap-partner5.png";
import APPartner6 from "../../assets/images/agency-portfolio-partner-image/ap-partner6.png";

SwiperCore.use([Autoplay, FreeMode]);

const Partner = () => {
    return (
        <div className="agency-portfolio-partner-area ptb-80">
            <div className="container">
                <Swiper
                    className="agency-portfolio-partner-slides"
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {[APPartner1, APPartner2, APPartner3, APPartner4, APPartner5, APPartner6].map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="single-agency-portfolio-partner">
                                <a
                                    href="https://themeforest.net/user/envytheme/portfolio"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={img} alt={`Partner ${idx + 1}`} />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Partner;
