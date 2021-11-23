import {ACTIONS} from "../resources/constants";
import {initialState} from "../actions/snackbar";

const snackbar =  (state = initialState, action: { type?: any; open?: any; message?: any; theme?: any; }) => {
    switch (action.type) {
        case ACTIONS.SNACKBAR:
            const {open, message, theme} = action;
            return {
                ...state,
                open,
                theme,
                message
            }
        default:
            return state;
    }
};

export default snackbar;
