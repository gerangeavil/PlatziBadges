import React from "react";
import "./styles/PageError.css";
import astronautaImage from "../images/astronauta.svg";

function PageError(props) {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <h1>{props.error.message}</h1>
          </div>

          <div className="Home__col d-none d-md-block col-md-8">
            <img
              src={astronautaImage}
              alt="Astronauta"
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageError;
