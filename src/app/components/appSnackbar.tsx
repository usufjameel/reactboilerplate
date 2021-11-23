import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {makeStyles} from "@material-ui/core/styles";
import {setSnackbar} from "../actions/snackbar";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    }
}));

const AppSnackbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const open = useSelector((state: any) => state.snackbar.open);
    const theme = useSelector((state: any) => state.snackbar.theme);
    const message = useSelector((state: any) => state.snackbar.message);
    const handleClose = (event: any, reason: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(setSnackbar(false, theme, message));
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={(e) => handleClose(e,"")}>

                {/*<RationalizeSnackbar message={snackbarMessage}/>*/}

                <Alert
                    elevation={6}
                    variant="filled"
                    onClose={ (e) => handleClose(e,"")}
                    color={theme}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AppSnackbar;
