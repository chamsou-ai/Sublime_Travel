import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signup.css";
import Modal from "react-modal";
import { NavBar_Black } from "../components";
import { Footer_, Sub_ } from "../content";
import { useNavigate, useLocation } from "react-router-dom";

Modal.setAppElement("#root");

const Signup = () => {
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    question: "",
  });
  const [telephoneError, setTelephoneError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Parse email from URL parameters when the component mounts
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get("email");

    if (emailParam) {
      setFormData((prevFormData) => ({ ...prevFormData, email: emailParam }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "telephone") {
      validateTelephone(value);
    }
  };

  const validateTelephone = (value) => {
    const isValid = /^\d{10}$/.test(value);
    setTelephoneError(
      isValid ? "" : "Le numéro de téléphone doit comporter 10 chiffres"
    );
  };

  const sendEmail = async (data) => {
    try {
      await axios.post("http://localhost:3001/subscriber-send-email", data);
      setSuccessModalIsOpen(true);
      console.log("Email sent successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const { firstName, lastName, email, telephone, question } = formData;

    if (!firstName || !lastName || !email || !telephone || !question) {
      console.error("All fields must be filled out");
      // Handle the validation error, e.g., display an error message to the user
      return;
    }

    validateTelephone(telephone);

    if (telephoneError) {
      // If there is a telephone number error, prevent form submission
      return;
    }

    try {
      // Make a POST request to your backend endpoint with specific fields
      await axios.post("http://localhost:3001/subscribers/insert", {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: telephone,
        Comment: question,
        Chosen: false,
        AdminId: 1, // Change this to the appropriate AdminId
      });
      sendEmail(formData);
      // Handle success, e.g., show the success modal
      setSuccessModalIsOpen(true);

      // You might want to wait for the user to close the modal before redirecting
      // Navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <NavBar_Black />
      <div className="subA__SignUp-container">
        <form onSubmit={handleSubmit}>
          <p className="subA__SignUp-welcome">
            Inscrivez-vous ici pour toutes les infos et promos.
          </p>
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom de famille"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {telephoneError && <p className="error-message">{telephoneError}</p>}
          <input
            type="number"
            name="telephone"
            placeholder="Telephone"
            required
            onChange={handleChange}
          />
          <textarea
            name="question"
            rows="5"
            className="subA__contact-question-input"
            placeholder="Dites-nous ce que vous pensez..."
            onChange={handleChange}
          ></textarea>
          <button type="submit">S'abonner</button>
        </form>
      </div>
      <Footer_ />
      <Modal
        isOpen={successModalIsOpen}
        onRequestClose={() => setSuccessModalIsOpen(false)}
        contentLabel="Success Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div>
          <p>
            Email envoyé avec succès ! Nous examinerons votre demande et vous
            contacterons ultérieurement.
          </p>
          <button onClick={() => navigate("/")}>
            Aller à la page d'accueil
          </button>
          <button onClick={() => setSuccessModalIsOpen(false)}>Fermer</button>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;
