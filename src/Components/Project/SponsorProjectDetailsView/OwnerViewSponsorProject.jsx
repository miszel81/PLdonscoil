import React from "react";
import { Link } from "react-router-dom";
import { deleteProject } from "../../../services/projectService";
import { Helmet } from "react-helmet";
import CustomButton from "../CustomButton";

const OwnerViewSponsorProject = ({
  data,
  props,
  owner,
  projectId,
  campaign,
  deleteHandler,
  activateHandler,
  activateRenderHandler
}) => {
  deleteHandler = () => {
    deleteProject(data._id);
    console.log("datat.account: ", data.account);
    props.history.push(`/projects/account/${data.account._id}`);
    // window.location = `/projects/account/${data.account}`;
  };

  let statusBadge = "badge badge";
  if (data.isActivated) {
    statusBadge += "-success";
  } else {
    statusBadge += "-secondary";
  }

  return (
    <div className="container ownerView">
      <Helmet>
        <title>{data.name}</title>
        <meta name="description" content={data.description} />
      </Helmet>
      <div className="jumbotron">
        <h3>
          <span className="badge badge-light">Category</span>
          <span className="badge badge-secondary">{data.category}</span>
        </h3>
        <h3>
          <span className="badge badge-light">Status</span>
          <span className={statusBadge}>
            {data.isActivated ? "Active" : "Inactive"}
          </span>
        </h3>
        <div>
          {data.imgUrl ? (
            <div className="container img-display">
              <img src={data.imgUrl} alt="donscoil" />
            </div>
          ) : null}
          <h1 className="mt-3">Project name</h1>
          <div className="jumbotron project-details-header">
            <p>"{data.name}"</p>
          </div>

          <h1 className="mt-3">Date</h1>
          <div className="jumbotron project-details-header">
            <p>{data.deadline.substring(0, 10)}</p>
          </div>

          <h1 className="mt-3">Available in</h1>
          <div className="jumbotron project-details-header">
            <div className="project-detailed-info">
              {data.reach.map(county => (
                <p key={county}>
                  <span className="ml-1">{county}</span>
                </p>
              ))}
            </div>
          </div>

          <h1>Teaser</h1>
          <div className="jumbotron project-details-header">
            <p>{data.teaser}</p>
            {/* <p>
              Donations to:{" "}
              <span className="green description">
                {data.account.bankAccountNumber}
              </span>
            </p> */}
          </div>
          <h1>Description</h1>
          <div className="jumbotron project-details-header">
            <p>
              <span className="description">{data.description}</span>
            </p>
            {/* <p>
              Donations to:{" "}
              <span className="green description">
                {data.account.bankAccountNumber}
              </span>
            </p> */}
          </div>

          <h1>Statistics</h1>
          <div className="jumbotron project-details-header">
            <p>
              <Link to={`applicants/${data._id}`}>Participants:</Link>
              <span className="green ml-1">
                {campaign.numberOfParticipants}
              </span>{" "}
            </p>
            <p>
              Watching:{" "}
              <span className="green ">{campaign.numberOfObservers}</span>
            </p>
          </div>
          <h1>Project owner</h1>
          <div className="jumbotron project-details-header">
            <p>
              Name: <span className="green">{owner.firstName}</span>{" "}
            </p>
            <p>
              Email: <span className="green ">{owner.email}</span>
            </p>
            <p>
              Phone: <span className="green ">{owner.phone}</span>
            </p>
          </div>

          <div className="btn-group" role="group" aria-label="Basic example">
            <Link to={`/projects/edit/${projectId}`} className="btn btn-info">
              Edit
            </Link>
            <CustomButton
              value={activateRenderHandler()}
              className={"btn btn-dark"}
              onClick={() => {
                activateHandler();
              }}
            />
            <button
              type="button"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Delete Project
            </button>
            <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Delete Project
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Please, confirm you wish to delete this project.
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteHandler();
                          // window.location = `/account/users/${this.props.user.account}`;
                        }}
                      >
                        Delete Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button
              className="btn btn-danger"
              onClick={() => {
                if (
                  window.confirm(
                    "ARE YOU SURE YOU WANT TO DELETE THIS PROJECT!? "
                  )
                )
                  deleteHandler();
              }}
            >
              Delete project
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerViewSponsorProject;
