import React from "react";
import "./FriendDetail.css";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2>Everything about friend is here</h2>
      <div className="friend-detail">
        <h1>Name: {data.name}</h1>
        <p>User Name: {data.username}</p>
        <p>Phone No: {data.phone}</p>
        <p>Website: {data.website}</p>
      </div>
    </div>
  );
};

export default FriendDetail;
