import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
// import { FaEdit, FaSave } from "react-icons/fa";
// import { MdCancel } from "react-icons/md";
import EditableRow from './EditableRow';
import './Editable.css';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { TextField, Button } from "@mui/material";
import { useTable } from "../context/TableContext";


const EditableTable = ({employee}) => {
  // const [editRowId, setEditRowId] = useState(null);
  // const [editedData, setEditedData] = useState({});
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const {data, setData} = useTable();

  const columns = [
    { accessorKey: "id",         header: "ID"         },
    { accessorKey: "name",       header: "Name"       },
    { accessorKey: "email",      header: "Email"      },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "salary",     header: "Salary"     },
    { accessorKey: "age",        header: "Age"        },
    { accessorKey: "phone",      header: "Phone"      },
    { accessorKey: "action",      header: "Action"      },
    
  ];

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleExportCSV = () => {
    const headers = ["ID", "Name", "Email", "Department", "Salary", "Age", "Phone"];
    const csvRows = data.map((employee) => [
      employee.id, employee.name, employee.email,
      employee.department, employee.salary, employee.age, employee.phone,
    ]);

    const csvContent = [
      headers.join(","),
      ...csvRows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employees.csv";
    link.click();
  };
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  return (
    <>
   
      <div className="table-toolbar">
        <TextField
          label="Search Employee..."
          variant="outlined"
          size="small"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="search-field"
        />
        <Button
          variant="contained"
          className="btn-export"
          onClick={handleExportCSV}
        >
          Export Data
        </Button>
      </div>

  
      <TableContainer component={Paper} className="table-container">

        

            <div className="pagination-controls">
              <select
          className="page-size-select"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
         <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center"
         }}>
           <Button
            variant="contained"
            className="btn-page"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="page-info">
            Page {table.getState().pagination.pageIndex + 1}
          </span>

          <Button
            variant="contained"
            className="btn-page"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
         </div>

          
        </div>

        
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    className="table-header-cell"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() === "asc"  && <span className="sort-icon">🔼</span>}
                    {header.column.getIsSorted() === "desc" && <span className="sort-icon">🔽</span>}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <EditableRow
                key={row.id}
                employee={row.original}
                
              />
            ))}
          </TableBody>
        </Table>

      </TableContainer>
    </>
  );
};

export default EditableTable;