import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import { Helmet } from "react-helmet";

const SchoolViewSchoolProject = ({ data, owner }) => {
  return (
    <div className="container">
      <Helmet>
        <title>{data.name}</title>
        <meta name="description" content={data.description} />
      </Helmet>
      <div className="jumbotron">
        <h3>
          <span className="badge badge-light">Category</span>
          <span className="badge badge-secondary">{data.category}</span>
        </h3>
        <div>
          {data.imgUrl ? (
            <div className="container img-display">
              <img src={data.imgUrl} alt="donscoil" />
            </div>
          ) : null}
          <p className="mt-3 text-center project-title">{data.name} </p>
          <p className="project-detailed-info text-center">
            {data.account.accountName}, {data.city}
          </p>

          <div className="project-details-share mt-3">
            <FacebookShareButton
              url={`https://www.donscoil.ie/projects/${data._id}`}
              quote={`Project: ${data.name}`}
            >
              <i className="fab fa-facebook-square fa-2x"></i>
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://www.donscoil.ie/projects/${data._id}`}
              quote={`Project: ${data.name}`}
            >
              <i className="fab fa-twitter-square fa-2x"></i>
            </TwitterShareButton>
            <WhatsappShareButton
              url={`https://www.donscoil.ie/projects/${data._id}`}
              quote={`Project: ${data.name}`}
            >
              <i className="fab fa-whatsapp-square fa-2x"></i>
            </WhatsappShareButton>
          </div>

          <div className="container project-details mt-5">
            <div className="jumbotron">
              <p>{data.description}</p>
            </div>
          </div>

          <p className="project-detailed-info text-center">
            Project by {data.account.accountName}
          </p>
          <p className="project-detailed-info text-center">
            Contact {owner.firstName} for more info{" "}
          </p>
          <p className="project-detailed-info text-center">
            <span className="green">
              <a href={`mailto:${owner.email}`}>{owner.email}</a>
            </span>
          </p>
          <p className="project-detailed-info text-center">
            <a href={`tel:${owner.phone}`}>{owner.phone}</a>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SchoolViewSchoolProject;
