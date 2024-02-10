import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch subscribers from the backend when the component mounts
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/subscribers`);
      setSubscribers(response.data);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
  };

  const handleToggleSelect = (subscriberId) => {
    setSelectedComments((prevSelectedComments) =>
      prevSelectedComments.includes(subscriberId)
        ? prevSelectedComments.filter((id) => id !== subscriberId)
        : [...prevSelectedComments, subscriberId]
    );
  };

  const handleUpdateChosenStatus = async (subscriberId, newStatus) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/subscribers/update/${subscriberId}`,
        {
          Chosen: newStatus,
        }
      );
      fetchSubscribers(); // Fetch updated subscribers after the status is changed
    } catch (error) {
      console.error("Error updating chosen status:", error);
    }
  };

  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem("jwtToken");

    // Redirect to the login page
    window.location.href = "/";
  };

  const renderButtonText = (subscriber) => {
    if (subscriber.Chosen) {
      return "Désélectionner";
    } else {
      return "Sélectionner";
    }
  };
  const handleRemoveSubscription = async (subscriberId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/${subscriberId}`
      );
      fetchSubscribers(); // Fetch updated subscribers after removal
    } catch (error) {
      console.error("Error removing subscription:", error);
    }
  };

  return (
    <div>
      <div className="menu-container">
        <FontAwesomeIcon
          icon={faUser}
          className="admin-icon"
          onClick={() => Navigate("/dashboard")}
          style={{ cursor: "pointer" }}
        />
        <button
          onClick={() => Navigate("/modify-admin")}
          className="btn-modify-admin"
        >
          Modifier le mot de passe et le nom d'utilisateur
        </button>
        <button className="logout-button" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          Déconnexion
        </button>
      </div>
      <h1 className="dashboard-text">Tableau de bord</h1>
      <div className="table-container section__margin">
        <table className="comment-table">
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom de famille</th>
              <th>Email</th>
              <th>Numéro de téléphone</th>
              <th>Commentaire</th>
              {/* <th>Chosen</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber.SubscriberId}>
                <td>{subscriber.FirstName}</td>
                <td>{subscriber.LastName}</td>
                <td>{subscriber.Email}</td>
                <td>{subscriber.Phone}</td>
                <td>{subscriber.Comment}</td>
                {/* <td>{subscriber.Chosen ? "True" : "False"}</td> */}
                <td>
                  <div className="btn-cntr">
                    <button
                      className="comment-button"
                      onClick={() => {
                        handleToggleSelect(subscriber.SubscriberId);
                        handleUpdateChosenStatus(
                          subscriber.SubscriberId,
                          !subscriber.Chosen
                        );
                      }}
                    >
                      {renderButtonText(subscriber)}
                    </button>
                    <button
                      className="remove-button"
                      onClick={() =>
                        handleRemoveSubscription(subscriber.SubscriberId)
                      }
                    >
                      Se désabonner
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
