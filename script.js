function calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var operacao = document.getElementById("operacao").value;
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = 0;
  
    if (operacao === "soma") {
      resultado = numero1 + numero2;
    } else if (operacao === "subtracao") {
      resultado = numero1 - numero2;
    }
  
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
  }