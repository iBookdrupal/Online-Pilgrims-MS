import { useState, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar.js";

import { AuthContext } from "./../../../context/auth.js";

const MenuBar = () => {
  const { user, logout } = useContext(AuthContext);

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handlItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <AdminNavbar />
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handlItemClick}
        as={Link}
        to="/"
      />

      <Menu.Item
        name="posts"
        active={activeItem === "posts"}
        onClick={handlItemClick}
        as={Link}
        to="/posts"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handlItemClick}
          as={Link}
          to="/login"
        />

        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handlItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );
  return menuBar;
};

export default MenuBar;
