function change2() {
    const name = document.querySelector("s");
    if (name === "person") {}
}

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


function test() {
  const send = change2()
  console.log(send);
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

