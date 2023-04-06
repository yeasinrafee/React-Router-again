import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>Post No: {post.id} </h2>
      <h3>Title: {post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`}>Show more...</Link>
    </div>
  );
};

export default Post;
