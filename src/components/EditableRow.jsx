import React, { useState } from "react";

import { TableRow, TableCell } from "@mui/material";

import { FaEdit, FaSave } from "react-icons/fa";
import { MdCancel, MdUndo } from "react-icons/md";
import EditableCell from "./EditableCell";
import { useTable } from "../context/TableContext";

const EditableRow = ({ employee }) => {
    const {data, setData} = useTable();
  const [editRowId, setEditRowId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [previousData, setPreviousData] = useState(null);

  return (
    <TableRow key={employee.id}>
      <TableCell>{employee.id}</TableCell>

      <EditableCell
        field="name"
        type="text"
        employee={employee}
        editRowId={editRowId}
        editedData={editedData}
        setEditedData={setEditedData}
      />

      <EditableCell
        field="email"
        type="email"
        employee={employee}
        editRowId={editRowId}
        editedData={editedData}
        setEditedData={setEditedData}
      />

      <EditableCell
        field="department"
        type="text"
        employee={employee}
        editRowId={editRowId}
        editedData={editedData}
        setEditedData={setEditedData}
      />

      <EditableCell
        field="salary"
        type="number"
        employee={employee}
        editRowId={editRowId}
        editedData={editedData}
        setEditedData={setEditedData}
      />

      <EditableCell
        field="age"
        type="number"
        employee={employee}
        editRowId={editRowId}
        editedData={editedData}
        setEditedData={setEditedData}
      />

      <EditableCell
        field="phone"
        type="text"
        employee={employee}
        editRowId={editRowId}
        editedData={editedData}
        setEditedData={setEditedData}
      />

      <TableCell>
        {editRowId === employee.id ? (
          <>
            <button
              onClick={() => {
                setPreviousData(employee);

                const updatedData = data.map((item) =>
                  item.id === employee.id ? editedData : item,
                );

                setData(updatedData);

                setEditRowId(null);
              }}
            >
              <FaSave />
            </button>

            <button
              onClick={() => {
                setEditRowId(null);
              }}
            >
              <MdCancel />
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setEditRowId(employee.id);
              setEditedData(employee);
            }}
          >
            <FaEdit />
          </button>
        )}
        <button
          onClick={() => {
            if (!previousData) return;
            const undoData = data.map((item) =>
              item.id === employee.id ? previousData : item,
            );

            setData(undoData);
          }}
        >
          <MdUndo />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default React.memo(EditableRow);
