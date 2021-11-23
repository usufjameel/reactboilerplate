import {ACTIONS} from "../resources/constants";
import {initialState} from "../actions/loading";

const loading =  (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ACTIONS.LOADING:
            return {
                loading: action.payload
            }
        default:
            return state;
    }
};

export default loading;
