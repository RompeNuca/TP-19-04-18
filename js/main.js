
var peso = 1;
var dolar = 20;

var resultadoPeso = document.getElementById("pesoResult")
var resultadoDolar = document.getElementById("dolarResult")


function calculo(){
  var monedaSelect =  document.getElementById("moneda").value
  var monto = document.getElementById('mont').value

  if (monedaSelect == "peso") {
    var aDolares = monto/dolar
    resultadoDolar.innerHTML = `ARG: ${aDolares}`
    resultadoPeso.innerHTML = `USD: ${monto}`
  }if(monedaSelect == "dolar") {
    var aPesos = monto*dolar
    resultadoDolar.innerHTML = `USD: ${monto}`
    resultadoPeso.innerHTML = `ARG: ${aPesos}`
  }

}
