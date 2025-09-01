import React, { useRef, useEffect, useState } from 'react';
import { Link } from "gatsby";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const MainBanner = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Avoid SSR issues
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null; // Skip rendering on server

  return (
    <div className="main-banner-wrapper position-relative">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        loop={true}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="agency-portfolio-home-slides"
      >
        {/* Slide 1 */}
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

        {/* Slide 2 */}
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

        {/* Slide 3 */}
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
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev" ref={prevRef}>
        <i className="bx bx-chevron-left"></i>
      </div>
      <div className="swiper-button-next" ref={nextRef}>
        <i className="bx bx-chevron-right"></i>
      </div>
    </div>
  );
};

export default MainBanner;
