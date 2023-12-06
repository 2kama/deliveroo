const ERROR_INFORMATION = {
    500: 'some 500',
    455: 'some 455',
    401: 'some 401'
}

function extractError({  code, text, level}) {
    return { errorCode: code, message: text, warning: level }
}

function informError(errorObject) {
    let {errorCode} = errorObject
    let info = ERROR_INFORMATION[errorCode]

    return { ...errorObject, info }
}


let testError = {
    code: 500,
    text: 'Unknown',
    server: "www.xyz.com",
    time: 1123234,
    level: "fatal"
}

let result = informError(extractError(testError))