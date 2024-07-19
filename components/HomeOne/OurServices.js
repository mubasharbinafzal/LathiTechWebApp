import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>OUR SOFTWARE SERVICES</span>

            
            
            <h1>Our Services Are
            Customised To Your Needs</h1>
          </div>

          <div className="row">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
              
            >
              <div className="single-services-box">
                
                <div className="icon" style={{"line-height": "37px"}}>
                <img
                    src="/CustomImages/Idea.png"
                    className="white-logo"
                    alt="Mobile Logo"
                    style={{"width": "25px"}}
                  />
                </div>
                

                <h3>Validate Your Idea</h3>
                <p>
                Uncover valuable opportunities through data-driven insights and build successful ventures.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                <img
                    src="/CustomImages/Design.png"
                    className="Web App "
                    alt="Mobile Logo"
                    style={{"width": "25px"}}
                  />
                </div>

                <h3>Design Your App</h3>
                <p>
                Elevate your digital presence with world-class mobile and web app design
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                <img
                    src="/CustomImages/UiUx.png"
                    className="white-logo"
                    alt="Ux/Ui Logo"
                    style={{"width": "25px"}}
                  />
                </div>
                <h3>UX/UI Audit & Redesign </h3>
                <p>
                Enhance user experience and drive conversions with a comprehensive product audit and redesign..
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                <img
                    src="/CustomImages/app.png"
                    className="white-logo"
                    alt="Ux/Ui Logo"
                    style={{"width": "25px"}}
                  />
                </div>
                <h3>Mobile App Design</h3>
                <p>
                Build fast, functional, and scalable mobile applications that leverage the latest technologies..
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-science"></i>
                </div>
                <h3>Web App Development</h3>
                <p>
                Develop customised web applications that drive business growth, improve efficiency, and optimise processes.
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                <img
                    src="/CustomImages/LowCode.png"
                    className="white-logo"
                    alt="Ux/Ui Logo"
                    style={{"width": "25px"}}
                  />
                </div>
                <h3>Low-/ No-Code Development</h3>
                <p>
                Develop customised systems that drive business growth and improve operational efficiencies. 
                </p>

                <Link href="/service-details">
                  <a className="service-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
