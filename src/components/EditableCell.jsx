import { TableCell } from '@mui/material';
import React from 'react'

const EditableCell = ({field, type, employee, editRowId, editedData,setEditedData}) => {


  return (
    <TableCell>
            {
                editRowId === employee.id ? (
                    <input 
                        type={type}                  
                        value={editedData?.[field] || ""}
                         onChange={(e) => 
                            setEditedData({
                                ...editedData,
                                [field]: e.target.value,
                            })
                        }
                    />
                ) : (
                    employee[field]
                )
            
            }
            </TableCell>
  );
};

export default React.memo(EditableCell)
