import React, { useState } from "react";
import "./sub.css";
import { useNavigate } from "react-router-dom";
import Subscribe from "../asset/icons/newsletter (1).png";

const Sub = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = () => {
    // Redirect to the /signup route with the email as a URL parameter
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="subA__subscribe section__padding">
      <div className="subA__subscribe-Insc-container">
        <img src={Subscribe} alt="Subscribe" />
        <div>
          <p className="subA__subscribe-Insc-title">
            Votre voyage commence ici
          </p>
          <p className="subA__subscribe-Insc-desc">
            Inscrivez-vous et nous vous enverrons les meilleures offres
          </p>
        </div>
      </div>
      <div className="subA__subscribe-email-container">
        <input
          type="email"
          placeholder="Votre adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>S'abonner</button>
      </div>
    </div>
  );
};

export default Sub;
