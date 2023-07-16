import { MdOutlineLocationOn, MdOutlineSearch } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import React from "react";
import "./header.css";
import logo from "../../assets/logo1.png";

function Header() {
  return (
    <div className="max-width header">
      <div className="header-left" onClick={() => (window.location = "/")}>
        <img src={logo} alt="Find n' Dine" className="header-logo" />
      </div>

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name ">
              <MdOutlineLocationOn className="location-icon absolute-center" />
              <div>Nairobi</div>
            </div>
            <AiFillCaretDown className="absolute-center" />
          </div>

          <div className="location-separator"></div>

          <div className="header-searchbar">
            <MdOutlineSearch className="absolute-center search-icon" />
            <input
              placeholder="Search for restaurant, caffe or fast food"
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </div>

        <div className="profile-wrapper">
          <button
            id="outlined-button"
            onClick={() => (window.location = "/logout")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
