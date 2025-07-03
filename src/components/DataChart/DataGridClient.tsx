import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";

const DataGridClient = (props: any) => (
  <DataGrid slots={{ loadingOverlay: LinearProgress }} {...props} />
);

export default DataGridClient;
