import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="header">
      {/* <ActiveLink to={`/`}>Home</ActiveLink>
      <ActiveLink to={`about`}>About</ActiveLink>
      <ActiveLink to={`contact`}>Contact</ActiveLink>
      <ActiveLink to={`friends`}>Friends</ActiveLink>
      <ActiveLink to={`Posts`}>Posts</ActiveLink> */}

      <Link to={`/`}>Home</Link>
      <Link to={`about`}>About</Link>
      <Link to={`contact`}>Contact</Link>
      <Link to={`friends`}>Friends</Link>
      <Link to={`Posts`}>Posts</Link>
    </div>
  );
};

export default Header;
