import React from "react";
import Link from "next/link";

const WorkingProcess = () => {
  return (
    <>
      <div className="process-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Working Process</span>
            <h2>Software Developing Process</h2>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <img src="/CustomImages/design_planing.png" alt="image" />

                <h3>Planning & Design</h3>
                <p>
                Strategic planning and intuitive design ensure seamless and successful development.
                </p>

                <Link href="/project-details">
                  <a className="process-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <img src="/CustomImages/development_integration.png" alt="image" />

                <h3>Development & Integration</h3>
                <p>
                Seamless development and integration for robust, scalable, high-performance software solutions.
                </p>

                <Link href="/project-details">
                  <a className="process-btn">
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
              <div className="process-item">
                <img src="/CustomImages/testing_development.png" alt="image" />

                <h3>Testing & Deployment Projects</h3>
                <p>
                Thorough testing and seamless deployment for successful software project completion.
                </p>

                <Link href="/project-details">
                  <a className="process-btn">
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

export default WorkingProcess;
