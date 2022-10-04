import "./personFacade.js"
import personFacade from "./personFacade.js"
import "./style.css"

const showPerson = (input) => {
    // console.log(personFacade.getUserByPhone("12345678"))
    
    personFacade.getUserByPhone(input)
    .then (data => {
        displayUser(data)}

        )
    .catch(err => {

        if(err.status) {
            err.fullError.then(e => console.log(e.msg))
            
        } else {
            console.log("Network error")
        }
    })
}

function displayUser(data){
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
        `
        <div class="userBox">
            <button type="button" class="collapsible" ><b>ID#${data["id"]}</b> - ${data["firstName"]} ${data["lastName"]}</button>
            <div class="content">
                <p>Fulde navn:${data["firstName"]} ${data["lastName"]}</p>
                <p>Hobbyer:${hobbyString}</p>
                <p>Telefon nr: ${data["phones"][0]["number"]}</p>
                <p>Adresse:${data["fullAddress"]["street"] + ", " + data["fullAddress"]["cityInfo"]["city"]}</p>
                <p>Zip: ${data["fullAddress"]["cityInfo"]["zipCode"]}</p>
            </div>
        </div>
        `
    updateCollapsibles()
}


function displaySimpleUser(data){
    
    const userHTML = 
    `
    <div class="userBox">
        <button type="button" class="collapsible" ><b>ID#${data["id"]}</b> - ${data["firstName"]} ${data["lastName"]}</button>
        <div class="content">
            <p>Fulde navn:${data["firstName"]} ${data["lastName"]}</p>
            
        </div>
    </div>
    `;
    return userHTML;


} 
function showPersonList(hobbyName){
    



personFacade.getUserByHobby(hobbyName)
.then(dataList => { 
    console.log(dataList)
    // console.log(dataList)
    // const usersString = dataList.map(data => userHTML(data)).join("");
    const usersString = dataList["all"].map(person => `${["firstName"]} ${["lastName"]} `).join("");
    console.log(usersString)

   


})

    .catch(err => {

        if(err.status) {
            err.fullError.then(e => console.log(e.msg))
            
        } else {
            console.log("Network error")
        }
    })
}

const updateCollapsibles = () => {
    document.querySelectorAll(".collapsible").forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if(content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
};
/* Metode til at folde person menu ud*/
// var coll = document.getElementsByClassName("collapsible");
//     var i;
//
// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         console.log(this);
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
//     });
// }


const checkedRadio = () => {
    let checkedCommand = document.querySelector('input[name = "s"]:checked')
    return checkedCommand.value;
}

document.querySelector("#btnSearch").addEventListener('click', () => {
    let command = checkedRadio()
    if (command === "phone") {
        let number = document.querySelector("#bar").value
        showPerson(number)
    }
    if (command === "hobby") {
        let hobbyName = document.querySelector("#bar").value
        showPersonList(hobbyName)
    }
})

updateCollapsibles()
