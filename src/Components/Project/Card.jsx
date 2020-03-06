import React from "react";
import "./Card.css";
import noImage from "../Layout/img/noImage.jpeg";
import { Link } from "react-router-dom";
import { FacebookShareButton } from "react-share";

const Card = ({ project }) => {
  return (
    <div className="cardBox">
      <div className="cardImage">
        <Link to={`/projects/${project._id}`}>
          <img
            src={project.imgUrl ? project.imgUrl : noImage}
            alt="donscoil school project"
          />
        </Link>
      </div>
      <div className="cardContent">
        <div className="cardBody">
          <div className="cardContentTitle">
            <p className="text-center">
              <Link to={`/projects/${project._id}`}>{project.name}</Link>
            </p>
            <p className="school-owner text-center green">
              {project.account.accountName}
            </p>
          </div>

          <div className="cardContentTeaser">
            <p>{project.teaser}</p>
          </div>
        </div>
      </div>
      <div className="cardContentButton">
        <div className="social-item">
          <FacebookShareButton
            url={`https://www.donscoil.ie/projects/${project._id}`}
            quote={`#${project.name}`}
          >
            <i className="fas fa-share-alt"></i>Share
          </FacebookShareButton>
        </div>
        <div className="social-item">
          <i className="fas fa-info"></i>
          <Link to={`/projects/${project._id}`}>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
