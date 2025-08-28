import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import FeedbackStyleFour from "../components/Common/FeedbackStyleFour"
import Partner from "../components/MachineLearning/Partner"

import AboutImg from "../assets/images/about.jpg"

const About2 = () => (
  <Layout>
    <SEO title="About Us Page 2" />

    <Navbar />

    <PageBanner pageTitle="About Us" />

    <div className="about-area ptb-80">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="ml-about-img">
              <img
                src={AboutImg}
                alt="image"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="ml-about-content">
              <span className="sub-title">About Us</span>
              <h2>Imposible is Nothing Delivering services with passion </h2>
              <div className="bar"></div>

              <p>
                Oceans Engineering is a 100% Black-owned company proudly
                operating in the Burgersfort and Steelpoort regions. Our
                management team brings a strong blend of technical and financial
                expertise, holding degrees in Engineering and Accounting, which
                positions us to deliver reliable and well-rounded solutions to
                our clients.
              </p>

              <p>
                We are an enthusiastic and driven company, committed to
                excellence in every aspect of our work. Oceans Engineering
                offers comprehensive and high-quality services tailored to meet
                the specific needs of our clients, particularly within the
                mining and industrial sectors.
              </p>
              <p>
                Our operations team is made up of trade-qualified artisans who
                are trained and certified for the tasks they undertake. We
                ensure all team members are competent in working at heights and
                are medically fit to perform their duties. In addition, we
                strictly adhere to client-specific mining and safety
                regulations, maintaining the highest standards of compliance and
                workplace safety.
              </p>
              <p>
                At Oceans Engineering, we believe in building strong,
                professional partnerships through dependable service and
                consistent results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about-inner-area">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our History</h3>
                <p>
                  Our vision is to become a leading engineering service provider
                  in South Africa, known for our excellence, innovation, and
                  integrity. We strive to set new benchmarks in the industry by
                  maintaining strong client relationships, upholding the highest
                  safety standards, and investing in our people. Through our
                  growth, we aim to make a lasting impact on both the
                  engineering sector and the communities we serve.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to deliver high-quality, safe, and reliable
                  engineering services that meet and exceed our clients’
                  expectations. We are committed to creating sustainable
                  solutions through skilled workmanship, continuous training,
                  and a strong focus on safety and compliance. We aim to uplift
                  local communities by creating job opportunities and promoting
                  skills development within the regions we operate in.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Who We Are</h3>
                <p>
                  Oceans Engineering is a 100% Black-owned company based in the
                  Burgersfort and Steelpoort regions. With a management team
                  holding degrees in Engineering and Accounting, we offer both
                  technical expertise and sound business acumen. Our team is
                  made up of skilled and trade-qualified artisans who are
                  trained for specialized tasks and certified to work under
                  strict safety and compliance standards. We take pride in being
                  a dependable service provider that values quality, integrity,
                  and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <Team /> */}

    {/* <FeedbackStyleFour /> */}

    {/* <FunFactsArea /> */}

    <div className="pb-80">
            <Partner />
        </div>

    <Footer />
  </Layout>
)

export default About2
