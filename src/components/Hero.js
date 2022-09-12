import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../img/PNG/background1.png";
import line from "../img/SVG/Line4.svg";
import styled from "styled-components";

const Herosection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-itmes: center:
overflow: hidden;
position: relative;
`;
const HeroSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.7;
  }
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left; 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;
const Herocontent = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  max-width: 1600px;
  width: 100%;
  color: #fff;
  justify-content: center;
  h1 {
    font-size: clamp(0.8rem, 8vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
  h3 {
    font-size: clamp(0.8rem, 8vw, 3rem);
    font-family: "Mr De Haviland", cursive;
    font-weight: 400;
    text-align: center;
    color: #73b7ff;
  }
  p {
    margin-bottom: 1.5rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    font-size: clamp(0.5rem, 8vw, 0.8em);
    text-align: center;
  }
`;

const Hero = () => {
  return (
    <Herosection>
      <HeroImage src={Img} alt="" />
      <HeroWrapper>
        <HeroSlide>
          <Herocontent>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <img src={line} alt="" className="img-fluid" />
              <h3>Dominion city</h3>
              <img src={line} alt="" className="img-fluid" />
            </div>
            <div>
              <h1>
                Dominion city <br />
                newyork
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                <br /> tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "center", gap: "10px" }}
            >
              <button
                className="btn"
                style={{
                  color: "#fff",
                  backgroundColor: "#4C7FB5",
                  width: "150px",
                }}
              >
                #woot
              </button>
              <button
                className="btn"
                style={{
                  color: "#fff",
                  backgroundColor: "#9C5548",
                  width: "150px",
                }}
              >
                #submit request
              </button>
            </div>
          </Herocontent>
          {/* <div>
            <div>
              <h1>CITY LIGHTS WORSHIP</h1>
            </div>
            <div></div>
            <div></div>
          </div> */}
        </HeroSlide>
      </HeroWrapper>
    </Herosection>
  );
};

export default Hero;
