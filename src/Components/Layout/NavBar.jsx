import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Layout/NavBar.css";
import ScrollLock, { TouchScrollable } from "react-scrolllock";

// import SearchBox from "../Common/SearchBox";
class NavBar extends Component {
  state = { menuOpen: false };

  handleMenuClick = () => {
    this.setState(st => ({
      menuOpen: st.menuOpen ? false : true
    }));
  };

  // checkType() {
  //   if (!this.props.user) {
  //     return true;
  //   }
  //   if (this.props.user.type === "Sponsor") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  renderSearch = () => {
    if (this.props.user.type === "Sponsor") {
      return (
        <Link to="/forsponsors" style={{ color: "#fff" }}>
          search
        </Link>
      );
    } else if (this.props.user.type === "School") {
      return (
        <Link to="/search" style={{ color: "#fff" }}>
          search
        </Link>
      );
    }
  };

  setMobileClasses = () => {
    return this.state.menuOpen ? "mobileMenuShow" : "mobileMenuHide";
  };

  render() {
    const { user } = this.props;

    return (
      <div className="menu">
        <div className="Navbar-container">
          <div className="Navbar-brand">
            <Link to="/">donscoil</Link>
          </div>
          <div className="toggleContainer">
            <Link to="#" className="toggle" id="navHamburger">
              <i className="fas fa-bars fa-2x" onClick={this.handleMenuClick} />
            </Link>
          </div>
          {/* <div className="Navbar-items">  
            <div className="Navbar-item">
              <SearchBox />
            </div>
          </div> */}
          <div className="Navbar-items">
            {!user && (
              <div className="Navbar-item">
                <Link to="/ourmission">about</Link>
              </div>
            )}
            {!user && (
              <div className="Navbar-item">
                <Link to="/forschools">schools</Link>
              </div>
            )}

            {/* {this.props.user.type === "School" && (
              <div className="Navbar-item">
                <Link to="/search">search</Link>
              </div>
            )} */}

            {/** Conditional rendering dashboard */}

            {/** Conditional rendering login/logout */}
            {!user && (
              <div className="Navbar-item">
                <Link to="/forsupporters">supporters</Link>
              </div>
            )}
            {!user && (
              <div className="Navbar-item">
                <Link to="/contact">contact us</Link>
              </div>
            )}
            {!user && (
              <div className="Navbar-item">
                <Link to="/login">login</Link>
              </div>
            )}

            {/** Conditional rendering dashboard */}

            {user && <div className="Navbar-item">{this.renderSearch()}</div>}

            {user && (
              <div>
                <div className="Navbar-item">
                  <Link to="/dashboard">dashboard</Link>
                </div>
              </div>
            )}

            {user && (
              <div>
                <div className="Navbar-item">
                  <Link to="/logout">logout</Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={this.setMobileClasses()}>
          {this.state.menuOpen && (
            <ScrollLock>
              <div className="Mobile-items">
                {!user && (
                  <div className="Mobile-item">
                    <Link to="/ourmission" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>what we do?</span>
                    </Link>
                  </div>
                )}
                {!user && (
                  <div className="Mobile-item">
                    <Link to="/forschools" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>
                        <span className="">initiatives for schools</span>
                      </span>
                    </Link>
                  </div>
                )}
                {!user && (
                  <div className="Mobile-item">
                    <Link to="/forsupporters" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>
                        support school projects
                      </span>
                    </Link>
                  </div>
                )}
                {!user && (
                  <div className="Mobile-item">
                    <Link to="/register/school" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>register</span>{" "}
                      school
                    </Link>
                  </div>
                )}
                {!user && (
                  <div className="Mobile-item">
                    <Link to="/contact" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>contact us</span>{" "}
                    </Link>
                  </div>
                )}

                {!user && (
                  <div className="Mobile-item-login">
                    <Link to="/login" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>
                        <span style={{ color: "#ff893f" }}>
                          login <i className="fas fa-lock"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                )}

                {user && (
                  <div className="Mobile-item">{this.renderSearch()}</div>
                )}

                {user && (
                  <div className="Mobile-item">
                    <Link to="/dashboard" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>dashboard</span>
                    </Link>
                  </div>
                )}
                {user && (
                  <div className="Mobile-item">
                    <Link to="/projects/new/create" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>
                        create <span className="green">new</span> project
                      </span>
                    </Link>
                  </div>
                )}
                {user && (
                  <div className="Mobile-item">
                    <Link
                      to={`/projects/account/${user.account}`}
                      style={{ color: "#fff" }}
                    >
                      <span onClick={this.handleMenuClick}>
                        see all your projects
                      </span>
                    </Link>
                  </div>
                )}
                {user && (
                  <div className="Mobile-item">
                    <Link to="/contact" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>contact us</span>
                    </Link>
                  </div>
                )}
                {user && (
                  <div className="Mobile-item-login">
                    <Link to="/logout" style={{ color: "#fff" }}>
                      <span onClick={this.handleMenuClick}>logout</span>
                    </Link>
                  </div>
                )}
              </div>
            </ScrollLock>
          )}
        </div>
      </div>
    );
  }
}

export default NavBar;
