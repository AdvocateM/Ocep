import React from 'react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Client Images
import Client1 from '../../assets/images/client-image/client1.jpg';
import Client2 from '../../assets/images/client-image/client2.jpg';
import Client3 from '../../assets/images/client-image/client3.jpg';

const FeedbackStyleFive = () => {
    return (
        <div className="agency-portfolio-feedback-area ptb-80">
            <div className="container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 5000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    speed={1000}
                    loop={false}
                    slidesPerView={1}
                    className="agency-portfolio-feedback-slides"
                >
                    <SwiperSlide>
                        <div className="agency-portfolio-feedback-item">
                            <img src={Client1} alt="Client 1" />
                            <p>
                                Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien.
                                Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh
                                odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla.
                                Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget,
                                aliquam eros.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="agency-portfolio-feedback-item">
                            <img src={Client2} alt="Client 2" />
                            <p>
                                Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien.
                                Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh
                                odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla.
                                Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget,
                                aliquam eros.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="agency-portfolio-feedback-item">
                            <img src={Client3} alt="Client 3" />
                            <p>
                                Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien.
                                Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh
                                odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla.
                                Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget,
                                aliquam eros.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default FeedbackStyleFive;
