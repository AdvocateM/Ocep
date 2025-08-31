import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Partner Images
import PartnerImg1 from '../../assets/images/partner-img/afarak@2x.png';
import PartnerHoverImg1 from '../../assets/images/partner-img/afarak@2x.png';
import PartnerImg2 from '../../assets/images/partner-img/Bokoni_Platinum Mines_Logo_White.png';
import PartnerHoverImg2 from '../../assets/images/partner-img/Bokoni_Platinum Mines_Logo_White.png';
import PartnerImg3 from '../../assets/images/partner-img/samancor.png';
import PartnerHoverImg3 from '../../assets/images/partner-img/samancor.png';
import PartnerImg4 from '../../assets/images/partner-img/bcm-logo-ws.png';
import PartnerHoverImg4 from '../../assets/images/partner-img/bcm-logo-ws.png';
import PartnerImg5 from '../../assets/images/partner-img/partner-5.png';
import PartnerHoverImg5 from '../../assets/images/partner-img/partner-hover5.png';
import PartnerImg6 from '../../assets/images/partner-img/partner-6.png';
import PartnerHoverImg6 from '../../assets/images/partner-img/partner-hover6.png';
import PartnerImg7 from '../../assets/images/partner-img/partner-7.png';
import PartnerHoverImg7 from '../../assets/images/partner-img/partner-hover7.png';

const PartnerStyleTwo = () => {
    return (
        <div className="repair-partner-area bg-f9fafb">
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    speed={1000}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 6,
                        }
                    }}
                    className="repair-partner-slides"
                >
                    {[ 
                        [PartnerImg1, PartnerHoverImg1],
                        [PartnerImg2, PartnerHoverImg2],
                        [PartnerImg3, PartnerHoverImg3],
                        [PartnerImg4, PartnerHoverImg4],
                        [PartnerImg5, PartnerHoverImg5],
                        [PartnerImg6, PartnerHoverImg6],
                        [PartnerImg7, PartnerHoverImg7]
                    ].map(([img, hoverImg], index) => (
                        <SwiperSlide key={index}>
                            <div className="single-repair-partner">
                                <a href="https://themeforest.net/user/envytheme/portfolio" target="_blank" rel="noreferrer">
                                    <img src={img} alt={`partner-${index + 1}`} />
                                    <img src={hoverImg} alt={`partner-hover-${index + 1}`} />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PartnerStyleTwo;
