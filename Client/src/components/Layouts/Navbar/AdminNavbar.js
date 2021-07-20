import React, { useContext } from "react";
import { AuthContext } from "../../../context/auth.js";
import RegistrationList from "../../../components/Pages/Registration/RegistrationList.jsx";

const AdminNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <nav className="ui top fixed inverted menu">
        <div
          className="ui sidebar inverted vertical menu sidebar-menu"
          id="sidebar"
        >
          <div className="item">
            <div className="header">General</div>
            <div className="menu">
              <a className="item" href={"/dashboard"}>
                <div>
                  <i className="icon tachometer alternate"></i>
                  {user.username} Dashboard
                </div>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="header">Registration</div>
            <div className="menu">
              <a className="item" href="/registrationList">
                <div>
                  <i className="cogs icon"></i>Bio-Data
                </div>
              </a>
              <a className="item" href="/users">
                <div>
                  <i className="users icon"></i>Users
                </div>
              </a>
            </div>
          </div>

          <a href="#" className="item">
            <div>
              <i className="icon chart line"></i>
              Charts
            </div>
          </a>

          <a className="item">
            <div>
              <i className="icon lightbulb"></i>
              Generate Passports
            </div>
          </a>
          <div className="item">
            <div className="header">Other</div>
            <div className="menu">
              <a href="/batches" className="item">
                <div>
                  <i className="icon envelope"></i>
                  Batches
                </div>
              </a>

              <a href="#" className="item">
                <div>
                  <i className="icon dollar alternate"></i>
                  Generate Seat Nos
                </div>
              </a>

              <a href="#" className="item">
                <div>
                  <i className="icon user alternate"></i>
                  User Roles
                </div>
              </a>
              <a href="#" className="item">
                <div>
                  <i className="icon calendar alternate"></i>
                  Track Application
                </div>
              </a>
            </div>
          </div>
          <div className="ui segment inverted">
            <div className="ui tiny olive inverted progress">
              <div className="bar"></div>
              <div class="label">Registration Strength </div>
            </div>

            <div className="ui tiny teal inverted progress">
              <div className="bar"></div>
              <div className="label">Application Progress</div>
            </div>

            <a href="#!" className="item" onClick={logout}>
              <i className="sign-out icon"></i>
              Logout
            </a>
          </div>
        </div>

        <div className="right menu">
          <a href="#" className="item">
            <i className="bell icon"></i>
          </a>
          <div className="ui dropdown item">
            <i className="user cirlce icon"></i>

            <div className="menu">
              <a href="#" className="item">
                <i className="info circle icon"></i> Profile
              </a>
              <a href="#" className="item">
                <i className="wrench icon"></i>
                Settings
              </a>

              <a href="!#" onClick={logout} className="item">
                <i className="sign-out icon"></i>
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default AdminNavbar;
