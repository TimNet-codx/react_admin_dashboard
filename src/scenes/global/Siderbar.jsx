import { useState } from "react";
import {Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, colors, useTheme} from '@mui/material';
//import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from "../../theme";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlined from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlined  from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlined from "@mui/icons-material/HelpOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PieChartOutlined from "@mui/icons-material/PieChartOutlined";
import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import { MenuOpen } from "@mui/icons-material";
import MapOutlined from "@mui/icons-material/MapOutlined";
import { Link } from "react-router-dom";

const Item = ({title, to, icon, selected, setSelected}) =>{
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   const linkStyle = {
    textDecoration: "none", // Set text decoration to none
    color: colors.grey[600],
  };


   return(
    <Link to={to} style={linkStyle}>
    <MenuItem 
    active={selected === title}
    style={{color: colors.grey[600]}}
    onClick={() => setSelected(title)}
    icon={icon}
    >
        <Typography>{title}</Typography>
    </MenuItem>
    </Link>
   );
};

const Siderbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected ] = useState("Dashboard");

    return (
        <Box height="1000px" style={{ display: 'flex'} }                            
        sx={{
            "& .pro-sidebar-inner": {
                background:`${colors.primary[500]} !important`,
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            },
        }}>
            <Sidebar collapsed ={isCollapsed}
             rootStyles={{
                background:
                  'linear-gradient(180deg, #0b0b0b 0%, #0d0e0e 49%, #060707 100%)',
              }}
            >
                <Menu iconShape="square">
                     {/* LOGO AND MENU ICON */}
                     <MenuItem 
                     onClick={()=> setIsCollapsed(!isCollapsed)}
                     icon={isCollapsed ? <MenuOutlined/> : undefined}
                     style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100]
                     }}
                     >
                        {!isCollapsed && (
                            <Box 
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            >
                                <Typography variant="h6" color={colors.grey[900]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined/>
                                </IconButton>
                            </Box>
                        )}
                     </MenuItem>

                     {/* USER */}
                     {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`../../assets/user.png`}
                                style={{cursor: "pointer", borderRadius: "50%"}}
                                />

                            </Box>
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[900]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>Tim Net</Typography>
                                <Typography variant="h5" color={colors.greenAccent[400]}>Web Net Admin</Typography>
                            </Box>
                        </Box>
                     )}
                     {/* MENU ITEMs */}
                     <Box  paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={colors.grey[900]}
                        sx={{m: "15px 0 5px 20px"}}
                        >
                            Data
                        </Typography>
                         <Item
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlineOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Item
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactsOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Item
                        title="Invoices Balance"
                        to="/invoices"
                        icon={<ReceiptOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={colors.grey[900]}
                        sx={{m: "15px 0 5px 20px"}}
                        >
                            Pages
                        </Typography>
                         <Item
                        title="Porfile Form"
                        to="/form"
                        icon={<PersonOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Item
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarTodayOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Item
                        title="FAQ Page"
                        to="/faq"
                        icon={<HelpOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={colors.grey[900]}
                        sx={{m: "15px 0 5px 20px"}}
                        >
                            Chrats
                        </Typography>
                         <Item
                        title="Bar Chart"
                        to="/bar"
                        icon={<BarChartOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Item
                        title="Pie Chart"
                        to="/pie"
                        icon={<PieChartOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Item
                        title="Line Chart"
                        to="/line"
                        icon={<TimelineOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                          <Item
                        title="Geography Chart"
                        to="/geography"
                        icon={<MapOutlined/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        
                     </Box>
                </Menu>
            </Sidebar>;

        </Box>
    );
}
export default Siderbar;


