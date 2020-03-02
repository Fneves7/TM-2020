function LerInput() {
    var texto = document.getElementById("numero").value;
    if(!texto.lenght) alert("Erro, sem conteúdo");
    document.getElementById("texto").innerText = texto
}