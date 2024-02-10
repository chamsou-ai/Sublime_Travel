// NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Create a separate CSS file for styling

const NotFound = () => {
  return (
    <div>
      <div className="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>Oups ! La page que vous cherchez n'existe pas.</p>
        <p>
          Retourner à <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
