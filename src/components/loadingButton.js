import { Button, CircularProgress } from "@mui/material";
import React from "react";

function LoadingButton({ children, loading, ...additionalprops }) {
  return (
    <>
      <Button disabled={loading} {...additionalprops}>
        {children} &nbsp;
        {loading && (
          <>
            <CircularProgress
              style={{ height: "20px", width: "20px" }}
              color="inherit"
            />
          </>
        )}
      </Button>
    </>
  );
}

export default LoadingButton;
