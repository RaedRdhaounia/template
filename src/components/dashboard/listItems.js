import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from '@mui/material/Divider';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReportIcon from "@mui/icons-material/Report";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

export const mainListItems = (
  <React.Fragment>

  </React.Fragment>
);



export const SecondaryListItems =()=>{ 
  const navigate = useNavigate()
  const AdminSetting = [
    { name: "Start Cold", nav: "/coldstart", icon: DashboardIcon, color: "black" },
    {
      name: "User Managment",
      nav: "/UserManagment",
      icon: ManageAccountsIcon,
      color: "gray",
    },
    { name: "Reports", nav: "/reports", icon: ReportIcon, color: "red" },
    {
      name: "Collections",
      nav: "/CollectionPage",
      icon: CollectionsBookmarkIcon,
      color: "orange",
    },
    {
      name: "Content Moderation",
      nav: "/",
      icon: AddModeratorIcon,
      color: "blue",
    },
    { name: "analytics", nav: "/Analystics", icon: AnalyticsIcon, color: "green" },
  ];
  
  
  return (
  <React.Fragment>
    <ListItemButton onClick={()=>navigate(`/admin`)}>
      {" "}
      <ListItemIcon>
        <AdminPanelSettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Admin dashboard" />
    </ListItemButton>
    <Divider />
    
    {AdminSetting.map(el=> <ListItemButton key={el.name}  style={{color: el.color}}  onClick={()=>navigate(`admin${el.nav}`)}>
   <Tooltip title={el.name}>
      <ListItemIcon>
        <el.icon  style={{color: el.color}}/>
      </ListItemIcon> 
      </Tooltip>
      <ListItemText primary={el.name}  />
      
    </ListItemButton>

    )}
   
  </React.Fragment>
)};
