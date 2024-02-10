import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./contact.css";
import { NavBar_Black } from "../components";
import { useNavigate } from "react-router-dom";
import { Footer_ } from "../content";
import location from "../asset/Contact/Location.png";
import { BestPrice, EasyBook, Customer } from ".";

Modal.setAppElement("#root");
const Contact = () => {
  const Navigate = useNavigate();
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const sendEmail = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/send-question-email`, data);
      setSuccessModalIsOpen(true);
      console.log("Email sent successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      emailC: e.target.elements.emailC.value,
      question: e.target.elements.question.value,
    };
    sendEmail(formData);
  };
  return (
    <div>
      <NavBar_Black />
      <div className="subA__contact-container">
        <form onSubmit={handleSubmit}>
          <p className="subA__contact-welcome" style={{ fontWeight: "500" }}>
            Bienvenue
          </p>
          <input
            type="text"
            placeholder="Prénom"
            name="firstName"
            required
          />
          <input type="text" placeholder="Nom de famille" name="lastName" required />
          <input type="email" placeholder="Email" name="emailC" required />
          <textarea
            name="question"
            rows="5"
            required
            className="subA__contact-question-input"
            placeholder="Poser une question"
          ></textarea>
          <button type="submit">Soumettre</button>
        </form>
        <div className="subA__contact-loc">
          <img src={location} />
          <div
            className="buttonContainer"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <button
              href="facebook.com"
              className="devis-button notVisible slide-top"
            >
              <a
                target="_blank"
                href="https://maps.app.goo.gl/LefchxfKhcNDVpZ5A"
              >
                Obtenir des Directions
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="subA_property-container-contact notVisible section__margin">
        <div className="subA_properties-contact">
          <img src={BestPrice} />
          <p>Garantie du meilleur prix</p>
        </div>
        <div className="subA_properties-contact">
          <img src={EasyBook} />
          <p>Réservation facile et rapide</p>
        </div>
        <div className="subA_properties-contact">
          <img src={Customer} />
          <p>Service client 24/7</p>
        </div>
      </div>
      <hr style={{ backgroundColor: "#0D2857", height: "3px" }} />
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
          Email envoyé avec succès ! Nous examinerons votre demande et vous contacterons ultérieurement.
          </p>
          <button onClick={() => Navigate("/")}>Aller à la page d'accueil</button>
          <button onClick={() => setSuccessModalIsOpen(false)}>Fermer</button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
