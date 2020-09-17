import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTimeOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutlineOutlined";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Stack Clone" />
      </div>

      <div className="header__right">
        {/**Help Icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
