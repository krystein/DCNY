import React from "react";
import CountdownTimer from "./countdownTimer";
import "./countdown.css";
import styled from "styled-components";
import Img from "../../img/PNG/welcome3.png";

const Div = styled.div`
  background: linear-gradient(
      93.8deg,
      rgba(0, 0, 0, 0.49) 1.29%,
      rgba(0, 0, 0, 0.51) 103.25%
    ),
    url(${Img});
  background-size: cover;
  color: #fff;
`;

const Index = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <Div className="text-center p-4">
        <h2
          color="#F8F9FF"
          style={{
            fontWeight: 300,
            lineHeight: "60px",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          COUNTDOWN TO <span style={{ fontWeight: 700 }}>NEXT SERVICE</span>
        </h2>
        <p>
          Don't miss a service. join us by the count below in a warm teaching,
          and worship of our King Jesus Christ.{" "}
        </p>
        <div>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <button
          className="text-uppercase p-3"
          style={{ backgroundColor: "#4C7FB5", color: "#fff", border: "none" }}
        >
          Save the time
        </button>
      </Div>
    </div>
  );
};

export default Index;
