import React from "react";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

const menus = [
    {
        label: 'sidebar.menu.home',
        type: "section",
        children: [
            {
                uri: "/",
                label: 'Dashboard',
                type: "nav-item",
                icon: <ListAltOutlinedIcon sx={{fontSize: 20}}/>
            },
        ]
    },
    {
        label: 'sidebar.menu.user_management',
        type: "section",
        children: [
            {
                uri: "/user_management/users",
                label: 'Users',
                type: "nav-item",
                icon: <ListAltOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/user_management/roles",
                label: 'Roles',
                type: "nav-item",
                icon: <ListAltOutlinedIcon sx={{fontSize: 20}}/>
            },
            {
                uri: "/user_management/perissions",
                label: 'Permissions',
                type: "nav-item",
                icon: <ListAltOutlinedIcon sx={{fontSize: 20}}/>
            },
        ]
    },
];

export default menus;
