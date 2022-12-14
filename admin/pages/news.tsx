import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import newsState, { NewsType } from "../state/newsState";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { observer } from "mobx-react-lite";

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
    renderCell: (cell) => {
      console.log(cell)
      return (
        <h1>SYKA</h1>
      )
    }
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
