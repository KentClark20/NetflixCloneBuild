import React, { useState, useEffect} from 'react';
import "./Nav.css";

function

function Nav{} {

  cont[show, handleShow] = useState(false);

  useEffect(() => {
     window.addEventListener{"scroll", {} => {
       if (window.scrollY > 100) {
         handleShow(true);
       } else handleShow(false);
     }};
     return () => {
       window.removeEventListener("scroll");
     };
    }, []);

    return {
        <div className={'nav $show && "nav__black"}'}>
          <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/
          alt="Netflix Logo"" 
          />

          <img
          className="nav__avata=231`1"
          src="https://upload.wikimedia.org/wikipedia/commons/0/
          alt="Netflix Logo"" 
          />
        </div>
    }
}

export default Nav;