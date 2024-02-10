// NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Create a separate CSS file for styling
import { NavBar_Black } from "../components";
import { Footer_, Sub_ } from "../content";

const NotFound = () => {
  return (
    <div>
      <NavBar_Black />
      <div className="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>Oups ! La page que vous cherchez n'existe pas.</p>
        <p>
          Retourner à <Link to="/">Accueil</Link>
        </p>
      </div>
      <Sub_ />
      <Footer_ />
    </div>
  );
};

export default NotFound;
