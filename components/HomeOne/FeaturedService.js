import React from "react";

const FeaturedService = () => {
  return (
    <>
      <div className="software-section p-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <span>Our Featured Services</span>
                <h2>Software Developement Services</h2>
                <p>
                LathiTech offers expert mobile (iOS, Android), desktop, and web app development services, delivering innovative solutions with top-notch UX/UI design for all screen sizes to drive business growth.
                </p>

                <ul className="features-list">
                  <li>
                    <span>Mobile App Development (IOS and Android)</span>
                  </li>
                  <li>
                    <span>Responsive Web App Development</span>
                  </li>
                  <li>
                    <span>Desktop Application Development</span>
                  </li>
                  <li>
                    <span>UX/UI Design and Prototyping</span>
                  </li>
                  <li>
                    <span>Cross-Platform App Solutions</span>
                  </li>
                  <li>
                    <span>API Integration and Development</span>
                  </li>
                  <li>
                    <span>Maintenance and Support</span>
                  </li>
                  <li>
                    <span>Performance Optimization and Testing</span>
                  </li>
                  <li>
                    <span> Deployment on Apple Store, Google play store,Google Firebase</span>
                  </li>
                  <li>
                    <span>Deployment on Clouds Aws, Cpanel,Microsoft Azure,Heroku,DigitalOcean </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="software-image">
                <img src="/CustomImages/about_us.gif" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;
