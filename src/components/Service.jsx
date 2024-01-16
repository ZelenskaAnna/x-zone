import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image1 from "../assets/image1.svg";
import Image2 from "../assets/image2.svg";
import Image3 from "../assets/image3.svg";
import Image4 from "../assets/image4.svg";
import Image5 from "../assets/image5.svg";
import Image6 from "../assets/image6.svg";

export const Service = () => {
  return (
    <section className="service">
      <div className="container service__container">
        <h2 className="title service__title">Our Service</h2>
        <p className="desc service__desc">
          We turn information into actionable insights We work to understand
          your issues and are driven to ask better questions in the pursuit of
          making work.
        </p>
        <div className="service__list">
          <div className="service-item">
            <div className="service-item__img-container">
              <img src={Image1} alt="Image" className="service-item__img" />
            </div>
            <h4 className="service-item__title">Order Management</h4>
            <p className="service-item__desc">
              Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <a href="/" className="service-item__link">
              Learn more{" "}
              <span>
                <ArrowForwardIcon style={{ fontSize: 24 }} />
              </span>
            </a>
          </div>
          <div className="service-item">
            <div className="service-item__img-container">
              <img src={Image2} alt="Image" className="service-item__img" />
            </div>
            <h4 className="service-item__title">Social Assistant</h4>
            <p className="service-item__desc">
              Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <a href="/" className="service-item__link">
              Learn more{" "}
              <span>
                <ArrowForwardIcon style={{ fontSize: 24 }} />
              </span>
            </a>
          </div>
          <div className="service-item">
            <div className="service-item__img-container">
              <img src={Image3} alt="Image" className="service-item__img" />
            </div>
            <h4 className="service-item__title">Crypto Platform</h4>
            <p className="service-item__desc">
              Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <a href="/" className="service-item__link">
              Learn more{" "}
              <span>
                <ArrowForwardIcon style={{ fontSize: 24 }} />
              </span>
            </a>
          </div>
          <div className="service-item">
            <div className="service-item__img-container">
              <img src={Image4} alt="Image" className="service-item__img" />
            </div>
            <h4 className="service-item__title">Smart Trading Modules</h4>
            <p className="service-item__desc">
              Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <a href="/" className="service-item__link">
              Learn more{" "}
              <span>
                <ArrowForwardIcon style={{ fontSize: 24 }} />
              </span>
            </a>
          </div>
          <div className="service-item">
            <div className="service-item__img-container">
              <img src={Image5} alt="Image" className="service-item__img" />
            </div>
            <h4 className="service-item__title">Analyzer of the News</h4>
            <p className="service-item__desc">
              Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <a href="/" className="service-item__link">
              Learn more{" "}
              <span>
                <ArrowForwardIcon style={{ fontSize: 24 }} />
              </span>
            </a>
          </div>
          <div className="service-item">
            <div className="service-item__img-container">
              <img src={Image6} alt="Image" className="service-item__img" />
            </div>
            <h4 className="service-item__title">
              Module of Price Notification
            </h4>
            <p className="service-item__desc">
              Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <a href="/" className="service-item__link">
              Learn more
              <span>
                <ArrowForwardIcon style={{ fontSize: 24 }} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
