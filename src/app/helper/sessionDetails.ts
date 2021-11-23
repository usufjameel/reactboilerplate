import devLogger from "./logger";
import {Application} from "../resources/constants";

export default class SessionDetails {
    static saveAccessToken(token?: string) {
        devLogger('Save token: ' + token);
        localStorage.setItem(Application.TOKEN_KEY, token ? token : "");
    }

    static saveCurrentUser(user: any) {
        localStorage.setItem(Application.CURRENT_USER_KEY, JSON.stringify(user))
    }

    static getCurrentUser() {
        return JSON.parse(localStorage.getItem(Application.CURRENT_USER_KEY) as string);
    }

    static getAccessToken() {
        let token = localStorage.getItem(Application.TOKEN_KEY);
        return token ? token : "";
    }

    static isUserLoggedIn() {
        return !!this.getAccessToken();
    }

    static clearStoredData() {
        localStorage.clear()
    }
}
