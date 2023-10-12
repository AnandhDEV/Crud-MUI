import React from "react";
import "./no-data.css";
import nodata_illustration from "../assets/no-data.svg";
import { Typography } from "@mui/material";

function Nodata() {
  return (
    <div className="nodata_main_container">
      <div className="illustration_container">
        <img src={nodata_illustration} alt="illustration"></img>
        <Typography variant="h6" color={"secondary"}>
          No contacts found
        </Typography>
      </div>
    </div>
  );
}

export default Nodata;
