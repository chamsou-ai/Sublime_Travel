import React from "react";
import "./footer.css";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
const footer = () => {
  return (
    <div className=" subA__footer section__margin">
      <div className="subA__footer-info">
        <div className="subA__footer-info-contact">
          <p className="subA__footer-info-title">Contact</p>
          <div>
            <p className="subA__footer-info-desc">Email : </p>
            <p className="subA__footer-info-text">
              sublime.travel.dz@gmail.com
            </p>
          </div>
          <div>
            <p className="subA__footer-info-desc">Numéro de téléphone : </p>
            <p className="subA__footer-info-text">(+213) 0673 37 49 10</p>
          </div>
        </div>
        <div className="subA__footer-info-location">
          <p className="subA__footer-info-title">Location</p>
          <a
            href="https://maps.app.goo.gl/LefchxfKhcNDVpZ5A"
            className="subA__footer-info-text"
            target="_blank"
            style={{ color: "#005f73" }}
          >
            Cité les Dunes lot n°419 local 2 Bouzed ALi -Calma, Chéraga, Algeria
          </a>
        </div>
        <div className="subA__footer-info-company">
          <p className="subA__footer-info-title">Entreprise</p>
          <p className="subA__footer-info-desc">À propos de nous</p>
          <div className="subA__footer-info-icons">
            <a href="https://www.facebook.com/sublimetraveldz" target="_blank">
              <RiFacebookFill />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <RiInstagramFill />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <RiLinkedinFill />
            </a>
          </div>
        </div>
      </div>
      <div className="subA__footer-copyright">
        © 2023 by Chamsou Meka All rights reserved.
      </div>
    </div>
  );
};

export default footer;
