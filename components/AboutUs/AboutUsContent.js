import React from "react";

const AboutUsContent = () => {
  return (
    <>
      <div className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/images/about_banner.gif" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>About Us</span>
                <h2>Focused On Actionable Insights</h2>
                <p>
                LathiTech is dedicated to delivering innovative mobile, web, desktop, and AI solutions, coupled with exceptional UX/UI design, to enhance user experience and drive business success. Our team of experts specializes in creating custom applications tailored to meet the unique needs of our clients. From initial concept to final deployment, we ensure seamless integration and optimal performance. With a focus on cutting-edge technology and user-centric design, LathiTech aims to transform your ideas into reality. Whether it's developing a new mobile app, enhancing a web platform, or leveraging AI for smarter solutions, we are committed to providing exceptional results and exceeding client expectations.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
