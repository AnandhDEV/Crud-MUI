import React, { useEffect, useState } from "react";
import GridView from "./table";
import "./home.css";
import { Button, Typography } from "@mui/material";
import ContactForm from "./form";
import { createPortal } from "react-dom";
import DialogBox from "../../components/dialogBox";
import { initialFormValues } from "../../utils/constants";

function Home() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [touched, setTouched] = useState({});
  const [formValues, setformValues] = useState(initialFormValues);
  const [isEdit, setisEdit] = useState(false);
  const [rows, setRow] = useState([]);

  useEffect(() => {
    setRow(JSON.parse(localStorage.getItem("mockdata")) ?? []);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTouched({});
    setisError(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    let { id, ...rest } = formValues;
    let values = Object.keys(rest);
    if (values.some((item) => formValues[item] === "")) {
      setisError(true);
    } else {
      setLoading(true);
      setTimeout(() => {
        if (isEdit) {
          let updated = rows.map((item, index) =>
            formValues.id === item.id ? formValues : item
          );
          setRow(updated);
          localStorage.setItem("mockdata", JSON.stringify(updated));
        } else {
          let created = [...rows, { ...formValues, id: rows.length + 1 }];
          setRow(created);
          localStorage.setItem("mockdata", JSON.stringify(created));
        }
        setisError(false);
        setLoading(false);
        setformValues(initialFormValues);
        handleClose();
      }, 2000);
    }
  };

  const onClickEdit = (values) => {
    setOpen(true);
    setisEdit(true);
    setformValues(values);
  };

  const onClickDelete = (id) => {
    let temp = rows.filter((item, index) => item.id !== id);
    setRow(temp);
    localStorage.setItem("mockdata", JSON.stringify(temp));
  };

  return (
    <>
      <div className="home_main_container">
        <div className="home_content_container">
          <div className="home_table_header_container">
            <Typography variant="h3" color={"secondary"}>
              Contact
            </Typography>

            <Button
              variant="contained"
              onClick={() => {
                handleOpen();
                setisEdit(false);
              }}
            >
              Add Contact
            </Button>
          </div>
          <div className="home_table_container">
            <GridView
              rows={rows}
              setRow={setRow}
              onClickEdit={(val) => onClickEdit(val)}
              onClickDelete={(id) => onClickDelete(id)}
            ></GridView>
          </div>
        </div>
      </div>
      {createPortal(
        <DialogBox
          open={open}
          dialogTitle={isEdit ? "Update contact" : "Add contact"}
          modalContent={
            <ContactForm
              touched={touched}
              setTouched={setTouched}
              isError={isError}
              formValues={formValues}
              setformValues={setformValues}
            />
          }
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          loading={loading}
        />,
        document.body
      )}
    </>
  );
}

export default Home;
