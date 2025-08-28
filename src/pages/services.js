import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const Services1 = () => (
  <Layout>
    <SEO title="Services 1" />

    <Navbar />

    <PageBanner pageTitle="Our Services" />

    <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <div className="bar"></div>
          <p>
            Oceans Engineering delivers a range of professional, safety-driven services tailored to the needs of the mining and industrial sectors.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.Settings />
              </div>
              <h3>
                <Link to="#">Plant Commissioning</Link>
              </h3>
              <p>
                We specialize in mechanical, electrical, and instrumentation
                commissioning to ensure your plant is fully operational and
                compliant.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.Tool />
              </div>
              <h3>
                <Link to="#">
                  Plant Maintenance During Shutdowns
                </Link>
              </h3>
              <p>
                Our team provides fast, efficient maintenance during planned
                shutdowns, minimizing downtime and ensuring operational safety.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.User />
              </div>
              <h3>
                <Link to="#">
                  Labour Hire of Qualified Artisans
                </Link>
              </h3>
              <p>
                We supply skilled artisans including fitters, welders, and
                electricians for short or long-term project support.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-c679e3">
                <Icon.Droplet />
              </div>
              <h3>
                <Link to="#">Underground De-Watering</Link>
              </h3>
              <p>
                We install and maintain de-watering systems to manage
                underground water safely and effectively during mining
                operations.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-c679e3">
                <Icon.Hexagon />
              </div>
              <h3>
                <Link to="#">
                  Structural Installations & Steel Works
                </Link>
              </h3>
              <p>
                From design to installation, we handle steel structures, piping
                systems, and mechanical frameworks with precision and safety.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-c679e3">
                <Icon.RefreshCw />
              </div>
              <h3>
                <Link to="#">
                  Pump Refurbishment (Onsite & Offsite)
                </Link>
              </h3>
              <p>
                Our team refurbishes pumps both on-site and off-site, restoring
                performance and extending equipment lifespan.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-eb6b3d">
                <Icon.Droplet />
              </div>
              <h3>
                <Link to="#">Water Reservoir Cleaningy</Link>
              </h3>
              <p>
              We provide professional cleaning of water reservoirs and storage tanks to ensure safe, hygienic, and uninterrupted water supply for industrial operations.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-eb6b3d">
                <Icon.Activity />
              </div>
              <h3>
                <Link to="#">
                  Project Execution & Site Management
                </Link>
              </h3>
              <p>
                We manage full project lifecycles from planning to execution,
                ensuring compliance, safety, and timely delivery.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box">
              <div className="icon bg-eb6b3d">
                <Icon.Send />
              </div>
              <h3>
                <Link to="#">
                  Workforce Training & Skills Development
                </Link>
              </h3>
              <p>
                We are preparing to offer accredited artisan training programs.
                Stay tuned — full accreditation coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export default Services1
