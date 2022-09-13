import React from "react";
import { Container } from "react-bootstrap";
import img from "../../img/PNG/Rectangle4201.png";
import img1 from "../../img/PNG/Rectangle4202.png";
import img2 from "../../img/PNG/Rectangle4203.png";
import img3 from "../../img/PNG/Rectangle4204.png";
import img4 from "../../img/PNG/Rectangle4205.png";

const About = () => {
  return (
    <div>
      <Container style={{ color: "#fff", textAlign: "justify" }}>
        <h1>About Us</h1>
        <p style={{ color: "#fff", textAlign: "justify" }}>
          Dominion City Church of New York is a non-denominational church
          located in the heart of the Fresh Meadows area of Queens, New York.
          Here at Dominion City New York, we do so much more than just perform
          Sunday services. With deep roots from Dominion City Church
          International, having well over 100 branches throughout the United
          States, Canada, Europe and Africa, we have a history of developing and
          maintaining leaders that can stand to face any storm of life. This
          Bible-teaching and Bible-believing ministry equips men and women to
          accomplish all that God has in store for them. As a prayerful church,
          our services are life changing!
        </p>
        <div className="row mb-5 justify-content-center">
          <div className="d-flex col-lg col-sm-4 col-sm-2 col-md justify-content-center mb-4 mt-2">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <div className="d-flex col-lg col-sm-4 col-sm-2 col-md mt-4 justify-content-center">
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className="d-flex col-lg col-sm-4 col-sm-2 col-md justify-content-center mb-4 mt-2">
            <img src={img2} alt="" className="img-fluid" />
          </div>
          <div className="d-flex col-lg col-sm-4 col-sm-2 col-md mt-4 justify-content-center">
            <img src={img3} alt="" className="img-fluid" />
          </div>
          <div className="d-flex col-lg col-sm-4 col-sm-2 col-md justify-content-center mb-4 mt-2">
            <img src={img4} alt="" className="img-fluid" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
