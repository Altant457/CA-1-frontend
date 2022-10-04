import "./personFacade.js"
import personFacade from "./personFacade.js"

const showPersonList = () => {
    console.log(personFacade.getUsers())
    personFacade.getUsers()
    .then (users => {
    
        document.querySelector("#userList").innerHTML = users.all.map(user =>
            `
            <tr>
                <td>${user["id"]}</td>
                <td>${user["firstName"]}</td>
                <td>${user["lastName"]}</td>
                <td>${user["phone"]}</td>
            </tr>
            `
            ).join("")
    })
    .catch(err => {

        if(err.status) {
            err.fullErrror.then(e => console.log(e.msg))
            
        } else {
            console.log("Network error")
        }
    })
}
 
showPersonList()