import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Header_, Sub_, Footer_ } from "../content";
import { devisBg, reserv1 } from ".";
import "./devis.css"; // Make sure to adjust the path based on your project structure

Modal.setAppElement("#root");

const Devis = () => {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [destinationselected, setdestinationselected] = useState("");

  const [telephoneError, setTelephoneError] = useState("");
  const [idPassportError, setIdPassportError] = useState("");

  const handleServiceTypeChange = (e) => {
    setSelectedServiceType(e.target.value);
  };
  const handledestinationselected = (e) => {
    setdestinationselected(e.target.value);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/send-email`, data);
      setSuccessModalIsOpen(true);
      console.log("Email sent successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { phoneNumber, idPassportNumber } = e.target.elements;

    if (phoneNumber.value.length !== 10) {
      setTelephoneError("Le numéro de téléphone doit comporter 10 chiffres");
      return;
    } else {
      setTelephoneError(""); // Clear the error if the phone number is valid
    }

    if (idPassportNumber.value.length !== 18) {
      setIdPassportError(
        "Le numéro d'identité/passport doit comporter 18 chiffres"
      );
      return;
    } else {
      setIdPassportError(""); // Clear the error if the ID/passport number is valid
    }

    const formData = {
      serviceType: e.target.elements.serviceType.value,
      serviceDate: e.target.elements.serviceDate.value,
      destination: e.target.elements.destination.value,
      adults: e.target.elements.adults.value,
      children: e.target.elements.children.value,
      fullName: e.target.elements.fullName.value,
      birthDate: e.target.elements.birthDate.value,
      idPassportNumber: e.target.elements.idPassportNumber.value,
      phoneNumber: e.target.elements.phoneNumber.value,
      email: e.target.elements.email.value,
      europeDestination:
        destinationselected === "Europe"
          ? e.target.elements.europeDestination.value
          : "", // Include europeDestination only when selectedServiceType is Europe
    };

    sendEmail(formData);
  };

  const Sub_desc_devis =
    "Sublime Travel, votre agence de tourisme et de voyage en Algérie Prix et Services Exclusifs sur une sélection d'offres partenaires";
  const desc_devis = "Explorez des Horizons Sublimes avec Sublime Travel";

  return (
    <div>
      <Header_
        Logo={devisBg}
        Desc={desc_devis}
        SubDesc={Sub_desc_devis}
        Btn={"none"}
      />
      <div className="subA__devis-container">
        <form onSubmit={handleSubmit}>
          <table className="devis-table">
            <tbody>
              <tr>
                <td colSpan="2">
                  <h2 className="subA_title-devisPage">
                    Informations sur le service
                  </h2>
                </td>
              </tr>
              <div className="subA__devis-info_content">
                <tr>
                  <td>
                    <label>
                      Type de service <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    <select
                      name="serviceType"
                      onChange={handleServiceTypeChange}
                      required
                    >
                      <option disabled selected>
                        Sélectionnez un service
                      </option>
                      <option>Billet d'avion</option>
                      <option>Assistance Visa</option>
                      <option>Voyage Organisé</option>
                      <option>Omra</option>
                      <option>Réservation d'hôtel</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Date de service <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td required>
                    <input name="serviceDate" type="date" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      className={selectedServiceType === "Omra" ? "hidden" : ""}
                    >
                      Destination <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    <select
                      name="destination"
                      className={selectedServiceType === "Omra" ? "hidden" : ""}
                      onChange={handledestinationselected}
                      required
                    >
                      <option disabled selected>
                        Sélectionnez un destination
                      </option>
                      <option>Algérie</option>
                      <option>Malaysia</option>
                      <option>Maldive</option>
                      <option>Turkey</option>
                      <option>Indonesia</option>
                      <option>Vietnam</option>
                      <option>Tanzania</option>
                      <option>Europe</option>
                      <option>Tunisia</option>
                      <option>Egypt</option>
                      <option>Morocco</option>
                      <option>United Arab Emirates</option>
                      <option>Qatar</option>
                    </select>
                    <input
                      name="europeDestination"
                      type="text"
                      className={
                        destinationselected === "Europe" ? "" : "hidden"
                      }
                      placeholder="Specify destination in Europe"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Nombre de personnes (Adultes){" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    <input name="adults" required type="number" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Nombre de personnes (Enfants){" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    <input name="children" required type="number" />
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
          <table className="devis-table">
            <tbody>
              <tr>
                <td colSpan="2">
                  <h2 className="subA_title-devisPage">
                    Informations personnelles
                  </h2>
                </td>
              </tr>
              <div className="subA__devis-info_content">
                <tr>
                  <td>
                    <label>
                      Nom et prénom <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    <input name="fullName" type="text" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Date de naissance <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    <input name="birthDate" type="date" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Numéro de ID ou passeport{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    {idPassportError && (
                      <p className="error-message">{idPassportError}</p>
                    )}
                    <input name="idPassportNumber" type="number" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Numéro de téléphone{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    {telephoneError && (
                      <p className="error-message">{telephoneError}</p>
                    )}
                    <input name="phoneNumber" type="number" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Email <span style={{ color: "red" }}>*</span>
                    </label>
                  </td>
                  <td>
                    <input name="email" type="email" required />
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
          <div className="btn_devisPage">
            <button type="submit" className="devis-buttonPage slide-top">
              Envoyer
            </button>
          </div>
        </form>
        <img src={reserv1} alt="reservation" />
      </div>
      <Sub_ />
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
          <button onClick={() => Navigate("/")}>
            Aller à la page d'accueil
          </button>
          <button onClick={() => setSuccessModalIsOpen(false)}>Fermer</button>
        </div>
      </Modal>
    </div>
  );
};

export default Devis;
