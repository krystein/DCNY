import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import Img from "../../img/PNG/footer1.png";

const Foot = () => {
  return (
    <div className="foot">
      <div className="p-3">
        <div className="row row-1">
          <div className="col-lg col-sm foots">
            <h3 className="text-uppercase">Let's join our fellowship</h3>
            <p>
              there are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <button
              className="p-2 text-uppercase"
              style={{
                backgroundColor: "#4C7FB5",
                color: "#fff",
                border: "none",
              }}
            >
              join now
            </button>
          </div>
          <div className="d-flex col-lg col-sm parent">
            <div className="child">
              <img src={Img} alt="" className="img-fluid" />
            </div>
            <div className="child-1 child">
              <img src={Img} alt="" className="img-fluid" />
            </div>
            <div className="child-2 child">
              <img src={Img} alt="" className="img-fluid" />
            </div>
            <div className="child-3 child">
              <img src={Img} alt="" className="img-fluid" />
            </div>
            <div className="child-4 child">
              <img src={Img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
