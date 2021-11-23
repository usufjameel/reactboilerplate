import React, {Suspense, useEffect} from "react";
import './layout.scss';
import clsx from "clsx";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Route, Routes, useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useMediaQuery} from "@material-ui/core";
import {DRAWER_WIDTH, PATH} from "../../resources/constants";
import Header from "../header";
import Footer from "../footer";
import {DrawerItems} from "../header/nav-drawer/drawer.data";
import routes from "../../pages/container/main.data";
import Dashboard from "../../pages/dashboard";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    contentMobile: {
        flexGrow: 1,
        padding: theme.spacing(3),
        overflow: "auto",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -DRAWER_WIDTH,
        overflow: "auto",
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        overflow: "auto",
    },
    mainFooter: {
        alignSelf: "flex-end",
    }
}));

const loading = () => (
    <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

export default function Layout(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

    useEffect(() => {
    }, [props]);

    const route = () => {
        return (
            <Routes>
                {routes.map((route, idx) => {
                    return route.component ? (
                        route.path === PATH.LOGIN_SCREEN ? (
                            <Route path="/home/dashboard"/>
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
        );
    };


    return (
        <div className={classes.root}>
            <Header title={props.title} page={props.page} isMultipleDrawerMenus={props.isMultipleDrawerMenus}
                    drawerMenuItems={props.drawerMenuItems} onDrawerStateChange={(o: boolean) => setOpen(o)}/>
            <main
                className={
                    isSmallScreen
                        ? clsx(classes.contentMobile)
                        : clsx(classes.content, {
                            [classes.contentShift]: open,
                        })
                }>
                <div className={classes.drawerHeader}/>
                <Suspense fallback={loading()}>{route()}</Suspense>
            </main>
            {/*<Footer/>*/}
        </div>
    );
}
