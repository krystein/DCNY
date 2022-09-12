import React from "react";
import CountdownTimer from "../../components/countdown";
import News from "../../components/News";
import Testimonials from "../../components/Testimonial";
import MediaMinistry from "./MediaMinistry";

const Index = () => {
  return (
    <div>
      <MediaMinistry />
      <CountdownTimer />
      <News />
      <Testimonials />
    </div>
  );
};

export default Index;
