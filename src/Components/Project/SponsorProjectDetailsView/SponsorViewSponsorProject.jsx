import React from "react";
import { Helmet } from "react-helmet";
const SponsorViewSponsorProject = ({ data, owner }) => {
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
          <div className="container project-details mt-5">
            <div className="jumbotron">
              <p className="mobilePrjectDescription">{data.description}</p>
              <p className="project-detailed-info mt-5">Available in:</p>
              <div className="project-detailed-info">
                {data.reach.map(county => (
                  <ul key={county}>
                    <span className="ml-1">{county}</span>
                  </ul>
                ))}
              </div>
            </div>
            <p className="project-detailed-info text-center mt-5">
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
          <div>
            <p className="project-detailed-info text-center mt-5">
              Applications till:{" "}
              <span className="text-danger">
                {data.deadline.substring(0, 10)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorViewSponsorProject;
