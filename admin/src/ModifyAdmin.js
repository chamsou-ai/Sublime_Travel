import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./modifyadmin.css";

const ModifyAdmin = () => {
  const navigate = useNavigate();
  const [newCredentials, setNewCredentials] = useState({
    newUsername: "",
    newPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a PUT request to update admin credentials
      const response = await axios.put(
        "http://localhost:3001/admin/update",
        newCredentials,
        { withCredentials: true }
      );

      if (response.status === 200) {
        console.log("Admin credentials updated successfully");
        // Redirect to your dashboard or desired page
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error updating admin credentials:", error);
    }
  };

  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem("jwtToken");

    // Redirect to the login page
    window.location.href = "/";
  };
  return (
    <div>
      <div className="menu-container">
        <FontAwesomeIcon
          icon={faUser}
          className="admin-icon"
          onClick={() => navigate("/dashboard")}
          style={{ cursor: "pointer" }}
        />
        <button
          onClick={() => navigate("/modify-admin")}
          className="btn-modify-admin"
        >
          Modifier le mot de passe et l'utilisateur
        </button>
        <button className="logout-button" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          Déconnexion
        </button>
      </div>
      <div
        className="subA__modify-admin-container"
        style={{ marginTop: "3rem" }}
      >
        <form onSubmit={handleSubmit}>
          <p className="subA__modify-admin-title">
            Modifier les identifiants administratifs
          </p>
          <input
            type="text"
            placeholder="Nouveau nom d'utilisateur"
            name="newUsername"
            value={newCredentials.newUsername}
            onChange={handleChange}
            required
            className="modify-admin-cre"
          />
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            name="newPassword"
            value={newCredentials.newPassword}
            onChange={handleChange}
            required
            className="modify-admin-cre"
          />
          <button type="submit">Modifier identifiants</button>
        </form>
      </div>
    </div>
  );
};

export default ModifyAdmin;
