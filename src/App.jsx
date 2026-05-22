import React, { useMemo, useState } from "react";
import EditableTable from "./components/EditableTable";
import generateData from "./data/generateData";

const App = () => {
  const [data, setData] = useState(() => generateData(10000));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management Dashboard</h1>
      <EditableTable />
    </div>
  );
};

export default App;
