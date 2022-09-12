import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="p-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      <Container>
        <div>
          <h1>Testimonials</h1>
          <p>Watch and listen to our expository sermons every week</p>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
