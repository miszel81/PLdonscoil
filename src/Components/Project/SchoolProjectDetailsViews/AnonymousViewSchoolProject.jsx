import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import "./SchoolProjectDetailsView.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AnonymousViewSchoolProject = ({ data, owner }) => {
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

          <div className="jumbotron project-details mt-3">
            <p className="project-detailed-info">
              {data.account.accountName}, {data.city}
            </p>
            <p>{data.description}</p>

            {/* Sam nie wiem czy lista counties jest tutaj potrzebna, raczej miejscowosc. */}
            {/* <p>Project reach:</p>
          {data.reach.map(county => (
            <p key={county}>{county}</p>
          ))} */}
            {/* <p className="project-detailed-deadline">
              You can support this project till {data.deadline.substring(0, 10)}
            </p> */}
            <div className="support-project">
              <div className="btn-group" role="group">
                {data.donateButton && (
                  // <p className="h-text-fontMainText text-center  mt-3">
                  //   Donations by direct transfer to:{" "}
                  //   {data.account.bankAccountNumber} quoting: {data.name}
                  // </p>
                  // <button type="button" className="btn btn-info">
                  //   Donate! <i className="fas fa-euro-sign"></i>
                  // </button>
                  <Link
                    to={`/projects/donate/${data._id}`}
                    className="btn btn-info text-light"
                  >
                    Donate <i className="fas fa-euro-sign"></i>
                  </Link>
                )}
                {data.otherSupportButton && (
                  <button className="btn btn-warning">
                    <Link to={`/hand/project/${data._id}`}>
                      Help <i className="fas fa-people-carry"></i>
                    </Link>
                  </button>
                )}
              </div>
            </div>
          </div>
          <p className="project-detailed-info text-center">
            Project by {data.account.accountName}
          </p>
          <p className="project-detailed-info text-center">
            Contact {owner.firstName} for more info{" "}
          </p>
          <p className="project-detailed-info text-center">
            <a href={`mailto:${owner.email}`}>{owner.email}</a>
          </p>
          <p className="project-detailed-info text-center">
            <a href={`tel:${owner.phone}`}>{owner.phone}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnonymousViewSchoolProject;
