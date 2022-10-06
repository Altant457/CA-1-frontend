// function changeText(element) {
//     if (element === 'person') {
//         document.getElementById("bar").placeholder = `Skriv fulde navn`
//     } else if (element === 'hobby') {
//         document.getElementById("bar").placeholder = `Skriv hobbyens navn`
//     } else if (element === 'phone') {
//         document.getElementById("bar").placeholder = `Skriv telefonnummer`
//     } else if (element === 'address') {
//         document.getElementById("bar").placeholder = `Skriv adresse`
//     } else if (element === 'zip') {
//         document.getElementById("bar").placeholder = `Skriv postnummer`
//     }
// }

document.querySelectorAll('input[name = "s"]').forEach(element => {
    element.addEventListener('change', function () {
        if (this.value === 'person') {
            document.getElementById("bar").placeholder = "Skriv fulde navn"
        } else if (this.value === 'hobby') {
            document.getElementById("bar").placeholder = "Skriv hobbyens navn"
        } else if (this.value === 'phone') {
            document.getElementById("bar").placeholder = "Skriv telefonnummer"
        } else if (this.value === 'address') {
            document.getElementById("bar").placeholder = "Skriv adresse"
        } else if (this.value === 'zip') {
            document.getElementById("bar").placeholder = "Skriv postnummer"
        }
    })
})
