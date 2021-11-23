import React, {useEffect} from 'react';
import './responsive-dialog.scss'
import Dialog from "@material-ui/core/Dialog";
import {useMediaQuery} from "@material-ui/core";
import {useTheme} from '@material-ui/core/styles';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {setResponsiveDialog} from "../../actions/responsive-dialog";
import {ResponsiveDialogActions} from "../../resources/constants";
import DialogActions from "@material-ui/core/DialogActions";
import devLogger from "../../helper/logger";

// const {dialogOpen, dialogTitle, dialogMessage, response}
const ResponsiveDialog = (props: any) => {
    const dispatch = useDispatch();
    const open = useSelector((state: any) => state.responsiveDialog.open);
    const title = useSelector((state: any) => state.responsiveDialog.title);
    const message = useSelector((state: any) => state.responsiveDialog.message);
    const pLabel = useSelector((state: any) => state.responsiveDialog.pLabel);
    const nLabel = useSelector((state: any) => state.responsiveDialog.nLabel);
    const response = useSelector((state: any) => state.responsiveDialog.response);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
        devLogger(props);
    }, [props])

    const handleClose = (event: any, reason: string) => {
        if (reason === "backdropClick") {
            return;
        }
        dispatch(setResponsiveDialog(false, title, message, pLabel, nLabel, response));
    };

    const handleNegative = (event: any, reason: string) => {
        if (reason === "backdropClick") {
            return;
        }
        if (response) {
            response(ResponsiveDialogActions.NEGATIVE)
        }
        dispatch(setResponsiveDialog(false, title, message, pLabel, nLabel, response));
    };

    const handlePositive = (event: any, reason: string) => {
        if (reason === "backdropClick") {
            return;
        }
        if (response) {
            response(ResponsiveDialogActions.POSITIVE)
        }
        dispatch(setResponsiveDialog(false, title, message, pLabel, nLabel, response));
    };

    const handleClick = (action: any) => { // positive & negative
        if (response) {
            response(action)
            dispatch(setResponsiveDialog(false, title, message, pLabel, nLabel, response
            ));
        }
    }


    return <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={(e) => handleNegative(e, "")} color="primary">
                {nLabel}
            </Button>
            <Button onClick={(e) => handlePositive(e, "")} color="primary" autoFocus>
                {pLabel}
            </Button>
        </DialogActions>
    </Dialog>
}

export default ResponsiveDialog;
