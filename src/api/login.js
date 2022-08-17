import { httpGet, httpPost } from "./fetch";

function hello() {
    return httpGet("/ping")
}

function greet() {
    return httpPost("/v1/hello", {})
}

function tryLogin(email) {
    return httpPost(`v1/login/${email}`, {})
}

export {
    hello,
    greet,
    tryLogin
}