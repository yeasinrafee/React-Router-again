import React from "react";
import "./friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { email, name, id, phone } = friend;
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/friend/${id}`}>show more...</Link>
    </div>
  );
};

export default Friend;
