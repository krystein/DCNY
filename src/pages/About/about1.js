import React from "react";
import { Container } from "react-bootstrap";

const About1 = () => {
  return (
    <div>
      <Container style={{ color: "#fff" }}>
        <h3 className="text-uppercase">
          Anyone who joins us in fellowship will be positively impacted.{" "}
        </h3>
        <p style={{ color: "#70768A", textAlign: "justify" }}>
          As a faith community in Queens, our members are engaged in a wide
          variety of activities, both within the church and serving the wider
          community. There are many opportunities for our members to get
          involved in community building, ask and answer spiritual questions,
          and work together to grow in faith. We believe in making others better
          and organize many opportunities for our members to volunteer and work
          with our community outreach programs. From reading programs for
          children, to food and clothing drives for the less fortunate, to
          barbeques and other fun events, our congregation is extremely active
          in the community. We are always open to new ideas and projects that
          will help us serve the community and New York as a whole.
        </p>
      </Container>
    </div>
  );
};

export default About1;
