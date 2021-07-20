import React from "react";
import { Button } from "@material-ui/core";
import Registration from "./Registration.jsx";
const RegistrationList = () => {
  const [button, setButton] = React.useState("");
  return (
    <div className="main-content">
      <Button variant="contained" color="primary">
        <strong>
          <a style={{ color: "white" }} href={"/registration"}>
            Update Profile
          </a>
        </strong>
      </Button>
    </div>
  );
};
export default RegistrationList;
