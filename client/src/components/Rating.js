import React, { useState, useEffect } from "react";
import axios from "axios";
import "./rating.css";
import manImg1 from "../asset/others/user.png";

const Rating = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [currentSubscriberIndex, setCurrentSubscriberIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fetchChosenSubscribers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/subscribers/chosen`);
        setSubscribers(response.data); // Update subscribers with chosen subscribers
      } catch (error) {
        console.error("Error fetching chosen subscribers:", error);
      }
    };

    fetchChosenSubscribers();
  }, []);

  useEffect(() => {
    if (subscribers.length > 1) {
      const interval = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setCurrentSubscriberIndex(
            (prevIndex) => (prevIndex + 1) % subscribers.length
          );
          setFade(false);
        }, 500);
      }, 5000);

      return () => clearInterval(interval);
    } else {
      setFade(false);
    }
  }, [subscribers]);

  const currentSubscriber = subscribers[currentSubscriberIndex];

  // Check if there are no comments or the chosen value is false, return null to not render the component
  if (subscribers.length === 0 || !currentSubscriber?.Chosen) {
    return null;
  }

  return (
    <div className={`subA__rating-container ${fade ? "fade-out" : ""}`}>
      <h2
        className="subA_title"
        style={{ textAlign: "center", marginBottom: "0px" }}
      >
        Ce que disent nos clients à notre sujet ?
      </h2>
      <div className={`subA__rating-commentair ${fade ? "fade-out" : ""}`}>
        <div className="subA__rating-commentair-Img_name">
          <div>
            <img src={manImg1} alt={`User ${currentSubscriberIndex + 1}`} />
          </div>
          <p>
            {currentSubscriber?.FirstName} {currentSubscriber?.LastName}
          </p>
        </div>
        <p className="subA__rating-commentair-text">
          {currentSubscriber?.Comment || "No comments available"}
        </p>
      </div>
      <div className="subA__rating-stars-container">
        <p className="subA__rating-dotted-slide">...</p>
      </div>
    </div>
  );
};

export default Rating;
