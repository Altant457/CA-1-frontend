const URL = "https://altantthewired.me/tomcat/CA1/api/ca1/";

function getUsers () {
    const options = makeOptions("GET")
    return fetch(URL, options)
    .then(handleHttpErrors)
}




const handleHttpErrors = (response) => {
    if(!response.ok) {
        return Promise.reject({status: response.status, fullError: response.json()})
    }
    return response.json()
}

const makeOptions = (method, body) => {
    let opts = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    if(body) {
        opts.body = JSON.stringify(body)
    }
    return opts
}