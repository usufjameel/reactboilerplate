import {ACTIONS} from "../resources/constants";
import {initialState} from "../actions/responsive-dialog";

const responsiveDialog = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTIONS.LOGOUT:
            const {open, title, message, pLabel, nLabel, response} = action;
            return {
                ...state,
                open,
                title,
                message,
                pLabel,
                nLabel,
                response
            }
        default:
            return state;
    }
};

export default responsiveDialog;
