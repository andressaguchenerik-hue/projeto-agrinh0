//VERSÃO 1
function funccao1() {
    var x = document.getElemenrById("i1").value:
    var y = document.getElementById("i2").value;
    var z = x * y;

    if(z >100) {
        document.getElementById("res").style.color = "red";
        alert("Muito caro!");
    } else {
        document.getElementById("res").style.color = "green"

    }
    document.getElementById("res").innerHTML ="Total: " + z;
    console.log("Calculando");

}





 //VERSÂO 2
 const precoSemente = 150.0;

function calcularInvestimentoTotal(quantidade) {
    return quantidade * precoSemente;
}

function atualizarInterface(valorTotal) {
    const display = document.getElementById("resultadoDisplay");
    display.innerText = `O investimento total é: R$ ${valorTotal.toFixed(2)}`;
    display.style.color = valorTotal > 1000 ? "orange" : "green";
}
