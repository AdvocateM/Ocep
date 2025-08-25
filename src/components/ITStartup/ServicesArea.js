import React from "react"
import * as Icon from "react-feather"

//  Services Images
import BookSelf from "../../assets/images/services-right-image/book-self.png"
import Box from "../../assets/images/services-right-image/box.png"
import Chair from "../../assets/images/services-right-image/chair.png"
import Cloud from "../../assets/images/services-right-image/cloud.png"
import Cup from "../../assets/images/services-right-image/cup.png"
import FlowerTop from "../../assets/images/services-right-image/flower-top.png"
import HeadPhone from "../../assets/images/services-right-image/head-phone.png"
import Monitor from "../../assets/images/services-right-image/monitor.png"
import Mug from "../../assets/images/services-right-image/mug.png"
import Table from "../../assets/images/services-right-image/table.png"
import Tissue from "../../assets/images/services-right-image/tissue.png"
import WaterBottle from "../../assets/images/services-right-image/water-bottle.png"
import Wifi from "../../assets/images/services-right-image/wifi.png"
import CercleShape from "../../assets/images/services-right-image/cercle-shape.png"
import ServiceRightMainPic from "../../assets/images/services-right-image/Steel-commissioning.jpg"

// Design & Development Images
import BigMonitor from "../../assets/images/services-left-image/big-monitor.png"
import Creative from "../../assets/images/services-left-image/creative.png"
import Developer from "../../assets/images/services-left-image/developer.png"
import SmallMonitor from "../../assets/images/services-left-image/small-monitor.png"
import SmallTop from "../../assets/images/services-left-image/small-top.png"
import Target from "../../assets/images/services-left-image/target.png"
import ServiceLeftMainPic from "../../assets/images/services-left-image/service-left-main-pic.png"

const ServicesArea = () => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
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
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Settings /> Plant Commissioning
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Tool /> Plant Maintenance During Shutdowns
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.User /> Labour Hire of Qualified Artisans
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Edit3 /> Drawing & Design Services
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Droplet /> Underground De-Watering
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Hexagon /> Structural Installations & Steel Works
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.RefreshCw /> Pump Refurbishment (Onsite & Offsite)
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Activity /> Project Execution & Site Management
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 services-right-image">
              <img
                src={BookSelf}
                className="animate__animated animate__fadeInDown animate__delay-0.2s"
                alt="book-self"
              />

              <img
                src={Box}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                data-wow-delay="0.6s"
                alt="box"
              />

              <img
                src={Chair}
                className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                alt="chair"
              />

              <img
                src={Cloud}
                className="animate__animated animate__zoomIn animate__delay-0.2s"
                alt="cloud"
              />

              <img
                src={Cup}
                className="animate__animated animate__bounceIn animate__delay-0.2s"
                alt="cup"
              />

              <img
                src={FlowerTop}
                className="animate__animated animate__fadeInDown animate__delay-0.2s"
                alt="flower"
              />

              <img
                src={HeadPhone}
                className="animate__animated animate__zoomIn animate__delay-0.2s"
                alt="head-phone"
              />

              <img
                src={Monitor}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="monitor"
              />

              <img
                src={Mug}
                className="animate__animated animate__rotateIn animate__delay-0.2s"
                alt="mug"
              />

              <img
                src={Table}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="table"
              />

              <img
                src={Tissue}
                className="animate__animated animate__zoomIn animate__delay-0.2s"
                alt="tissue"
              />

              <img
                src={WaterBottle}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="water-bottle"
              />

              <img
                src={Wifi}
                className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                data-wow-delay="0.6s"
                alt="wifi"
              />

              <img
                src={CercleShape}
                className="bg-image rotateme"
                alt="shape"
              />

              <img
                src={ServiceRightMainPic}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="main-pic"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            {/* <div className="col-lg-6 col-md-12 services-left-image">
                            <img 
                                src={BigMonitor}
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="big-monitor"
                            />
            
                            <img 
                                src={Creative}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="creative"
                            />
    
                            <img 
                                src={Developer}
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                alt="developer"
                            />
                    
                            <img 
                                src={FlowerTop}
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="flower-top"
                            />
        
                            <img 
                                src={SmallMonitor}
                                className="animate__animated animate__bounceIn animate__delay-0.2s" 
                                alt="small-monitor"
                            />
                        
                            <img 
                                src={SmallTop}
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="small-top"
                            />
                
                            <img 
                                src={Table}
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="table"
                            />
            
                            <img 
                                src={Target}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="target"
                            />
                        
                            <img 
                                src={CercleShape}
                                className="bg-image rotateme" 
                                alt="shape"
                            />
           
                            <img 
                                src={ServiceLeftMainPic}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="main-pic"
                            />
                        </div> */}
            <div className="col-lg-6 col-md-12 services-left-image">
              {/* Main Image */}
              <img
                src={ServiceLeftMainPic}
                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                alt="main-service-image"
              />

              {/* Decorative / Animated Elements */}
              <img
                src={CercleShape}
                className="bg-image rotateme"
                alt="circle-shape"
              />

              <img
                src={FlowerTop}
                className="animate__animated animate__fadeInLeft animate__delay-0.4s"
                alt="flower-top"
              />

              <img
                src={Target}
                className="animate__animated animate__fadeInUp animate__delay-0.6s"
                alt="target-icon"
              />
            </div>

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
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Tool /> Plant Commissioning (Mechanical, Electrical &
                    Instrumentation)
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Settings /> Plant Maintenance During Shutdowns
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.User /> Labour Hire of Qualified Artisans
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Droplet /> Underground De-Watering
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Hexagon /> Structural Installations & Steel Works
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.RefreshCw /> Pump Refurbishment (Onsite & Offsite)
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.BookOpen /> Project Execution & Site Management
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Activity /> Workforce Training & Skills Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesArea
