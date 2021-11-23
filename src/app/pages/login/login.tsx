import React, {useEffect, useState} from "react";
import "./login.scss";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {Row} from "reactstrap";
import {PATH, SnackbarType} from "../../resources/constants";
import {getCopy} from "../../helper";
import {isFieldEmpty} from "../../helper/appValidation";
import Request from "../../api/request";
import {Endpoint, Status} from "../../api/constants";
import {useDispatch} from "react-redux";
import {errorLoginUser, setSnackbar,} from "../../actions/snackbar";
import SessionDetails from "../../helper/sessionDetails";
import {startLoading, stopLoading} from "../../actions/loading";
import {useNavigate} from "react-router";
import PasswordField from "../../components/passwordField";
import {FilledInput, IconButton, InputAdornment, ThemeProvider} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import devLogger from "../../helper/logger";
import theme from "../../theme";

export default function Login(props: any) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
        errorEmail: "",
        errorPassword: "",
        showPassword: false,
    });

    useEffect(() => {
        devLogger("is user login");
        devLogger(SessionDetails.isUserLoggedIn());
        if (SessionDetails.isUserLoggedIn()) {
            navigate('/home/dashboard');
            // SessionDetails.saveAccessToken();
        }
    }, [props]);

    const getValidation = () => {
        let updatedUser = getCopy(user);

        if (isFieldEmpty(user.email)) {
            updatedUser.errorEmail = "User email is mandatory.";
        } else {
            updatedUser.errorEmail = "";
        }

        if (isFieldEmpty(user.email)) {
            updatedUser.errorPassword = "Password is mandatory.";
        } else {
            updatedUser.errorPassword = "";
        }

        setUser(updatedUser);
        return isFieldEmpty(updatedUser.errorEmail) && isFieldEmpty(updatedUser.errorPassword);
    };

    const onSubmit = () => {
        if (getValidation()) {
            dispatch(startLoading);
            Request.postApi(props, Endpoint.LOGIN, {
                email: user.email,
                password: user.password,
            })
                .then((response: any) => {
                    if (response.data.statusCode === Status.API_SUCCESS) {
                        SessionDetails.saveAccessToken(
                            response.data.response.authorization
                        );
                        // getUserData();
                    } else {
                        dispatch(stopLoading);
                        dispatch(
                            setSnackbar(true, SnackbarType.ERROR, response.data.message)
                        );
                    }
                })
                .catch((err) => {
                    dispatch(stopLoading);
                    dispatch(errorLoginUser);
                    SessionDetails.saveAccessToken("Thisistoken");
                    navigate('/home/dashboard');
                });
        }
    };

    const handleChange = (event: any) => {
        let updatedUser = getCopy(user);
        updatedUser[event.target.name] = event.target.value;
        setUser(updatedUser);
    };

    const handleClickShowPassword = () => {
        let updatedUser = getCopy(user);
        updatedUser.showPassword = !user.showPassword;
        setUser(updatedUser);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={"component-login"}>
                <Row className="inner-div">
                    <Card className="login-card">
                        <div className="heading">Login</div>
                        <div className="content">
                            <form className="form">
                                <TextField
                                    id="email"
                                    name="email"
                                    className="input"
                                    required
                                    label="Email"
                                    value={user.email}
                                    onChange={handleChange}
                                    error={!isFieldEmpty(user.errorEmail)}
                                    helperText={user.errorEmail}
                                />
                                <br/>
                                <FormControl
                                    className={"input"}
                                    required
                                    variant="filled"
                                    error={!isFieldEmpty(user.errorPassword)}>
                                    <InputLabel>Password</InputLabel>
                                    <PasswordField
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        error={!!user.errorPassword}
                                        helpertext={user.errorPassword}
                                        visible={false}
                                    />
                                </FormControl>

                            </form>

                            <div className="login-footer">
                                <Button variant="contained" color="primary" onClick={onSubmit}>
                                    Login
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Row>
            </div>
        </ThemeProvider>
    );
}
