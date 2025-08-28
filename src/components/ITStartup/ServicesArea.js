import React from "react";
import * as Icon from "react-feather";

// Images
import CercleShape from "../../assets/images/services-right-image/cercle-shape.png";
import ServiceRightMainPic from "../../assets/images/services-right-image/Steel-commissioning.jpg";
import Wifi from '../../assets/images/services-right-image/wifi.png';
import ServiceLeftMainPic from "../../assets/images/services-left-image/Cleaning.jpg";

const ServicesArea = () => {
  return (
    <>
      {/* Section 1: Engineering & Technical Services */}
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            {/* Content */}
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Engineering & Technical Services</h2>
                <div className="bar"></div>
                <p>
                  Oceans Engineering delivers a range of professional,
                  safety-driven services tailored to the needs of the mining and
                  industrial sectors.
                </p>
              </div>

              <div className="row">
                {/* Boxes */}
                {[
                  { icon: <Icon.Settings />, text: "Plant Commissioning" },
                  { icon: <Icon.Tool />, text: "Plant Maintenance During Shutdowns" },
                  { icon: <Icon.User />, text: "Labour Hire of Qualified Artisans" },
                  { icon: <Icon.Edit3 />, text: "Drawing & Design Services" },
                  { icon: <Icon.Droplet />, text: "Underground De-Watering" },
                  { icon: <Icon.Hexagon />, text: "Structural Installations & Steel Works" },
                  { icon: <Icon.RefreshCw />, text: "Pump Refurbishment (Onsite & Offsite)" },
                  { icon: <Icon.Activity />, text: "Project Execution & Site Management" },
                ].map((item, index) => (
                  <div className="col-lg-6 col-md-6" key={index}>
                    <div className="box">{item.icon} {item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-lg-6 col-md-12 services-right-image">
              <img
                src={ServiceRightMainPic}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="main-pic"
                style={{ borderRadius: "50px" }}
              />

              <img
                src={CercleShape}
                className="bg-image rotateme"
                alt="shape"
              />

              <img
                src={Wifi}
                className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                alt="wifi"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Services We've Rendered */}
      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">

            {/* Left Image Section (Fixed) */}
            <div className="col-lg-6 col-md-12 services-left-image">
              <img
                src={ServiceLeftMainPic}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="main-service-image"
                style={{ borderRadius: "50px" }}
              />

              <img
                src={CercleShape}
                className="bg-image rotateme"
                alt="circle-shape"
              />
            </div>

            {/* Right Text Content */}
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Services We’ve Rendered</h2>
                <div className="bar"></div>
                <p>
                  Oceans Engineering has successfully delivered critical
                  engineering and maintenance services to clients across the
                  mining and industrial sectors. Our team consistently meets
                  safety, quality, and operational standards on every project.
                </p>
              </div>

              <div className="row">
                {/* Render Service Boxes */}
                {[
                  "Plant Commissioning (Mechanical, Electrical & Instrumentation)",
                  "Plant Maintenance During Shutdowns",
                  "Labour Hire of Qualified Artisans",
                  "Underground De-Watering",
                  "Structural Installations & Steel Works",
                  "Pump Refurbishment (Onsite & Offsite)",
                  "Project Execution & Site Management",
                  "Workforce Training & Skills Development",
                ].map((text, index) => (
                  <div className="col-lg-6 col-md-6" key={index}>
                    <div className="box">
                      {React.createElement(Icon[Object.keys(Icon)[index % Object.keys(Icon).length]])} {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
