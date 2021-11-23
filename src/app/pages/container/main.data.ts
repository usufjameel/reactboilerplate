import React from "react";
import {PATH, TITLE} from "../../resources/constants";

const Profile = React.lazy(() => import(`../profile`));
const Dashboard = React.lazy(() => import(`../dashboard`));

const routes = [
    {path: PATH.MAIN_SCREEN, exact: true, name: TITLE.MAIN_SCREEN},
    {path: PATH.DASHBOARD_SCREEN, name: TITLE.DASHBOARD_SCREEN, component: Dashboard},
    {path: PATH.PROFILE_SCREEN, name: TITLE.PROFILE_SCREEN, component: Profile},
];

export default routes;
