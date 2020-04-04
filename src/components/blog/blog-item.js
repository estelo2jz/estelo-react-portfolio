import React from 'react';
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import Truncate from "react-truncate";

const BlogItem = props => {
  const {
    id,
    blog_status,
    content,
    title,
    featured_image_url
  } = props.blogItem;

  return (
    <div className="blog-item-heading-container">
      <div className="blog-item-link-container">
        <Link to={`/b/${id}`}>      
          <h1 className="blog-item-heading-title">{title}</h1>
        </Link>
      </div>
      <div className="blog-item-content">
        <Truncate lines={5} ellipsis={
          <span>
            ... <Link to={`/b/${id}`}>Read more</Link>
          </span>
        }>{striptags(content)}</Truncate>
      </div>
    </div>
  );
};

export default BlogItem;