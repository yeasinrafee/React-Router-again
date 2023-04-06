import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>Everything about friend is here</h2>
    </div>
  );
};

export default FriendDetail;
