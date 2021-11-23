import {ACTIONS, MESSAGE, SnackbarType} from "../resources/constants";

// You can add more actions in this file

export const initialState = {
    type: ACTIONS.SNACKBAR,
    open: false,
    theme: "success",
    message: ""
}

export const successRegisterUser = {
    type: ACTIONS.SNACKBAR,
    open: true,
    theme: SnackbarType.SUCCESS,
    message: MESSAGE.REGISTER_USER_SUCCESS
}

export const errorRegisterUser = {
    type: ACTIONS.SNACKBAR,
    open: true,
    theme: SnackbarType.ERROR,
    message: MESSAGE.REGISTER_USER_ERROR
}

export const errorLoginUser = {
    type: ACTIONS.SNACKBAR,
    open: true,
    theme: SnackbarType.ERROR,
    message: MESSAGE.LOGIN_USER_ERROR
}

// Create your own action on runtime ------ This is highly not recommended

export const setSnackbar = (
    open: boolean,
    theme: string = "success",
    message: string = ""
) => ({
    type: ACTIONS.SNACKBAR,
    open,
    theme,
    message
});
