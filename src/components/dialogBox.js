import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "./loadingButton";

export default function DialogBox({
  open,
  dialogTitle,
  modalContent,
  handleClose,
  handleSubmit,
  loading,
}) {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {dialogTitle && (
        <DialogTitle sx={{ padding: "20px" }}>{dialogTitle}</DialogTitle>
      )}
      <DialogContent sx={{ padding: "30px" }}>{modalContent}</DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
        <Button
          variant={"text"}
          color="secondary"
          onClick={handleClose}
          sx={{ textTransform: "none" }}
        >
          Cancel
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          color={"primary"}
          onClick={handleSubmit}
          loading={loading}
          sx={{ textTransform: "none" }}
        >
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
