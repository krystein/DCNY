import React from "react";
import CountdownTimer from "../../components/countdown";
import News from "../../components/News";
import Testimonials from "../../components/Testimonial";
import Pastoral from "./Pastoral";

const Index = () => {
  return (
    <div>
      <Pastoral />
      <CountdownTimer />
      <News />
      <Testimonials />
    </div>
  );
};

export default Index;
