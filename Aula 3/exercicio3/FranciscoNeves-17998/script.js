function getInfo() {
    var linkVar = document.getElementById("link");
    var lista = document.getElementById("info");

    lista.innerHTML =
        "ID:" + linkVar.id + "<br>" +
        "Target:" + linkVar.target + "<br>" +
        "Type:" + linkVar.type + "<br>" +
        "HREF:" + linkVar.href + "<br>";
}

function changeColorToRed() {
    var titulos = document.getElementsByClassName("titulo");
    for (let elem of titulos) {
        elem.style.color = "red";
    }
}

function clickOnCell(cell) {
    cell.innerText = prompt("Novo Valor:");
    cell.style.backgroundColor = "#99e599";
}

function setClickOnEachTD() {
    var cells = document.getElementsByTagName("td");
    for(let cell of cells){
        cell.onclick = function () {
            clickOnCell(cell);
        }
    }
}

setClickOnEachTD();