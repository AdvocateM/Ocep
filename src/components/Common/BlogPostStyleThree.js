import React from 'react';
import { Link } from "gatsby";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import BlogImg1 from '../../assets/images/blog-image/blog1.jpg';
import BlogImg2 from '../../assets/images/blog-image/blog2.jpg';
import BlogImg3 from '../../assets/images/blog-image/blog3.jpg';

const blogPosts = [
    {
        image: BlogImg1,
        date: "20 February 2020",
        title: "The security risks of changing package owners",
    },
    {
        image: BlogImg2,
        date: "21 February 2020",
        title: "Tips to Protecting Your Business and Family",
    },
    {
        image: BlogImg3,
        date: "22 February 2020",
        title: "Protect Your Workplace from Cyber Attacks",
    },
    {
        image: BlogImg3,
        date: "22 February 2020",
        title: "Four New WordPress.com Color Schemes",
    },
];

const BlogPostStyleThree = () => {
    return (
        <div className="blog-area ptb-80">
            <div className="container">
                <div className="section-title text-left">
                    <h2>Our Recent <span>News</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Swiper
                    className="blog-slides"
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                    {blogPosts.map((post, index) => (
                        <SwiperSlide key={index}>
                            <div className="single-blog-item">
                                <div className="post-image">
                                    <Link to="/blog-details">
                                        <img src={post.image} alt="Blog post" />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>By <Link to="/author">Admin</Link></li>
                                        <li>{post.date}</li>
                                    </ul>
                                    <h3>
                                        <Link to="/blog-details">
                                            {post.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BlogPostStyleThree;
