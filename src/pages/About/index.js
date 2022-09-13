import React from "react";
import About from "./about";
import About1 from "./about1";
import About2 from "./about2";

const Index = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <About />
      <div
        className="about-1"
        style={{ backgroundColor: "#131313", padding: "30px 0px" }}
      >
        <About1 />
      </div>
      <div className="container mt-5 mb-5">
        <About2 />
      </div>
    </div>
  );
};

export default Index;
