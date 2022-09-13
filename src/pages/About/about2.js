import React from "react";
import img from "../../img/PNG/cheerful.png";
import "./about.css";

const About2 = () => {
  return (
    <div
      className="d-flex align-items-center p-3 justify-content-end about"
      style={{
        color: "#fff",
        position: "relative",
        height: "50vh",
      }}
    >
      <div
        className="img-none"
        style={{ position: "absolute", top: -40, right: 800 }}
      >
        <img src={img} alt="" className="img-fluid" width="400" />
      </div>
      <div
        className=""
        style={{
          width: 650,
          color: "#fff",
          marginRight: 20,
        }}
      >
        <div>
          <h5
            className="text-uppercase"
            style={{
              lineHeight: "2rem",
            }}
          >
            We aspire to be a church family where everyone will feel welcome,
            and we want to invite you to give us a try!
          </h5>
          <p style={{ color: "#C1C1C1" }}>
            If you are seeking God and ready for your life to be transformed, or
            are new and considering visiting our church, we want to extend a
            heartfelt welcome to you and your family. We aspire to be a church
            family where everyone will feel welcome, and we want to invite you
            to give us a try
          </p>
          <button
            className="btn"
            style={{
              color: "#fff",
              backgroundColor: "#4C7FB5",
              width: "150px",
            }}
          >
            #submit request
          </button>
        </div>
      </div>
    </div>
  );
};

export default About2;
