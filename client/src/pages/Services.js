import React from "react";
import "./services.css";
import { Header_, Sub_, Footer_ } from "../content";
import { CardRserv, CardTourism } from "../components";
import bg_serv from "../asset/bg/bg-services.jpg";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import passport from "../asset/others/passport.jpg";
import {
  Culturelle,
  reserv,
  billet,
  reserv1,
  Culture2,
  desert,
  touri1,
  touri2,
} from ".";
const TourismList = ({ deffTourism }) => (
  <div className="subA__Cards-container section__margin">
    {deffTourism.map((Tour) => (
      <CardTourism image={Tour.image} TourName={Tour.desc} />
    ))}
  </div>
);
const Services = () => {
  const Navigate = useNavigate();
  const Sub_desc_serv =
    "Bienvenue sur notre page dédiée à vous offrir une expérience de voyage inégalée. Chez Sublime Travel, nous nous engageons à fournir des services qui transcendent les attentes, créant des moments mémorables à chaque étape de votre voyage";
  const desc_serv = "Découvrez Nos Services Exceptionnels";
  const desc_tourism = [
    { image: desert, desc: "Tourisme Désertique" },
    { image: touri1, desc: "Tourisme Montagnard" },
    { image: touri2, desc: "Tourisme de Loisirs" },
    { image: Culture2, desc: "Tourisme Culturel et Religieux" },
  ];
  return (
    <div>
      <Header_
        Logo={bg_serv}
        Desc={desc_serv}
        SubDesc={Sub_desc_serv}
        BtnName={"Devis en ligne"}
      />
      <h2 className="subA_title">Voyages Organisés avec Sublime Travel</h2>
      <p className="subA_text-desc ">
        Plongez dans l'aventure avec nos Voyages Organisés, une immersion
        planifiée dans des destinations fascinantes à travers le monde. Explorez
        les merveilles des Maldives, la richesse historique de la Turquie, la
        diversité culturelle de l'Europe, l'ancienne beauté de l'Égypte,
        l'exotisme du Maroc, la nature sauvage de la Tanzanie, l'authenticité du
        Vietnam, la modernité du Qatar, la richesse culturelle de la Tunisie,
        l'exotisme de l'Indonésie, la sophistication des Émirats arabes unis, et
        la diversité culturelle de la Malaisie.
      </p>
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
      <p className="subA_sub-title">
        Découvrez les Services Exceptionnels de nos Voyages Organisés{" "}
      </p>
      <div>
        <p className="subA_sub-title">Hébergement Exquis :</p>
        <p className="subA_text-desc">
          Réservez des séjours dans des hôtels soigneusement sélectionnés pour
          une expérience de luxe et de confort.
        </p>
      </div>
      <div>
        <p className="subA_sub-title">Assistance Visa :</p>
        <p className="subA_text-desc section__margin">
          Simplifiez le processus de voyage avec notre service d'assistance pour
          l'obtention de visas, garantissant une planification sans tracas.
        </p>
      </div>
      <div className="subA__passport-img">
        <img src={passport} />
      </div>
      <div className="subA__services-culture">
        <div className="subA__services-culture-desc">
          <div>
            <p className="subA_sub-title section__margin">
              Exploration Culturelle :
            </p>
            <p className="subA_text-desc section__margin">
              Plongez au cœur de chaque destination avec notre section
              d'Exploration Culturelle. Sublime Travel vous invite à découvrir
              l'âme authentique de diverses régions à travers le monde. Nos
              visites guidées uniques, rencontres locales, événements culturels
              exclusifs, et dégustations de cuisine locale vous immergent dans
              l'histoire, les traditions et les saveurs de chaque lieu. Vivez
              une aventure où chaque moment devient une exploration profonde de
              la richesse culturelle du monde.
            </p>
          </div>
          <div className="buttonContainer">
            <button
              className="devis-button slide-top"
              onClick={() => Navigate("/devis")}
            >
              Devis en Ligne
            </button>
          </div>
        </div>
        <div>
          <img src={Culturelle} />
        </div>
      </div>
      <div>
        <p className="subA_sub-title">Réservations Faciles :</p>
        <p className="subA_text-desc section__margin">
          Profitez d'une réservation simplifiée pour vos vols, hôtels et
          activités, grâce à notre équipe dédiée.
        </p>
      </div>
      <div className="subA__services-reservation-container">
        <div className="subA__services-reserv">
          <img src={billet} />
          <div className="culture__card-text">
            <p>
              Voyagez avec aisance grâce à notre service de réservation de
              billets d'avion chez Sublime Travel. Nous simplifions la
              planification de vos vols en offrant une variété d'options, des
              vols directs aux itinéraires flexibles, avec des tarifs
              compétitifs. Bénéficiez d'une réservation sans tracas et d'une
              assistance constante pour des voyages en toute confiance, que
              votre destination soit proche ou lointaine. Sublime Travel vous
              accompagne tout au long de votre périple aérien
            </p>
          </div>
        </div>
        <div className="subA__services-reserv">
          <img src={reserv1} />
          <div className="culture__card-text">
            <p>
              Simplifiez votre expérience de voyage avec notre service de
              Réservation d'Hôtels chez Sublime Travel. Nous mettons à votre
              disposition une sélection minutieuse d'établissements, allant des
              retraites luxueuses aux hébergements pittoresques, pour répondre à
              toutes vos préférences. Profitez de réservations simples, d'une
              assistance personnalisée, et de tarifs compétitifs, garantissant
              un séjour inoubliable, quel que soit votre choix de destination
            </p>
          </div>
        </div>
      </div>
      <p className="subA_text-desc" style={{ textAlign: "center" }}>
        Que vous rêviez de plages paradisiaques, de sites historiques ou de
        découvrir des cultures exotiques, nos voyages organisés sont conçus pour
        vous offrir des expériences uniques et mémorables. Laissez-vous guider
        par Sublime Travel dans une aventure où chaque moment est une
        découverte.
      </p>
      <h2 className="subA_title">Tourisme Intérieur</h2>
      <p className="subA_text-desc ">
        Découvrez la beauté et la diversité de votre propre pays avec nos offres
        de tourisme intérieur. Chez Sublime Travel, nous vous invitons à
        explorer les richesses culturelles, les merveilles naturelles, et les
        trésors cachés de votre terre natale. Nos itinéraires soigneusement
        conçus vous offrent l'opportunité de vivre des expériences uniques à
        proximité, créant ainsi des souvenirs inoubliables sans quitter votre
        pays. Embarquez pour des aventures locales exceptionnelles et
        redécouvrez la magie de chez vous avec Sublime Travel.
      </p>
      <TourismList deffTourism={desc_tourism} />
      <div
        className="buttonContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <button
          className="devis-button slide-top"
          onClick={() => {
            Navigate("/devis");
          }}
        >
          Effectuez une demande de devis
        </button>
      </div>
      <Sub_ />
      <Footer_ />
    </div>
  );
};

export default Services;
