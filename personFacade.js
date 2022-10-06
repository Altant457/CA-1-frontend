const URL = "https://altantthewired.me/tomcat/CA1/api/ca1/";

function getUserByPhone (number) {
    const options = makeOptions("GET")
    return fetch(URL + "person/phone/" + number, options)
    .then(handleHttpErrors)
}
function getUserByHobby (hobbyName) {
    const options = makeOptions("GET")
    return fetch(URL + "person/hobby/" + hobbyName, options)
    .then(handleHttpErrors)
}

function addUser(user) {
    const options = makeOptions("POST", user)
    return fetch (URL, options)
    .then(handleHttpErrors)
}

function editUser(user, id) {
    const options = makeOptions("PUT", user)
    return fetch (`${URL}${id}`, options)
    .then(handleHttpErrors)
}
function deleteUser(id) {
    const options = makeOptions("DELETE")
    return fetch (`${URL}${id}`, options)

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
const personFacade = {
    getUserByPhone,
    addUser,
    editUser,
    deleteUser,
    getUserByHobby
};


console.log("slutningen af personFacade")
export default personFacade;
