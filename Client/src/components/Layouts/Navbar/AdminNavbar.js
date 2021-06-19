import React, { useContext } from "react";
import { AuthContext } from "../../../context/auth.js";

const AdminNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <nav className="ui top fixed inverted menu">
        <div
          class="ui sidebar inverted vertical menu sidebar-menu"
          id="sidebar"
        >
          <div class="item">
            <div class="header">General</div>
            <div class="menu">
              <a class="item" href="/dashboard">
                <div>
                  <i class="icon tachometer alternate"></i>
                  {user.username} Dashboard
                </div>
              </a>
            </div>
          </div>
          <div class="item">
            <div class="header">Administration</div>
            <div class="menu">
              <a class="item">
                <div>
                  <i class="cogs icon"></i>Settings
                </div>
              </a>
              <a class="item" href="/posts">
                <div>
                  <i class="users icon"></i>Posts
                </div>
              </a>
            </div>
          </div>

          <a href="#" class="item">
            <div>
              <i class="icon chart line"></i>
              Charts
            </div>
          </a>

          <a class="item">
            <div>
              <i class="icon lightbulb"></i>
              Apps
            </div>
          </a>
          <div class="item">
            <div class="header">Other</div>
            <div class="menu">
              <a href="#" class="item">
                <div>
                  <i class="icon envelope"></i>
                  Messages
                </div>
              </a>

              <a href="#" class="item">
                <div>
                  <i class="icon calendar alternate"></i>
                  Calendar
                </div>
              </a>

              <a href="#" className="item" onClick={logout}>
                <i className="sign-out icon"></i>
                Logout
              </a>
            </div>
          </div>

          <div class="item">
            <form action="#">
              <div class="ui mini action input">
                <input type="text" placeholder="Search..." />
                <button class="ui mini icon button">
                  <i class=" search icon"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="ui segment inverted">
            <div class="ui tiny olive inverted progress">
              <div class="bar"></div>
              <div class="label">Monthly Bandwidth</div>
            </div>

            <div class="ui tiny teal inverted progress">
              <div class="bar"></div>
              <div class="label">Disk Usage</div>
            </div>
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
              <a href="#" onClick={logout} className="item">
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
