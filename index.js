import "./personFacade.js"
import personFacade from "./personFacade.js"
import "./style.css"

const showPersonList = (number) => {
    document.querySelector("#foundItems").innerHTML =
        `<h3><h3>`
    document.querySelector(".preload").style.display = "block"
    // console.log(personFacade.getUserByPhone("12345678"))
    personFacade.getUserByPhone(number)
        .then(data => {
            let hobbyString
            if (data["hobbies"].length > 0) {
                hobbyString = data["hobbies"].map(hobby => `
                <p><b style="color:blue">ID:</b> ${hobby["id"]}</p>
                <p><b style="color:#be2edd">Name: </b>${hobby["name"]}</p>
                <p><b style="color:green">Wikilink: </b>${hobby["wikiLink"]}</p>
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
                    <p class="capName"><b>Name:</b> ${data["firstName"]} ${data["lastName"]}</p>
                    <p><b>Phone:</b> ${data["phones"][0]["number"]}</p>
                    <p class="capName"><b>Address:</b> ${data["fullAddress"]["street"] + ", " + data["fullAddress"]["cityInfo"]["city"]}</p>
                    <p><b>Zip:</b> ${data["fullAddress"]["cityInfo"]["zipCode"]}</p>
                    <p><b>Hobbies:</b>${hobbyString}</p>
                </div>
            </div>
            `
            updateCollapsibles()

            document.querySelector(".preload").style.display = "none"
            document.querySelector("#foundItems").innerHTML =
                `<h3>Fandt 1 resultat<h3>`

        })
        .catch(err => {

            if (err.status) {
                err.fullError.then(e => console.log(e.msg))

            } else {
                console.log("Network error")
            }
        })
}

const updateCollapsibles = () => {
    document.querySelectorAll(".collapsible").forEach(element => {
        element.addEventListener('click', function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
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
        showPersonList(number)
    }
})

updateCollapsibles()

/* Metode til at søge i input felt ved at klikke ' Enter '  */
let enter = document.getElementById("bar");
enter.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnSearch").click();
    }
});

/* Metode til at vise loader */
const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');

const emojis = ["🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦", "🕛", "🕧"];

const interval = 125;

const loadEmojis = (arr) => {
    setInterval(() => {
        emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
        //console.log(Math.floor(Math.random() * arr.length))
    }, interval);
}

const init = () => {
    loadEmojis(emojis);
    document.querySelector(".preload").style.display = "none"
}
init();

// document.querySelector("#profile").addEventListener('click', (event) => {
//         document.querySelector("#btnTop").innerHTML = "Back"
//         document.querySelector("#outer")
//         var originalHTML = outer.innerHTML;
//         outer.innerHTML =
//             '<div id="add">' +
//             '<h3>Tilføj person</h3>' +
//             '<br><br><br>' +
//             '<input id="fName" placeholder="Fornavn">' +
//             '<input id="lName" placeholder="Efternavn">' +
//             '<input id="phone" placeholder="Telefonnunmmer">' +
//             '<input id="phoneDescription" placeholder="Telefoninfo">' +
//             '<input id="address" placeholder="Adresse">' +
//             '<input id="additionalInfo" placeholder="Ekstra info">' +
//             '<input id="zip" placeholder="Postnummer">' +
//             '<input id="hobby" placeholder="Hobbyer">' +
//             '<a id="btnSend">Send</a>' +
//             '</div>'
//
//         document.querySelector("#profile").addEventListener('click', (event) => {
//             document.querySelector("#outer").innerHTML = originalHTML
//             document.querySelector("#btnTop").innerHTML = "Add profile"
//         })
//     }
// )
document.getElementById("all-content").style.display = "block";

function hideAllShowOne(idToShow) {
    console.log(idToShow)
    document.getElementById("outer").style = "display:none";
    document.getElementById("outer2").style = "display:none";
    document.getElementById("vismig").style = "display:none";
    document.getElementById(idToShow).style = "display:block";
}
function hideAllButtonsShowOne(idToShow) {
    console.log(idToShow)
    document.getElementById("profile").style = "display:none";
    document.getElementById("back").style = "display:none";
    document.getElementById(idToShow).style = "display:block";
}

function menuItemClicked(evt) {
    const id = evt.target.id;
    console.log(id)
    switch (id) {
        case "profile":
            hideAllShowOne("outer2");
            hideAllButtonsShowOne("back");
            break;
        case "vis":
            hideAllShowOne("vismig");
            break;
        default:
            hideAllShowOne("outer");
            hideAllButtonsShowOne("profile");
            break;
    }
    evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("outer");
hideAllButtonsShowOne("profile");

