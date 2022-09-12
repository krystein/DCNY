import React from "react";
import styled from "styled-components";
import CountdownTimer from "./countdown";
import Hero from "./Hero";
import Media from "./Media";
import News from "./News";
import Playlist from "./Playlist";
import Section from "./Section";
import Testimonials from "./Testimonial";
import Welcome from "./Welcome.js";

const Indexcontainer = styled.section`
  padding-top: 0px;
`;

const Index = () => {
  return (
    <Indexcontainer>
      <Hero />
      <Section />
      <Welcome />
      <CountdownTimer />
      <Media />
      <News />
      <Playlist />
      <Testimonials />
    </Indexcontainer>
  );
};

export default Index;
