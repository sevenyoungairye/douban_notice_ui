import { httpGet, httpPost } from './fetch'

// do subscribe
function doSub(data) {
    return httpPost("/v1/subscribe", data)
}

// get subscribe type list
function getSubType(userKey) {
    return httpGet(`/v1/sub/list/${userKey}`)
}

export {
    doSub,
    getSubType
}