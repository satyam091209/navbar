import "../navbar-style.css";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import { useState} from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <div className="container">
      <div className="navbar">

        <div>
          <h2 className="logo"> Logo </h2>
        </div>

        <div onClick={() => setShowMenu((prevValue) => !prevValue)} className="menuBar"> {showMenu ? <AiOutlineClose /> : <BiMenu/>} </div>

        <ul id="list" className={showMenu? "#list active": "#list"}>
          <li> <NavLink to="/"> Home </NavLink> </li>
          <li> <NavLink to="/about"> About </NavLink> </li>
          <li> <NavLink to="/contact"> Contact </NavLink></li>
          <li><NavLink to="/team"> Our Team</NavLink></li>
        </ul>

      </div>
    </div>
  );
}
