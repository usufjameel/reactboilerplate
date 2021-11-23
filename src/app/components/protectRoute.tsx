import React from "react";
import {Navigate, Outlet, Route, useLocation} from "react-router";
import PropTypes from "prop-types";
import {PATH} from "../resources/constants";
import logger from "../helper/logger";

const ProtectedRoute = (props : any) => {
    logger(props.validator());
    return props.validator() ? <props.component /> : <Navigate to={PATH.LOGIN_SCREEN} />;
};

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    validator: PropTypes.func.isRequired,
};

export default ProtectedRoute;
