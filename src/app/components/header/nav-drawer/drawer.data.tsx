import Icon from "@material-ui/core/Icon";
import React from "react";
import {ExitToApp, Person} from "@material-ui/icons";


export class DrawerItems {
    static DASHBOARD_SCREEN = "Dashboard";
    static PROFILE_SCREEN = "Profile";
    static LOGOUT = "Logout";
}

export const singleMenu = [
    {
        label: DrawerItems.DASHBOARD_SCREEN,
        icon: <Icon className="fa fa-calendar"/>,
    },
];

export const multipleMenus = [[
    {
        label: DrawerItems.DASHBOARD_SCREEN,
        icon: <Icon className="fa fa-calendar"/>,
    },
], [
    {label: DrawerItems.PROFILE_SCREEN, icon: <Person/>},
    {label: DrawerItems.LOGOUT, icon: <ExitToApp/>},
]]
