import React from 'react';
import { Link } from "gatsby";

// Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Optional but prevents CSS chunk warnings

// Project Images
import ProjectsImg1 from "../../assets/images/projects-img1.jpg";
import ProjectsImg2 from "../../assets/images/projects-img2.jpg";
import ProjectsImg3 from "../../assets/images/projects-img3.jpg";
import ProjectsImg4 from "../../assets/images/projects-img4.jpg";
import ProjectsImg5 from "../../assets/images/projects-img5.jpg";

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

// Image data array
const projects = [
  { img: ProjectsImg1, alt: 'Project 1' },
  { img: ProjectsImg2, alt: 'Project 2' },
  { img: ProjectsImg3, alt: 'Project 3' },
  { img: ProjectsImg4, alt: 'Project 4' },
  { img: ProjectsImg5, alt: 'Project 5' },
];

const Projects = () => {
  return (
    <div className="ml-projects-area pt-0 ptb-80">
      <div className="container">
        <div className="section-title st-fs-28">
          <h2>Proud Projects That Make Us Stand Out</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="ml-projects-slides"
        >
          {projects.map(({ img, alt }, index) => (
            <SwiperSlide key={index}>
              <div className="single-ml-projects-box">
                <img src={img} alt={alt} />
                <div className="plus-icon">
                  <Link to="/project-details">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
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

export default Projects;
