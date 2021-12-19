import axios from "axios";
import cookie from "react-cookies"
import { respToJson } from "../utils";
import { APIURL } from "../utils/const";

export default function ApiCall(options = {}){
    options["headers"] = {...(options["headers"] || {})}
    if(cookie.load("cred") && !options.apiUrl)options["headers"]["Authorization"] = `Bearer ${cookie.load("cred")}`
    options.url = (options.apiUrl || APIURL) + options.path

    let errorHandler = err => {
        console.error(err, "error")
    }

    return new Promise((resolve, reject) => {
        axios(options)
        .then(respToJson)
        .then(resp => {
            if(!resp){
                throw new Error("no response")
            }
            if(!resp.success){
                throw new Error(resp.message || "unkown error")
            }
            resolve(resp)
        })
        .catch(err => {
            err = (options.responseType || "") === "text" ? err.response.data : err
            errorHandler(err)
            reject(err)
        })
    })
}