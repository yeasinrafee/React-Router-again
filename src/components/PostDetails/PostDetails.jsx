import React from "react";
import "./PostDetails.css";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div className="detail">
      <h2>
        Users Id: {post.userId} <span>Post Number: ${post.id}</span>
      </h2>
      <h3>Title: {post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
<h2>Post Details</h2>;
