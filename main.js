import "./style.css";


function hideAllShowOne(idToShow) {
    document.getElementById("outer").style = "display:none";
    document.getElementById("ex1_html").style = "display:none";

function menuItemClicked(evt) {
    const id = evt.target.id;
    switch (id) {
        case "ex1":
            hideAllShowOne("ex1_html");
            break;
        case "profile":
            hideAllShowOne("ex2_html");
            break;
        case "ex3":
            hideAllShowOne("ex3_html");
            break;
        default:
            hideAllShowOne("addPersonDiv");
            break;
    }
    evt.preventDefault();
}
//document.getElementById("menu").onclick = menuItemClicked;
document.querySelector(".menu").onclick = menuItemClicked;
hideAllShowOne("addPersonDiv");