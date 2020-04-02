import React from 'react'

const BlogFeaturedImage = props => {

  if (!props.img) {
    return null;
  } 

  return (
    <div className="featured-image-wrapper">  
      <img src={props.mg} />
    </div> 
  )
}

export default BlogFeaturedImage;