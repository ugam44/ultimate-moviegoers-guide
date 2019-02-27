import React from "react";
import { Link } from "react-router-dom";

let ImageCarousel = (({images, id, getImagePath}) => {
  return (
    <div id={id} className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators" style={{marginBottom: "0"}}>
        {images.map((_, index) => (
          <li key={index} data-target={`#${id}`} data-slide-to={index}></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={"carousel-item " + (index === 0 ? 'active' : '')} key={index}>
            <img src={getImagePath(image.path)} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block" style={{background: "rgba(0,0,0,0.6)", padding: "10px", bottom: "5px"}}>
              <h5><Link to={image.link || "#"} style={{color: "white", textDecoration: "underline"}}>{image.title}</Link></h5>
              <p style={{whiteSpace: "nowrap", overflowX: "hidden", textOverflow: "ellipsis"}}>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
})

export default ImageCarousel;