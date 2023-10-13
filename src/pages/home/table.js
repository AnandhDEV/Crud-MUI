import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";

import "./home.css";
import TableMenu from "../../components/tableMenu";
import Nodata from "../../components/nodata";
import { formKeys } from "../../utils/constants";
import ImportExportIcon from "@mui/icons-material/ImportExport";

export default function GridView({ rows, setRow, onClickEdit, onClickDelete }) {
  const [sort, setSort] = React.useState("asc");

  const handleEdit = (row) => {
    onClickEdit(row);
  };
  const handleDelete = (id) => {
    onClickDelete(id);
  };

  const handleSorting = (key) => {
    const temp = [...rows];
    temp.sort((a, b) => {
      if (sort === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return b[key] > a[key] ? 1 : -1;
      }
    });

    setRow(temp);
    setSort(sort === "asc" ? "desc" : "asc");
    localStorage.setItem("mockdata", JSON.stringify(temp));
  };

  return (
    <>
      <div className="table_container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              {formKeys.map((item, index) => (
                <TableCell key={index}>
                  <div className="table_cell_center">
                    <>{item.label}</>
                    <IconButton onClick={() => handleSorting(item.name)}>
                      <ImportExportIcon />
                    </IconButton>
                  </div>
                </TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={10}>
                  <Nodata />
                </TableCell>
              </TableRow>
            )}

            {rows?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.postalcode}</TableCell>
                <TableCell>
                  <TableMenu
                    handleEdit={() => handleEdit(row)}
                    handleDelete={() => handleDelete(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
