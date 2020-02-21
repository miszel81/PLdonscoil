import React, { Component } from "react";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import { Helmet } from "react-helmet";

class SponsorViewSchoolProject extends Component {
  render() {
    const {
      data,
      owner,
      observeHandler,
      watchlistRenderHandler,
      unsupportHandler
    } = this.props;
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
              <div className="container img-display mt-3">
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
            <div className="container project-details mt-5">
              <div className="jumbotron">
                <p className="mobilePrjectDescription">{data.description}</p>
                <div className="btn-group">
                  {!this.props.disabledSupport ? (
                    <Link
                      to={`/projects/support/${this.props.data._id}`}
                      className="btn btn-info"
                    >
                      Support
                    </Link>
                  ) : (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        unsupportHandler();
                      }}
                    >
                      Withdraw support
                    </button>
                  )}
                  {/* <CustomButton
                    value={supportRenderHandler()}
                    className={"btn btn-outline-secondary"}
                    onClick={() => {
                      supportHandler();
                    }}
                  /> */}
                  {/* If project supported remove from watchlist is not needed. */}
                  {!this.props.disabledSupport && (
                    <CustomButton
                      value={watchlistRenderHandler()}
                      className={"btn btn-outline-secondary"}
                      onClick={() => {
                        observeHandler();
                      }}
                    />
                  )}
                </div>
                <p className="project-detailed-info mt-5">Available in:</p>
                <div className="project-detailed-info">
                  {data.reach.map(county => (
                    <ul key={county}>
                      <span className="ml-1">{county}</span>
                    </ul>
                  ))}
                </div>
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
        </div>
      </div>
    );
  }
}

export default SponsorViewSchoolProject;
