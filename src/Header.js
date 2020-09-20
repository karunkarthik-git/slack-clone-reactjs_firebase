import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTimeOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutlineOutlined";
import { useStateValue } from "./StateProvider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "./firebase";
function Header() {
  const [{ user }] = useStateValue();
  const logOut = () => {
    if (user) {
      auth.signOut();
    }
  };
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

      <div onClick={logOut} className="header__right">
        <ExitToAppIcon />
      </div>
    </div>
  );
}

export default Header;
