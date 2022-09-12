import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row } from "react-bootstrap";
import Img from "../img/PNG/unsplash1.png";
import Img1 from "../img/PNG/unsplash2.png";
import Img2 from "../img/PNG/unsplash3.png";
import Img3 from "../img/PNG/unsplash4.png";

const News = () => {
  return (
    <div className="" style={{ backgroundColor: "#000", color: "#fff" }}>
      <Container>
        <div className=" text-center pt-5 pb-5">
          <h4 className=" text-uppercase">Dominion city events & news - usa</h4>
          <p>Explore our DCNY Events and News</p>
        </div>
        <div className="row">
          <div className="col-lg col-sm">
            <Card style={{ backgroundColor: "#000", border: "none" }}>
              <img
                src={Img}
                alt=""
                className="img-fluid"
                style={{ height: 450 }}
              />
              <div className="mt-3">
                <h4>Dominion Convention 2019 - Georgia</h4>
                <p style={{ fontSize: "12px" }}>
                  therefore always free from repetition, injected humour, or
                  non-characteristic words about him to get clarification.
                </p>
              </div>
            </Card>
          </div>
          <div className="col-lg col-sm">
            <Row>
              <div className="col-lg col-sm mb-3">
                <Card style={{ backgroundColor: "#000", border: "none" }}>
                  <img src={Img1} alt="" className="img-fluid" />
                  <div className="mt-3">
                    <h6>Media Ministry</h6>
                    <p style={{ fontSize: "12px" }}>
                      Prayer & Prophetic Conference 2018 Lagos, Nig
                    </p>
                  </div>
                </Card>
              </div>
              <div className="col-lg col-sm">
                <Card style={{ backgroundColor: "#000", border: "none" }}>
                  <img src={Img2} alt="" className="img-fluid" />
                  <div className="mt-3">
                    <h6>Media Ministry</h6>
                    <p style={{ fontSize: "12px" }}>
                      Prayer & Prophetic Conference 2018 Lagos, Nig
                    </p>
                  </div>
                </Card>
              </div>
            </Row>
            <Row>
              <div className="col-lg col-sm">
                <Card style={{ backgroundColor: "#000", border: "none" }}>
                  <img src={Img3} alt="" className="img-fluid" />
                  <div className="mt-3">
                    <h6>Media Ministry</h6>
                    <p style={{ fontSize: "12px" }}>
                      Prayer & Prophetic Conference 2018 Lagos, Nig
                    </p>
                  </div>
                </Card>
              </div>
              <div className="col-lg col-sm mb-3">
                <Card style={{ backgroundColor: "#000", border: "none" }}>
                  <img src={Img3} alt="" className="img-fluid" />
                  <div className="mt-3">
                    <h6>Media Ministry</h6>
                    <p style={{ fontSize: "12px" }}>
                      Prayer & Prophetic Conference 2018 Lagos, Nig
                    </p>
                  </div>
                </Card>
              </div>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
