import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-section overflow-hidden pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="about-image"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src="/images/about_banner.gif" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="about-content"
                data-aos="zoom-in-left"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span>About Us</span>
                <h2>Focused On Actionable Insights</h2>
                <p>
                By focusing on actionable insights, we enable you to stay ahead of the competition, adapt to changing market conditions, and make strategic decisions that propel your business forward. Trust us to turn your data into a powerful tool for success..
                </p>

                <ul className="about-list">
                <li>
                    
                    <i className="flaticon-tick"></i>
                    Transforming Your Vision into Innovative Apps
                  </li>
                  <li>
                    
                    <i className="flaticon-tick"></i>
                    UI/UX Design for Enhanced User Engagement
                  </li>
                  <li>
                    
                    <i className="flaticon-tick"></i>
                    Custom Mobile App Development for Android & iOS
                  </li>
                  
                  <li>
                    <i className="flaticon-tick"></i>
                    Web App Development
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Deployment of Mobile and Web Apps on Google Play, App Store, and Servers
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Transform your website into mobile apps with synchronized data for seamless user experience across all devices..
                  </li>
                </ul>

                <Link href="/about-us">
                  <a className="default-btn">
                    Read More <span></span>
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

export default AboutUs;
