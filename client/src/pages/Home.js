import React from "react";
import "./home.css";
import { Footer_, Sub_, Header_ } from "../content";
import { CardDest, Rating } from "../components";
import { useNavigate } from "react-router-dom";

import logo from "../asset/svg/bg-home.png";
import {
  Malaysia,
  Maldive,
  Turkey,
  BestPrice,
  Customer,
  EasyBook,
  Avion,
  Voyage,
  ResrvHotel,
  Omra,
  Visa,
  Animated1,
  Animated2,
  Assurance,
  Culture5,
  Culture7,
  Culture1,
} from ".";

import { RiArrowRightUpLine } from "react-icons/ri";

const ServiceList = ({ services }) => (
  <div className="subA_services section__margin">
    {services.map((service) => (
      <div className="subA_service">
        <img src={service.image} alt={service.name} />
        <p>{service.name}</p>
      </div>
    ))}
  </div>
);
const Home = () => {
  const Navigate = useNavigate();
  const desc = "Trouvez Votre Prochaine Destination à Visiter";
  const Sub_desc = "Découvrez des endroits incroyables à des tarifs exclusifs";
  const Dests = ["Maldive", "Malaysia", "Turkey"];
  const serv = [
    { image: Avion, name: "Billet d'avion" },
    { image: Visa, name: "Assistance Visa" },
    { image: Voyage, name: "Voyage Organisè" },
    { image: Omra, name: "Omra" },
    { image: ResrvHotel, name: "Réservation d'hôtel" },
  ];
  return (
    <div>
      <Header_
        Logo={logo}
        Desc={desc}
        SubDesc={Sub_desc}
        BtnName={"Réserver Maintenant"}
      />
      <div className="forFlex">
        <h3 className="descSublime">
          Sublime Travel, votre agence de tourisme et de voyage en Algérie Prix
          et Services Exclusifs sur une sélections d'offres partenaires
        </h3>
      </div>
      <h2 className="subA_title">Destination</h2>
      <div className="dest_container section__margin">
        <div className="subA__Cards-container">
          <CardDest image={Maldive} DestName={Dests[0]} />
          <CardDest image={Malaysia} DestName={Dests[1]} />
          <CardDest image={Turkey} DestName={Dests[2]} />
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="subA_see-dests_btn"
            onClick={() => Navigate("/destinations")}
          >
            Voir toutes les destinations
            {/* <FontAwesomeIcon icon="fas fa-long-arrow-up" /> */}
            <RiArrowRightUpLine style={{ marginLeft: "5px" }} />
          </button>
        </div>
      </div>
      <div className="subA_prop-container section__margin">
        <div className="subA_animated-image">
          <img src={Animated1} />
        </div>
        <div className="subA_property-container">
          <div className="subA_properties">
            <img src={BestPrice} />
            <p>Garantie du meilleur prix</p>
          </div>
          <div className="subA_properties">
            <img src={EasyBook} />
            <p>Réservation facile et rapide</p>
          </div>
          <div className="subA_properties">
            <img src={Customer} />
            <p>Service client 24/7</p>
          </div>
        </div>
      </div>
      <h2 className="subA_title">Nos Services</h2>
      <div className="subA_sevices-container">
        <div className="subA_services-image">
          <img src={Animated2} />
        </div>
        <ServiceList services={serv} />
      </div>
      <h2 className="subA_title" style={{ textAlign: "center" }}>
        Assurance Voyage Sublime : L'Art du Voyage en Toute Sérénité
      </h2>
      <div className="subA__assurance-container">
        <div className="subA__assurance">
          <img className="assurance_image" src={Assurance} />
          <div className="assurance__content">
            <h4 className="assurance-desc slide-top">
              Explorez le monde en toute confiance avec l'assurance voyage de
              Sublime. Notre couverture complète, notre assistance 24h/24, et
              nos options personnalisables sont conçues pour offrir une
              tranquillité d'esprit absolue pendant vos aventures. Souscrire est
              simple, et notre équipe est là pour répondre à toutes vos
              questions. Voyagez avec assurance, créez des souvenirs
              inoubliables avec l'assurance voyage Sublime.
            </h4>
            <div className="buttonContainer">
              <button
                className="devis-button slide-top"
                onClick={() => Navigate("/devis")}
              >
                Devis en Ligne
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="subA__culture">
        <h2
          className="subA_title"
          style={{ textAlign: "center", marginBottom: "0" }}
        >
          Découvrez la Richesse Culturelle et Patrimoniale avec Sublime
        </h2>
        <div className="forFlex">
          <h3 className="descCulture">
            Chez Sublime, notre passion pour le voyage va au-delà des
            destinations. Nous vous invitons à explorer la richesse culturelle
            et patrimoniale du monde. Immergez-vous dans des expériences
            authentiques, des sites historiques emblématiques aux traditions
            locales envoûtantes.
          </h3>
        </div>
        <div className="culture__cards-container section__margin">
          <div className="culture__card-egypt">
            <img src={Culture5} />
            <div className="culture__card-text">
              <p>
                Avec Sublime, chaque voyage devient une ode à la diversité
                culturelle et à la préservation du patrimoine. Embarquez pour un
                périple qui célèbre l'essence même de chaque lieu, guidé par
                notre engagement envers une exploration significative et
                respectueuse. Bienvenue dans une aventure où chaque instant est
                une célébration de la beauté du monde.
              </p>
              <div className="culture__button-container">
                <button
                  className="culture__button slide-top"
                  onClick={() => Navigate("/info")}
                >
                  Découvrir
                </button>
              </div>
            </div>
          </div>
          <div className="culture__small-cards-container">
            <div className="culture__small-card">
              <img src={Culture1} />
            </div>
            <div className="culture__small-card">
              <img src={Culture7} />
            </div>
          </div>
        </div>
        <Rating />
        <Sub_ />
        <Footer_ />
      </div>
    </div>
  );
};

export default Home;
