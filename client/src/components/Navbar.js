import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import logo from "../asset/svg/logoW.svg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
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
    <div className="subA__navbar">
      <div className="subA__navbar-links">
        <div className="subA__navbar-links_logo">
          <img onClick={()=>{Navigate('/')}} style={{ cursor:'pointer' }} src={logo} />
        </div>
      </div>
      <div className="subA__navbar-sign">
        <div className="subA__navbar-links_container">
          <Menu />
        </div>
        <button
          className="SignIn"
          type="button"
          onClick={() => Navigate("/signup")}
        >
          S'abonner
        </button>
      </div>
      <div className="subA__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="subA__navbar-menu_container scale-up-center">
            <div className="subA__navbar-menu_container-links">
              <Menu />
              <div className="subA__navbar-menu_container-links-sign">
                <button onClick={() => Navigate("/signup")} type="button">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
