import {ACTIONS} from "../resources/constants";

export const initialState = {
    type: ACTIONS.LOGOUT,
    open: false,
    title: "Alert",
    message: "Message",
    pLabel: "Ok",
    nLabel: "Cancel",
}

export const setResponsiveDialog = (
    open: boolean = true,
    title: string = "Alert",
    message: any,
    pLabel: string = "OK",
    nLabel: string = "Cancel",
    response: any
) => ({
    type: ACTIONS.LOGOUT,
    open,
    title,
    message,
    pLabel,
    nLabel,
    response
});
