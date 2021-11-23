import React from "react";
import {AppBar, CssBaseline, useMediaQuery} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import clsx from "clsx";
import NavToolbar from "./nav-toolbar";
import {DRAWER_WIDTH, PATH, ResponsiveDialogActions} from "../../resources/constants";
import NavDrawer from "./nav-drawer";
import {setResponsiveDialog} from "../../actions/responsive-dialog";
import SessionDetails from "../../helper/sessionDetails";
import {Routes, Route, useNavigate, Router} from "react-router";
import devLogger from "../../helper/logger";
import {DrawerItems} from "./nav-drawer/drawer.data";

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));


const Header = (props: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleDrawerOpen = () => {
        props.onDrawerStateChange(true);
        setOpen(true);
    };

    const handleDrawerClose = () => {
        props.onDrawerStateChange(false);
        setOpen(false);
    };

    const handleOnClickMenuItems = () => {
        if (isSmallScreen) {
            setOpen(false);
        }
    };

    const handleMenuClick = (menu: any) => {
        switch (menu) {
            case DrawerItems.DASHBOARD_SCREEN:
                navigate(PATH.DASHBOARD_SCREEN, {replace: true});
                break;
            case DrawerItems.PROFILE_SCREEN:
                navigate(PATH.PROFILE_SCREEN, {replace: true});
                break;
            case DrawerItems.LOGOUT:
                dispatch(
                    setResponsiveDialog(
                        true,
                        "Logout",
                        "Do you want to logout?",
                        "Logout",
                        "Cancel",
                        (action: any) => {
                            if (action === ResponsiveDialogActions.POSITIVE) {
                                SessionDetails.clearStoredData();
                                navigate(PATH.LOGIN_SCREEN, {replace: true});
                            }
                        }
                    )
                );
                break;
            default:
                break;
        }
        handleOnClickMenuItems();
    }

    return (
        <div>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <NavToolbar title={props.title} handleDrawerOpen={handleDrawerOpen} open={open}/>
            </AppBar>
            <NavDrawer
                title={props.title}
                isMultipleDrawerMenus={props.isMultipleDrawerMenus}
                drawerMenuItems={props.drawerMenuItems}
                handleDrawerClose={handleDrawerClose}
                handleMenuClick={handleMenuClick}
                open={open}
            />
        </div>
    )
}
export default Header;
