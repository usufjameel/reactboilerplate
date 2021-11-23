import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import "./app.scss";
import {PATH} from "./resources/constants";
import SessionDetails from "./helper/sessionDetails";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useSelector} from "react-redux";
import Login from "./pages/login";
import AppSnackbar from "./components/appSnackbar";
import ProtectedRoute from "./components/protectRoute";
import ResponsiveDialog from "./components/responsive-dialog";
import Main from "./pages/container/main";

const loading = () => (
    <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App() {
    return (
        <div>
            <Backdrop
                className="backdrop"
                open={useSelector((state: any) => state.loadingReducer.loading)}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <AppSnackbar/>
            <ResponsiveDialog/>
            <BrowserRouter>
                <React.Suspense fallback={loading()}>
                    <Routes>
                        <Route path={PATH.LOGIN_SCREEN} element={<Login/>}/>

                        <Route
                            path={PATH.MAIN_SCREEN}
                            element={
                                <ProtectedRoute
                                    validator={() => SessionDetails.isUserLoggedIn()}
                                    component={Main}
                                />
                            }
                        />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
