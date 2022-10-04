import "./personFacade.js"
import personFacade from "./personFacade.js"

const showPersonList = (number) => {
    // console.log(personFacade.getUserByPhone("12345678"))
    personFacade.getUserByPhone(number)
    .then (data => {
        let hobbyString
        if (data["hobbies"].length > 0) {
            hobbyString = data["hobbies"].map(hobby => `
                <p>ID: ${hobby["id"]}</p>
                <p>Name: ${hobby["name"]}</p>
                <p>Wikilink: ${hobby["wikiLink"]}</p>
                `).join("<hr />")
        } else {
            hobbyString = "No hobbies"
        }
        console.log(data)
        document.querySelector("#userList").innerHTML =
            `<div class="">
            <p>ID: ${data["id"]}</p>
            <p>First name: ${data["firstName"]}</p>
            <p>Last name: ${data["lastName"]}</p>
            <p>Address: ${data["fullAddress"]["street"] + ", " + data["fullAddress"]["cityInfo"]["city"]}</p>
            <p>Hobbies:</p>
            ${hobbyString}
            </div>`;
    })
    .catch(err => {

        if(err.status) {
            err.fullError.then(e => console.log(e.msg))
            
        } else {
            console.log("Network error")
        }
    })
}

const checkedRadio = () => {
    let checkedCommand = document.querySelector('input[name = "s"]:checked')
    return checkedCommand.value;
}

document.querySelector("#btnSearch").addEventListener('click', () => {
    let command = checkedRadio()
    if (command === "phone") {
        let number = document.querySelector("#bar").value
        showPersonList(number)
    }
})