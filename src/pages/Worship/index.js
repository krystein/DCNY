import React from "react";
import CountdownTimer from "../../components/countdown";
import News from "../../components/News";
import Testimonials from "../../components/Testimonial";
import Worship from "./Worship";

const Index = () => {
  return (
    <div>
      <Worship />
      <CountdownTimer />
      <News />
      <Testimonials />
    </div>
  );
};

export default Index;
