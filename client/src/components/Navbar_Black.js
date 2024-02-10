import React from "react";
import "./navbar_black.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../asset/svg/logo-black.svg";
const Navbar_Black = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Navigate = useNavigate();
  const Menu = () => (
    <>
      <p>
        <a onClick={() => Navigate("/")}>Accueil</a>
      </p>
      <p>
        <a onClick={() => Navigate("/destinations")}>Nos Destination</a>
      </p>
      <p>
        <a onClick={() => Navigate("/info")}>Nos Services</a>
      </p>
      <p>
        <a onClick={() => Navigate("/devis")}>Demande un devis</a>
      </p>
      <p>
        <a onClick={() => Navigate("/contact")}>Contact</a>
      </p>
    </>
  );
  return (
    <div className="subA__navbarB">
      <div className="subA__navbarB-links">
        <div className="subA__navbarB-links_logo">
          <img src={logo} />
        </div>
      </div>
      <div className="subA__navbarB-sign">
        <div className="subA__navbarB-links_container">
          <Menu />
        </div>
        <button
          className="SignInB"
          type="button"
          onClick={() => Navigate("/signup")}
        >
          S'abonner
        </button>
      </div>
      <div className="subA__navbarB-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="subA__navbarB-menu_container scale-up-center">
            <div className="subA__navbarB-menu_container-links">
              <Menu />
              <div className="subA__navbarB-menu_container-links-sign">
                <button onClick={()=>Navigate("/signup")} type="button">S'abonner</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar_Black;
