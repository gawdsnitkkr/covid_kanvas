import React from "react";
import { NavLink } from "react-router-dom";
import corona from "../../../coronavirus.ico";

import "./navbar.css";
import "font-awesome/css/font-awesome.min.css";

class NavBar extends React.Component {
  myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  render() {
    return (
      <div className="NavBar">
        <div className="topnav" id="myTopnav">
          <NavLink to="/" exact>
            <img
              src={corona}
              alt="coronaicon"
              style={{
                width: "9%",
                marginLeft: "-10px",
                backgroundColor: "white",
              }}
            />{" "}
            COVID-19 INDIA
          </NavLink>
          <NavLink to="/faq/" exact className="Faq">
            <i className="fa fa-question-circle" aria-hidden="true"></i> FAQs
          </NavLink>
          <NavLink to="/suggestion/" exact className="suggestions">
            <i className="fa fa-lightbulb-o" aria-hidden="true"></i> Suggestions
          </NavLink>
          <NavLink to="/about" className="about">
            <i className="fas fa-virus"></i>About COVID-19
          </NavLink>
          <button
            className="icon"
            onClick={this.myFunction}
            style={{
              backgroundColor: "transparent",
              color: "white",
              fontSize: "20px",
              padding: "13px",
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default NavBar;
