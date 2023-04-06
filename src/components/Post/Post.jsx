import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const detailsHandler = () => {
    navigate(`/posts/${post.id}`);
  };
  return (
    <div className="post">
      <h2>Post No: {post.id} </h2>
      <h3>Title: {post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`}>Show more...</Link>
      <button onClick={detailsHandler}>Details</button>
    </div>
  );
};

export default Post;
