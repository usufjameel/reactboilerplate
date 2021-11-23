export class Application {
    static TOKEN_KEY = 'token';
    static CURRENT_USER_KEY = 'currentUser';
}

export class SnackbarType {
    static SUCCESS = "success";
    static WARN = "warning";
    static INFO = "info";
    static ERROR = "error";
}

export class MESSAGE {
    static REGISTER_USER_SUCCESS = "Successfully registered.";
    static REGISTER_USER_ERROR = "Unable to register.";
    static LOGIN_USER_ERROR = "Unable to login.";
}

export class ACTIONS {
    static LOADING = "Loading";
    static SNACKBAR = "Snackbar";
    static LOGOUT = "Logout";
}

export class PATH {
    static LOGIN_SCREEN = "/";
    static MAIN_SCREEN = "/home/*";
    static DASHBOARD_SCREEN = "dashboard";
    static PROFILE_SCREEN = "profile";
}

export class TITLE {
    static LOGIN_SCREEN = "Login";
    static MAIN_SCREEN = "Home";
    static DASHBOARD_SCREEN = "Dashboard";
    static PROFILE_SCREEN = "Profile";
}

export const DRAWER_WIDTH = 240;

export class ResponsiveDialogActions {
    static POSITIVE = "positive";
    static NEGATIVE = "negative";
}
