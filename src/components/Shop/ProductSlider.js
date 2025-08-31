import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import ShopImage1 from "../../assets/images/shop-image/shop-image1.jpg";
import ShopImage2 from "../../assets/images/shop-image/shop-image2.jpg";
import ShopImage3 from "../../assets/images/shop-image/shop-image3.jpg";
import ShopImage4 from "../../assets/images/shop-image/shop-image4.jpg";
import ShopImage5 from "../../assets/images/shop-image/shop-image5.jpg";

SwiperCore.use([Navigation, Autoplay]);

const ProductSlider = () => {
    const images = [ShopImage1, ShopImage2, ShopImage3, ShopImage4, ShopImage5];

    return (
        <Swiper
            className="products-details-image products-details-image-slides"
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            slidesPerView={1}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="single-image-box">
                        <img src={img} alt={`Product ${index + 1}`} />
                    </div>
                </SwiperSlide>
            ))}

            <div className="swiper-button-prev">
                <i className="bx bx-chevron-left"></i>
            </div>
            <div className="swiper-button-next">
                <i className="bx bx-chevron-right"></i>
            </div>
        </Swiper>
    );
};

export default ProductSlider;
