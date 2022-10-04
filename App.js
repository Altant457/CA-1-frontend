import personFacade from "./personFacade.js"

let currentField = "person";

function changeText(element) {
    if (element === 'person') {
        document.getElementById("bar").placeholder = `Skriv fulde navn`
    } else if (element === 'hobby') {
        document.getElementById("bar").placeholder = `Skriv hobbyens navn`
    } else if (element === 'phone') {
        document.getElementById("bar").placeholder = `Skriv telefonnummer`
    } else if (element === 'address') {
        document.getElementById("bar").placeholder = `Skriv adresse`
    } else if (element === 'zip') {
        document.getElementById("bar").placeholder = `Skriv postnummer`
    }
    currentField = element;

}

const showPersonList = (number) => {
  personFacade.getUserByNumber(number)
  .then (users => {
  
      document.querySelector("#userList").innerHTML = users.all.map(user =>
          `<tr>
              <td>${user["id"]}</td>
              <td>${user["firstName"]}</td>
              <td>${user["lastName"]}</td>
          </tr>`
          ).join("")
  })
  .catch(err => {

      if(err.status) {
          err.fullError.then(e => console.log(e.msg))
          
      } else {
          console.log("Network error")
      }
  })
}

function handleSearch() {

  if (currentField === 'phone') {

    let input = document.querySelector("#bar").value;

    showPersonList(input);

  }

  
}

document.querySelector("#phone").addEventListener("click", () => {

  



})

