import axios from 'axios';
import {BASE_URL} from "./constants";
import SessionDetails from "../helper/sessionDetails";
import logger from "../helper/logger";


class Request {

    static getAxiosInstance() {
        const axiosInstance = axios.create({
            baseURL: BASE_URL
        });
        axiosInstance.defaults.headers.common['Authorization'] = SessionDetails.getAccessToken();
        axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
        axiosInstance.defaults.headers.common['Accept'] = 'application/json';
        logger("Current token: " + SessionDetails.getAccessToken())
        return axiosInstance;
    }

    static postApi(endPoint: string, payload: any, headers: any) {
        return new Promise((resolve, reject) => {
            this.getAxiosInstance().post(endPoint, payload, {headers: headers}).then(res => {
                logger("<============================> RESPONSE <============================>");
                logger(res);
                logger("<============================> END RESPONSE <============================>");
                resolve(res);
            })
                .catch(err => {
                    logger("<============================> ERROR <============================>");
                    logger(err);
                    logger("<============================> END ERROR <============================>");
                    reject(err);
                })
        })
    }

    static getApi(endPoint: string, headers: any) {
        return new Promise((resolve, reject) => {
            this.getAxiosInstance().get(endPoint, {headers: headers}).then(res => {
                    logger("<============================> RESPONSE <============================>");
                    logger(res);
                    logger("<============================> END RESPONSE <============================>");
                    resolve(res)
                }
            ).catch(err => {
                logger("<============================> ERROR <============================>");
                logger(err);
                logger("<============================> END ERROR <============================>");
                reject(err)
            })
        })
    }
}

export default Request
