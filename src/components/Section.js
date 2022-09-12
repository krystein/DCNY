import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../img/PNG/background2.png";
import Img1 from "../img/PNG/aboutus1.png";
import Img2 from "../img/PNG/aboutus2.png";
import Img3 from "../img/PNG/aboutus3.png";
import styled from "styled-components";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Div = styled.section`
  background-color: #000;
  background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`;

const Section = () => {
  return (
    <Div>
      <Container className="p-5">
        <div>
          <h1>About Us</h1>
        </div>
        <div>
          <p>
            Dominion City Church of New York is a non-denominational church
            located in the heart of the Fresh Meadows area of Queens, New York.
            Here at Dominion City New York, we do so much more than just perform
            Sunday services. With deep roots from Dominion City Church
            International, having well over 100 branches throughout the United
            States, Canada, Europe and Africa, we have a history of developing
            and maintaining leaders that can stand to face any storm of life{" "}
          </p>
        </div>
        <Row className="pt-4 pb-4">
          <div className="col-lg col-sm mb-3">
            <Card
              style={{
                background:
                  "linear-gradient(180deg, rgba(73, 122, 150, 0.85) 0%, rgba(104, 200, 255, 0.255) 100%)",
                borderRadius: "0px",
              }}
              className="p-3"
            >
              <img src={Img1} alt="" className="img-fluid" />
              <div>
                <h4>Worship ministry</h4>
                <p style={{ fontSize: "15px" }}>
                  It is through our giving we show how much we appreciate, love,
                  and worship our Holy Father.
                </p>
              </div>
              <div>
                <Link
                  to="/Worship"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  LEARN MORE
                </Link>
              </div>
            </Card>
          </div>
          <div className="col-lg col-sm mb-3">
            <Card
              style={{
                background:
                  "linear-gradient(180deg, #894646 0%, rgba(255, 106, 106, 0.3) 100%)",
                borderRadius: "0px",
              }}
              className="p-3"
            >
              <img src={Img2} alt="" className="img-fluid" />
              <div>
                <h4>Pastoral</h4>
                <p style={{ fontSize: "15px" }}>
                  We believe it is our calling to assist each other in the
                  pursuit of spiritual growth, to bu...
                </p>
              </div>
              <div>
                <Link
                  to="/Pastoral"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  LEARN MORE
                </Link>
              </div>
            </Card>
          </div>
          <div className="col-lg col-sm mb-3">
            <Card
              style={{
                background:
                  "linear-gradient(180deg, #4A5694 0%, rgba(53, 84, 240, 0.3) 100%)",
                borderRadius: "0px",
              }}
              className="p-3 pb-3"
            >
              <img src={Img3} alt="" className="img-fluid" />
              <div>
                <h4>Media Ministry</h4>
                <p style={{ fontSize: "15px" }}>
                  This team is in charge of the graphics, video productions and
                  projection of song lyrics..
                </p>
              </div>
              <div>
                <Link
                  to="/MediaMinistry"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  LEARN MORE
                </Link>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </Div>
  );
};

export default Section;
