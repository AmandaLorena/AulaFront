function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    var formulario = document.getElementById("formulario");
    var mensagem = document.getElementById("mensagem");
    var dados = new FormData(formulario);
  
    // Enviar dados para o servidor (simulação)
    setTimeout(function() {
      mensagem.textContent = "O formulário foi enviado com sucesso!";
      formulario.reset();
    }, 1000);
  }