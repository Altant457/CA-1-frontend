// function changeText(element) {
//     document.getElementById("bar").placeholder = `Skriv ${element}`
// }

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
}




function test(callback) {
  let element = document.getElementById()
  const send = callback(element)
  console.log(send);
}

