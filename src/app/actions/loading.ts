import {ACTIONS} from "../resources/constants";

export const initialState = {
    loading: false
};

export const startLoading = {
    type: ACTIONS.LOADING,
    payload: true
}

export const stopLoading = {
    type: ACTIONS.LOADING,
    payload: false
}
