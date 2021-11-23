import React from "react";
import "./nav-drawer.scss";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";
import {DRAWER_WIDTH} from '../../../resources/constants'


const useStyles = makeStyles((theme) => ({
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
}));

const NavDrawer = (props: any) => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <Drawer
            className={classes.drawer}
            variant={isSmallScreen ? "temporary" : "persistent"}
            anchor="left"
            open={props.open}
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
                <strong>{props.title}</strong>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                        <ChevronLeftIcon/>
                    ) : (
                        <ChevronRightIcon/>
                    )}
                </IconButton>
            </div>
            <Divider/>
            <List>
                {
                    props.isMultipleDrawerMenus ? props.drawerMenuItems.map((menu: any, i: number) => {

                        return menu.map((menuItem: any, index: number) => {
                            return (
                                <div>
                                    <ListItem
                                        button
                                        key={menuItem.label}
                                        onClick={() => {
                                            props.handleMenuClick(menuItem.label);
                                        }}>
                                        <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                        <ListItemText primary={menuItem.label}/>
                                    </ListItem>
                                    {index === menu.length - 1 && i !== props.drawerMenuItems.length - 1 ?
                                        <Divider/> : null}
                                </div>
                            );
                        })


                    }) : props.drawerMenuItems.map((menuItem: any) => {
                        return (
                            <ListItem
                                button
                                key={menuItem.label}
                                onClick={() => {
                                    props.handleMenuClick(menuItem.label);
                                }}>
                                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                <ListItemText primary={menuItem.label}/>
                            </ListItem>
                        );
                    })
                }
            </List>
        </Drawer>
    );
}
export default NavDrawer;
