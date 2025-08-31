import React from 'react';
import * as Icon from 'react-feather';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Team Images
import Team1 from '../../assets/images/team-image/team1.jpg';
import Team2 from '../../assets/images/team-image/team2.jpg';
import Team3 from '../../assets/images/team-image/team3.jpg';
import Team4 from '../../assets/images/team-image/team4.jpg';
import Team5 from '../../assets/images/team-image/team5.jpg';

const teamMembers = [
    {
        img: Team1,
        name: 'Josh Buttler',
        title: 'CEO & Founder',
    },
    {
        img: Team2,
        name: 'Alex Maxwel',
        title: 'Marketing Manager',
    },
    {
        img: Team3,
        name: 'Janny Cotller',
        title: 'Web Developer',
    },
    {
        img: Team4,
        name: 'Jason Statham',
        title: 'UX/UI Designer',
    },
    {
        img: Team5,
        name: 'Corey Anderson',
        title: 'Project Manager',
    },
    // Repeat if necessary for demo
    {
        img: Team1,
        name: 'Josh Buttler',
        title: 'CEO & Founder',
    },
    {
        img: Team2,
        name: 'Alex Maxwel',
        title: 'Marketing Manager',
    },
];

const Team = () => {
    return (
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Awesome Team</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className="container-fluid">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={false}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        900: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                        1500: { slidesPerView: 5 },
                    }}
                    className="team-slider swiper-wrapper"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={member.img} alt={member.name} />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>{member.name}</h3>
                                        <span>{member.title}</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                <Icon.Facebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                                <Icon.Twitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                                <Icon.Linkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                                <Icon.Gitlab />
                                            </a>
                                        </li>
                                    </ul>

                                    <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Team;
