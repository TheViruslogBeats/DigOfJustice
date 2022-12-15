import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import newsState, { NewsType } from "../state/newsState";

import { observer } from "mobx-react-lite";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Props {}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "img", headerName: "URL_IMG", type: "image", width: 130 },
  {
    field: "title",
    headerName: "Title",
    width: 130,
    editable: true,
  },
  {
    field: "text",
    headerName: "Text",
    width: 600,
    editable: true,
  },
  { field: "createdAt", headerName: "createdAt", width: 130 },
  { field: "updatedAt", headerName: "updatedAt", width: 130 },
  {
    field: "settings",
    headerName: "Управление",
    width: 130,
    renderCell: (cell) => {
      console.log(cell);
      return (
        <Box sx={{ display: "flex", gap: "8px", justifyContent: "center", width: "100%" }}>
          <Button sx={{width: "36px", minWidth: "36px"}}>
            <EditIcon />
          </Button>
          <Button sx={{width: "36px", minWidth: "36px"}}>
            <DeleteIcon />
          </Button>
        </Box>
      );
    },
  },
];

const news = (props: Props) => {
  useEffect(() => {
    newsState.getNews();
  }, []);

  return (
    <MainLayout>
      
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={newsState.news}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <button
        onClick={() => {
          console.log(newsState.news);
        }}
      >
        LOG CHANGES
      </button>
    </MainLayout>
  );
};

export default observer(news);
