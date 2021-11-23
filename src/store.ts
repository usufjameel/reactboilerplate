import {combineReducers, createStore} from 'redux'
import loadingReducer from "./app/reducers/loading";
import snackbarReducer from "./app/reducers/snackbar";
import responsiveDialogReducer from "./app/reducers/responsive-dialog";

const reducer = combineReducers({
    snackbar: snackbarReducer,
    loadingReducer: loadingReducer,
    responsiveDialog: responsiveDialogReducer
});

export default createStore(reducer, {});
