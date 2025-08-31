import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import PartnerImg1 from '../../assets/images/partner-img/partner-1.png';
import PartnerHoverImg1 from '../../assets/images/partner-img/partner-hover1.png';
import PartnerImg2 from '../../assets/images/partner-img/partner-2.png';
import PartnerHoverImg2 from '../../assets/images/partner-img/partner-hover2.png';
import PartnerImg3 from '../../assets/images/partner-img/partner-3.png';
import PartnerHoverImg3 from '../../assets/images/partner-img/partner-hover3.png';
import PartnerImg4 from '../../assets/images/partner-img/partner-10.png';
import PartnerHoverImg4 from '../../assets/images/partner-img/partner-hover10.png';
import PartnerImg5 from '../../assets/images/partner-img/partner-5.png';
import PartnerHoverImg5 from '../../assets/images/partner-img/partner-hover5.png';
import PartnerImg6 from '../../assets/images/partner-img/partner-6.png';
import PartnerHoverImg6 from '../../assets/images/partner-img/partner-hover6.png';
import PartnerImg7 from '../../assets/images/partner-img/partner-7.png';
import PartnerHoverImg7 from '../../assets/images/partner-img/partner-hover7.png';

const partners = [
  [PartnerImg1, PartnerHoverImg1],
  [PartnerImg2, PartnerHoverImg2],
  [PartnerImg3, PartnerHoverImg3],
  [PartnerImg4, PartnerHoverImg4],
  [PartnerImg5, PartnerHoverImg5],
  [PartnerImg6, PartnerHoverImg6],
  [PartnerImg7, PartnerHoverImg7],
];

const Partner = () => {
  return (
    <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
      <div className="container">
        <Swiper
          className="partner-slides"
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {partners.map(([img, hover], index) => (
            <SwiperSlide key={index}>
              <div className="single-ml-partner">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={img} alt={`partner-${index}`} />
                  <img src={hover} alt={`partner-hover-${index}`} />
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
