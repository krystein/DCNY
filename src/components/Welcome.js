import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <div>
      <div style={{ background: "#000", color: "#fff" }} className="p-5">
        <Container className="p-4">
          <h1 className="text-center">WELCOME TO CHURCH</h1>
          <p className="text-center">
            Dominion City Church of New York is a non-denominational church
            located in the heart of the Fresh Meadows area of Queens, New York.
            <br />
            Here at Dominion City New York, we do so much more than just perform
            Sunday services
          </p>
          <div className="p-5">
            <Row className="mt-4">
              <Col style={{ backgroundColor: "#131313" }} className="p-5">
                <h6 className="text-uppercase" style={{ color: "#7D828B" }}>
                  pastor god’s gift achiuwa
                </h6>
                <h3 className="text-uppercase" style={{ fontWeight: "700" }}>
                  tami tarzan
                </h3>
                <p style={{ fontSize: "12px", color: "#70768A" }}>
                  Pastor God'sgift Achiuwa is the lead pastor of Dominion City
                  Church New York. As our shepherd, he guides us and ensures
                  that we are on the path of success. His passion for the people
                  and his fire for God are the driving force behind his
                  ministry. As a result, our members are ignited.
                </p>
                <p style={{ fontSize: "12px", color: "#70768A" }}>
                  Pastor God'sgift is from Port Harcourt, Nigeria. He moved to
                  the United States in 2009 and established Dominion City New
                  York shortly thereafter. He came to the United States as a
                  student athlete and he stayed true to God's calling on his
                  life; he invested all his time into this ministry. He is a
                  selfless individual with a fervent desire to see everyone
                  fulfill God's purpose for their life.{" "}
                </p>
                <button
                  className="p-2"
                  style={{ backgroundColor: "#4C7FB5", color: "#fff" }}
                >
                  View His Achivements
                </button>
              </Col>
              <Col></Col>
            </Row>
            <Row className="mt-4">
              <Col></Col>
              <Col style={{ backgroundColor: "#131313" }} className="p-5">
                <h6 className="text-uppercase" style={{ color: "#7D828B" }}>
                  pastor akeil cange
                </h6>
                <h3 className="text-uppercase" style={{ fontWeight: "700" }}>
                  Akeil cange
                </h3>
                <p style={{ fontSize: "12px", color: "#70768A" }}>
                  Pastor Akeil Cange is the assistant pastor of Dominion City
                  Church New York. His zeal for excellence and the principles
                  found in God's Word help him assist with the ministry work and
                  shepherding in ways that maximize effectiveness.
                </p>
                <p style={{ fontSize: "12px", color: "#70768A" }}>
                  Pastor Akeil is from New York City. He joined the DCNY family
                  in 2015 and has been instrumental in efforts to build and
                  maintain the outreach teams, the social media department, and
                  more. His previous studies in business also have provided him
                  with much knowledge and understanding of the diverse
                  populations of New York City, helping him create and implement
                  strategies that make the love of Christ manifest to people all
                  around the city and beyond.
                </p>
                <button
                  className="p-2"
                  style={{ backgroundColor: "#4C7FB5", color: "#fff" }}
                >
                  View His Achivements
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Welcome;
