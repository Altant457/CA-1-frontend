import "./personFacade.js"
import personFacade from "./personFacade.js"

const showPersonList = () => {
    // console.log(personFacade.getUserByPhone("12345678"))
    personFacade.getUserByPhone("12345678")
    .then (data => {
        console.log(data)
        document.querySelector("#userList").innerHTML =
            `
            <p>ID: ${data["id"]}</p>
            <p>First name: ${data["firstName"]}</p>
            <p>Last name: ${data["lastName"]}</p>
            <p>Address: ${data["fullAddress"]["street"] + data["fullAddress"]["cityInfo"]["city"]}</p>
            <p>Hobbies:</p>
            ${data["hobbies"].map(hobby => 
                `
                <p>ID: ${hobby["id"]}</p>
                <p>Name: ${hobby["name"]}</p>
                <p>Wikilink: ${hobby["wikiLink"]}</p>
                <hr />
                `).join("")
        }
            `;
    })
    .catch(err => {

        if(err.status) {
            err.fullError.then(e => console.log(e.msg))
            
        } else {
            console.log("Network error")
        }
    })
}
 
showPersonList()