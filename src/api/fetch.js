// fetch api.
// https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

import { API_BASE_URL } from "/env.js";

function httpGet(url) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json;*/*');

    let myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    let myRequest = new Request(getReqUrl(url));

    return fetch(myRequest, myInit)
        .then(resp => {
            if (!resp.ok) {
                window.$message.error('bad service.');
                new Promise((r, _) => { })
            }
            return resp.json();
        }).then(res => {
            return new Promise((resolve, reject) => {
                if (res && res.code === 200) {
                    resolve(res)
                    return
                }
                window.$message.error(res.msg || "unknown err.");
                reject(res)
            })
        });
}

/**
 * post request.
 * @param {String} url the request url.
 * @param {Object} data the request data.
 * @returns promise callback.
 */
function httpPost(url, data) {
    let myHeaders = new Headers();
    // header show req data is json.
    myHeaders.append('Content-Type', 'application/json; charset=utf-8;');

    let myInit = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
    };

    if (data) {
        myInit.body = JSON.stringify(data)
    }

    let myRequest = new Request(getReqUrl(url));

    return fetch(myRequest, myInit)
        .then(resp => {
            if (!resp.ok) {
                window.$message.error('bad service.');
                return new Promise((r, _) => { })
            }
            return resp.json();
        }).then(res => {
            return new Promise((resolve, _) => {
                // resp code is 200 
                if (res && res.code === 200) {
                    resolve(res)
                    return
                }
                // 解析失败弹出失败消息.
                window.$message.error(res.msg || "unknown err.");
            })
        });
}

function getReqUrl(url) {
    url = String(url)

    if (url.includes("http")) {
        return url
    }

    if (url.startsWith("/")) {
        url = url.substring(1)
    }
    return API_BASE_URL + url
}

export {
    httpGet,
    httpPost
}