import {string} from "prop-types";

const devLogger = (...messages : any) => {
    if (process.env.REACT_APP_ENV === 'development') {
        console.log(messages.toString());
    }
}
export default devLogger;
