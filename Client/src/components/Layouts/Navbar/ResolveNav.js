import React, { useContext } from "react";
import MenuBar from "./MenuBar.js";
import AdminNavbar from "./AdminNavbar.js";
import { AuthContext } from "../../../context/auth";

const ResolveNav = () => {
  const user = useContext(AuthContext);
  return <>{user ? <MenuBar /> : <AdminNavbar />}</>;
};

export default ResolveNav;
