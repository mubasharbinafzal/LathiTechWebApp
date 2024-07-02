import React from "react";
import Link from 'next/link';

const GetStartedProject = () => {
  return (
    <>
      <div className="productive-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                <span>Let’s Get Started</span>
                <h3>Are you ready for a better, more productive business </h3>
                <p>
                Are you ready for a better, more productive business? Partner with LathiTech for top-tier mobile, desktop, and web app development, along with exceptional UX/UI design tailored to your needs.
                </p>

                <div className="productive-btn">
                  <Link href="/projects">
                    <a className="productive-btn">
                      Get Started Project
                      <span></span>
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a className="productive-btn-one">
                      Contact With Us
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="productive-image">
                <img src="/images/productive.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedProject;
