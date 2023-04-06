import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={`/`}>Home</Link>
      <Link to={`about`}>About</Link>
      <Link to={`contact`}>Contact</Link>
      <Link to={`friends`}>Friends</Link>
    </div>
  );
};

export default Header;
