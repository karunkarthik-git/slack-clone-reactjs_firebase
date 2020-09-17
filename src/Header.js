import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTimeOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutlineOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt="Karun Karthik"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AUnknown-person.gif&psig=AOvVaw27c6BZyc-1UrWneIUKC92y&ust=1600399835969000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjz5JGg7-sCFQAAAAAdAAAAABAD"
        />
        {/*{user?.photoURL}*/}
        {/*{user?.displayName}*/}
        <AccessTimeIcon />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Clever Programmer" />
      </div>

      <div className="header__right">
        {/**Help Icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
