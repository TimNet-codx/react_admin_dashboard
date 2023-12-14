import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataContacts} from "../../data/mockData";
import AdminPanelSettingsOutlined  from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined  from "@mui/icons-material/SecurityOutlined"; 
import Header from "../../components/Header";
import {useTheme} from "@mui/material";


const Contacts= () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns =[
      {field: "id", headerName: "ID", flex: 0.5},
      {field: "registrarId", headerName: "Registrar ID"},
      {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
      {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
      {field: "phone", headerName: "Phone Number", flex: 1},
      {field: "email", headerName: "Email"},
      {field: "address", headerName: "Address"},
      {field: "city", hraderName: "City"},
      {field: "zipCode", headerName: "ZipCode"},

    ]

    return (
      <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header
             title="CONTACTS"
             subtitle="The List of Contacts for Future Reference"
          />
          </Box>
          <Box m="10px 0 0 0" height="75vh" sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
             borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller": {
               backgroundColor: colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700], 
            },
            "& .MuiDataGrid-toolberContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`
            }
          }}>
            <DataGrid checkboxSelection
            rows={mockDataContacts}
            columns={columns}
            slots={{ Toolbar: GridToolbar }}
           // GridSlotsComponentsProps ={{toolbar: GridToolbar}}
           //GridSlotsComponent={{ toolbar: GridToolbar }}
            />
          </Box>
        </Box>
    )
}
export default Contacts;