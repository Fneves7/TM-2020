var arrayNumbers = [];

function adicionarNumero() {
    var numero = document.getElementById("numbersId").value;
    arrayNumbers.push(parseInt(numero));
    console.log(arrayNumbers);
    document.getElementById("numerosAdicionados").innerText = arrayNumbers.toString();
}

function calcularNumero() {
    if (arrayNumbers.length > 5)
    var maiorNumero = Math.max.apply(Math, arrayNumbers);
    alert(maiorNumero);
    document.getElementById("maiorNumero").innerText = maiorNumero
}