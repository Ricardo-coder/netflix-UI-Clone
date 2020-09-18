import React, { useState, useEffect } from "react";
import NetflixLogo from "./assets/netflix-logo.png";

import "./Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={NetflixLogo} alt="Netflix Logo" />

      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
        alt="Avatar"
        className="nav_avatar"
      />
    </div>
  );
}
