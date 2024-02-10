import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if both username and password are entered
    if (!credentials.username || !credentials.password) {
      setError("Veuillez entrer à la fois le nom d'utilisateur et le mot de passe");
      return;
    }
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/admin/login`,
        credentials,
        { withCredentials: true }
      );
  
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("jwtToken", token);
  
        console.log("Login successful");
        // Redirect to your dashboard or desired page
        navigate("/dashboard");
      } else {
        setError("Nom d'utilisateur ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Error logging in:", error);
        setError("Nom d'utilisateur ou mot de passe incorrect");
    }
  };
  

  return (
    <div>
      <div className="subA__login-container">
        <form onSubmit={handleSubmit}>
          <p className="subA__login-welcome">Bienvenue de retour, administrateur !</p>
          {error && <p className="subA__login-error">{error}</p>}
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
