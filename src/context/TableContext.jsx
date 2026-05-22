import { createContext, useContext, useState } from "react";
import generateData from "../data/generateData";

const TableContext = createContext();

export const TableProvider = ({ children }) => {

  const [data, setData] = useState(() =>
    generateData(10000)
  );

  return (

    <TableContext.Provider
      value={{
        data,
        setData,
      }}
    >

      {children}

    </TableContext.Provider>
  );
};

export const useTable = () =>
  useContext(TableContext);