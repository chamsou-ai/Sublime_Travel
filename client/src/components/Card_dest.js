import React from "react";
import "./card_dest.css";
const Card_dest = ({image,DestName}) => {
  return (
    <div>
      <div className="Card_section ">
        <img className="card-image" src={image} alt="Destination 1" />
        <div className="card-content">
          <h3 className="destination-name slide-top">{DestName}</h3>
          {/* <div className="ButtonContainer">
            <button className="discover-button slide-top">Découvrir</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card_dest;
