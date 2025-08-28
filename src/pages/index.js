import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/ITStartup/MainBanner";
import Features from "../components/ITStartup/Features";
import ServicesArea from "../components/ITStartup/ServicesArea";
import OurFeatures from "../components/ITStartup/OurFeatures";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
// import FunFactsArea from "../components/Common/FunFactsArea";
import Feedback from "../components/ITStartup/Feedback";
import WhyWeAreBest from "../components/ITStartup/WhyWeAreBest";
import IndustriesWeServe from '../components/ITStartup/IndustriesWeServe';
import Footer from "../components/_App/Footer";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Navbar />
        <MainBanner />
        <Features />
        <ServicesArea />
        <OurFeatures />
        <TeamStyleTwo />
        {/* <FunFactsArea /> */}
        <IndustriesWeServe />
        <Feedback />
        <WhyWeAreBest />
        <Footer />
    </Layout>
)

export default IndexPage;
