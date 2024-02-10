import React from "react";
import "./destinations.css";
import { Header_, Footer_, Sub_ } from "../content";
import { CardDest } from "../components";
import bg_dest from "../asset/bg/bg-destinations.jpg";
import {
  Malaysia,
  Maldive,
  Turkey,
  europe,
  Europe,
  Indonicia,
  Moroco,
  Qatar,
  Tanzania,
  Tunisia,
  UEA,
  Vietnam,
  Egypt,
} from ".";

const DestsList = ({ destinations }) => (
  <div className="subA__Cards-container section__margin">
    {destinations.map((Destin) => (
      <CardDest image={Destin.image} DestName={Destin.name} />
    ))}
  </div>
);
const Destinations = () => {
  const Sub_desc_dest =
    "Bienvenue sur notre page dédiée aux destinations extraordinaires de Sublime Travel. Plongez dans une collection soigneusement sélectionnée de lieux emblématiques et de joyaux cachés à travers le monde. Chaque destination raconte une histoire unique, une invitation à l'émerveillement et à l'aventure. Choisissez votre prochaine escapade et embarquez pour une aventure où le sublime est au rendez-vous à chaque étape.";
  const desc_dest = "Explorez des Horizons Sublimes avec Sublime Travel";
  const Dests = [
    { image: Maldive, name: "Maldive" },
    { image: Malaysia, name: "Malaysia" },
    { image: Turkey, name: "Turkey" },
    { image: Indonicia, name: "Indonesia" },
    { image: Vietnam, name: "Vietnam" },
    { image: Tanzania, name: "Tanzania" },
    { image: Europe, name: "Europe" },
    { image: Tunisia, name: "Tunisia" },
    { image: Egypt, name: "Egypt" },
    { image: Moroco, name: "Morocco" },
    { image: UEA, name: "United Arab Emirates" },
    { image: Qatar, name: "Qatar" },
  ];
  return (
    <div>
      <Header_
        Logo={bg_dest}
        Desc={desc_dest}
        SubDesc={Sub_desc_dest}
        BtnName={"Demand un devis"}
      />
      <DestsList destinations={Dests} />
      <Sub_ />
      <Footer_ />
    </div>
  );
};

export default Destinations;
