import React from "react";
import "./header.css";
import { NavBar } from "../components";
import { useNavigate } from "react-router-dom";

const Header = ({ Logo, Desc, SubDesc, BtnName, Btn }) => {
  const navigate = useNavigate(); // Rename to avoid conflicts

  return (
    <div className="image-section" id="Home">
      <img className="Bg-home" src={Logo} />
      <div className="image-overlay">
        <NavBar />
        <div className="image-content">
          <p className="desc" style={{ marginBottom: "0px" }}>
            {Desc}
          </p>
          <p className="Sub-desc section__margin" style={{ marginTop: "30px" }}>
            {SubDesc}
          </p>
          <button
            className="btn-reserv"
            style={{ display: Btn }}
            onClick={() => navigate("/devis")}
          >
            {BtnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
