import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../../img/PNG/aboutus1.png";
import Img2 from "../../img/PNG/aboutus2.png";
import Img3 from "../../img/PNG/aboutus3.png";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dcny = () => {
  return (
    <Container className="p-5" style={{ color: "#fff" }}>
      <Row className="pt-4 pb-4">
        <div className="col-lg col-sm mb-3">
          <Card
            style={{
              background:
                "linear-gradient(180deg, #894646 0%, rgba(255, 106, 106, 0.3) 100%)",
              borderRadius: "0px",
            }}
            className="p-3"
          >
            <img src={Img1} alt="" className="img-fluid" />
            <div className="mt-3">
              <h4 className="text-uppercase">Worship offerings</h4>
              <p style={{ fontSize: "15px" }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut.
              </p>
            </div>
            <div>
              <Link
                to="/Worship"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <button
                  className="btn text-uppercase"
                  style={{
                    color: "#fff",
                    backgroundColor: "#B76B6B",
                    width: "150px",
                  }}
                >
                  Worship
                </button>
              </Link>
            </div>
          </Card>
        </div>
        <div className="col-lg col-sm mb-3">
          <Card
            style={{
              background:
                "linear-gradient(103.27deg, #4C7FB5 0%, #3D5F84 100%)",
              borderRadius: "0px",
            }}
            className="p-3"
          >
            <img src={Img2} alt="" className="img-fluid" />
            <div className="mt-3">
              <h4 className="text-uppercase">Tithe</h4>
              <p style={{ fontSize: "15px" }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut.
              </p>
            </div>
            <div>
              <Link
                to="/Pastoral"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <button
                  className="btn text-uppercase"
                  style={{
                    color: "#fff",
                    backgroundColor: "#7AA3CC",
                    width: "150px",
                  }}
                >
                  Tithe
                </button>
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
            <div className="mt-3">
              <h4 className="text-uppercase">Project offerings</h4>
              <p style={{ fontSize: "15px" }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut.
              </p>
            </div>
            <div>
              <Link
                to="/MediaMinistry"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <button
                  className="btn text-uppercase"
                  style={{
                    color: "#fff",
                    backgroundColor: "#6973A9",
                    width: "150px",
                  }}
                >
                  Projects
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Dcny;
