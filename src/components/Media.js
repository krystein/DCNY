import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Img from "../img/PNG/singing.png";
import Img1 from "../img/PNG/priest.png";

const Media = () => {
  return (
    <div className="pt-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      <Container>
        <div className="mb-3">
          <h6 style={{ fontSize: "12px", color: "#70768A" }}>MEDIA</h6>
          <h6>LET US GO</h6>
          <h6>THE HOUSE OF THE LORD</h6>
        </div>
        <div className="row">
          <div className="col-lg col-sm" style={{ paddingRight: "3rem" }}>
            <img src={Img} alt="" className="img-fluid" />
          </div>
          <div className="col-lg col-sm" style={{ color: "#70768A" }}>
            <h6 style={{ fontSize: "12px" }}>SERMON</h6>
            <h6 style={{ fontSize: "12px" }}>
              there are many variations of passages of lorem
              <br /> ipsum available, but the majorityhave suffered
              <br /> alteration in some form.
            </h6>
            <div
              className="py-2"
              style={{
                height: 400,
                display: "flex",
                justifyContent: "start",
              }}
            >
              <img src={Img1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Media;
