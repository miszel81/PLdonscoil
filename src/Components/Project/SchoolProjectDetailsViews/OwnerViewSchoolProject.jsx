import React from "react";
import { Link } from "react-router-dom";
import { deleteProject } from "../../../services/projectService";
import { Helmet } from "react-helmet";
import CustomButton from "../CustomButton";

const OwnerViewSchoolProject = ({
  data,
  owner,
  projectId,
  deleteHandler,
  activateHandler,
  activateRenderHandler,
  hands
}) => {
  deleteHandler = () => {
    deleteProject(data._id);
    window.location = `/projects/account/${owner.account}`;
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
            <div className="container img-display mb-3">
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

          <h1>Support</h1>
          <div className="jumbotron project-details-header">
            {data.otherSupportButton ? (
              <p>
                <Link to={`/hands/${data._id}`}>Hands:</Link>
                <span className="green">{hands.length}</span>{" "}
              </p>
            ) : null}
            {data.donateButton ? <p>Donates: </p> : null}
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
            <Link
              to={`/projects/edit/${projectId}`}
              className="btn btn-warning"
            >
              Edit
            </Link>
            <CustomButton
              value={activateRenderHandler()}
              className={"btn btn-dark"}
              onClick={() => {
                activateHandler();
              }}
            />
            {/* <Link to="/close" className="btn btn-dark disabled">
              Unpublish
            </Link> */}
            <button
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerViewSchoolProject;

// <div className="container">
//       {/* <img height="100px" src={pythonLogo} alt="boi" />{" "} */}
//       {data.imgUrl ? (
//         <div className="container img-display">
//           <img src={data.imgUrl} alt="donscoil" />
//         </div>
//       ) : null}
//       <div className="jumbotron">
//         <div>
//           <h3 className="mt-3 text-center">{data.name} </h3>
//           <p>Teaser: {data.teaser}</p>
//           {/* <p>Counties:</p>
//           {data.reach.map(county => (
//             <p key={county}>{county}</p>
//           ))} */}
//           <p>End Date: {data.deadline.substring(0, 10)}</p>
//           <p>Contact Person: {owner.firstName}</p>
//           <p>Email: {owner.email}</p>
//           <div className="btn-group" role="group" aria-label="Basic example">
//             <Link
//               to={`/projects/edit/${projectId}`}
//               className="btn btn-warning"
//             >
//               Edit
//             </Link>
//             <Link to="/close" className="btn btn-dark">
//               Close
//             </Link>
//             <button
//               className="btn btn-danger"
//               onClick={() => {
//                 if (
//                   window.confirm(
//                     "ARE YOU SURE YOU WANT TO DELETE THIS PROJECT!? "
//                   )
//                 )
//                   deleteHandler();
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
