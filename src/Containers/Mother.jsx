import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Components/Layout/Layout";
import { getUser } from "../services/authServices";

class Mother extends Component {
  //  Version with localstorage
  render() {
    const user = getUser();
    // console.log("REACT_APP_API_KEY:", process.env.REACT_APP_API_KEY);
    // console.log("REACT_APP_SESSION_KEY:", process.env.REACT_APP_SESSION_KEY);
    // console.log("MARCIN_TEST:", process.env.REACT_APP_MARCIN_TEST);
    return (
      <div>
        <ToastContainer />
        {/** send user to layout or send null */}
        <Layout user={user} />
      </div>
    );
  }
}

export default Mother;

// Version with the state
// state = {
//   data: {
//     _id: "",
//     type: "",
//     role: "",
//     account: ""
//   },
//   loading: true,
//   loggedIn: false
// };

// componentDidMount() {
//   this.populateState();
// }
// async populateState() {
//   try {
//     const data = { ...this.state.data };
//     const userdata = await getUser();
//     console.log("MOther", userdata);
//     data._id = userdata._id;
//     data.type = userdata.type;
//     data.role = userdata.role;
//     data.account = userdata.account;
//     this.setState({ data, loading: false }); //, loading: false
//   } catch (error) {}
// }

// userHandler() {
//   if (this.state.data._id === "") {
//     return null;
//   } else {
//     return this.state.data;
//   }
// }

// render() {
// if (this.state.loading) {
//   return (
//     <div className="lds-roller">
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//   );
// }
//     return (
//       <div>
//         <ToastContainer />
//         {/** send user to layout or send null */}
//         <Layout user={this.userHandler()} />
//       </div>
//     );
//   }
// }
