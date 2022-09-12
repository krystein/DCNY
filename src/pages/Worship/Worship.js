import React from "react";
import "./worship.css";

const Worship = () => {
  return (
    <div className="worship">
      <div
        className="container"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(73, 122, 150, 0.85) 0%, rgba(104, 200, 255, 0.255) 100%)",
            width: 700,
            padding: "20px",
            color: "#fff",
          }}
        >
          <div>
            <img src="" alt="" />
            <h1>worship ministry</h1>
          </div>
          <p>
            Learn-IT academy(Software Engineering Institute) is an elite
            software engineering and leadership training school that equips high
            potential individuals with world-class software engineering skills
            through real-life projects and internship. With a team of experts
            boasting extensive experience in the field, we are well placed to
            help our students grow and thrive - even in challenging times. By
            really getting to know our students, our talented team are able to
            offer unique and customized solutions backed by data driven analysis
            and broad research. As a company we believe in building Innovative
            students and partnerships which help us all grow.
          </p>
          <button
            className="btn"
            style={{
              color: "#fff",
              backgroundColor: "#9C5548",
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

export default Worship;
