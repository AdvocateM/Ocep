import React from 'react';

import PartnerImg1 from '../../assets/images/partner-img/afarak@2x.png';
import PartnerImg2 from '../../assets/images/partner-img/Bokoni_Platinum Mines_Logo_White.png';
import PartnerImg3 from '../../assets/images/partner-img/samancor.png';
import PartnerImg4 from '../../assets/images/partner-img/bcm-logo-ws.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const partners = [
  {
    href: 'https://afarak.com/business/the-mecklenburg-mine/?lang=fi',
    img: PartnerImg1,
    alt: 'Afarak',
  },
  {
    href: 'https://www.bokoniplatinum.co.za/',
    img: PartnerImg2,
    alt: 'Bokoni Platinum Mines',
  },
  {
    href: 'https://samancorcr.com/',
    img: PartnerImg3,
    alt: 'Samancor',
  },
  {
    href: 'https://blackcr.com/',
    img: PartnerImg4,
    alt: 'Black CR',
  },
];

const Partner = () => {
  return (
    <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 4 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          className="partner-slides"
        >
          {partners.map(({ href, img, alt }, index) => (
            <SwiperSlide key={index}>
              <div className="single-ml-partner">
                <a href={href} target="_blank" rel="noreferrer" className="partner-link">
                  <img src={img} alt={alt} style={{ width: '20px', height: 'auto' }} />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Add this style block or add to your CSS file */}
      <style>{`
        .single-ml-partner {
          text-align: center;
          cursor: pointer;
        }
        .partner-link img {
          transition: filter 0.3s ease;
        }
        .partner-link:hover img {
          filter: brightness(0.8);
        }
      `}</style>
    </div>
  );
};

export default Partner;
