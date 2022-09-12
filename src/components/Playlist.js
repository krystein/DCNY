import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import img from "../img/PNG/Rectangle2224.png";

const Playlist = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      <Container>
        <div>
          <div>
            <h1>Playlist</h1>
            <p>Watch and listen to our expository sermons every week</p>
          </div>
          <div></div>
        </div>
        <div>
          <div>
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Playlist;
