import Layout from "../../components/layout/layout";
import theme from "../../theme";
import {ThemeProvider} from "@mui/material";
import {multipleMenus} from "../../components/header/nav-drawer/drawer.data";
import {Route, Routes} from "react-router";
import {PATH} from "../../resources/constants";
import routes from "./main.data";
import Dashboard from "../dashboard";

export default function Main(props: any) {
    return (
        <ThemeProvider theme={theme}>
            <Layout title={'React App'} isMultipleDrawerMenus={true} drawerMenuItems={multipleMenus}>
                <Routes>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            route.path === PATH.LOGIN_SCREEN ? (
                                <Route path={'/home/dashboard'} element={<Dashboard/>}/>
                            ) : (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={<route.component/>}
                                />
                            )
                        ) : null;
                    })}
                    <Route path={PATH.DASHBOARD_SCREEN} element={<Dashboard/>}/>
                </Routes>
            </Layout>
        </ThemeProvider>
    )
}
