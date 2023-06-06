import UserList from "app/pages/userManagement/users/UserTabs";
import React from "react";
import Home from "../pages/home";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/user_management/users",
        element: <UserList />
    },
];

export default routes;