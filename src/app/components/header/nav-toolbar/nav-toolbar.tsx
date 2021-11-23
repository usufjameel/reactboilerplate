import React from 'react';
import './nav-toolbar.scss'
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    }
}));


const NavToolbar = (props: any) => {
    const classes = useStyles();
    return <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, props.open && classes.hide)}>
            <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap className={clsx(props.open && classes.hide)}>
            {props.title}
        </Typography>
    </Toolbar>;
}
export default NavToolbar;
