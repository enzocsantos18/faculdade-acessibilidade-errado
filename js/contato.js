function Validar(frm){
  var painel = document.getElementById("panelError");
  var inputNome = document.getElementById("nome");
  var padrao = /[^a-zà-ú] /gi;
  var valida_nome = inputNome.value.match(padrao);
  var ul = document.getElementById("ul");
  var inputEmail = document.getElementById("email");
  var inputTelefone = document.getElementById("phone");
  var verifyInt = /\d+/g;
  var inputMensagem = document.getElementById("mensagem");
  

  painel.style.display = "none";
  ul.style.display = "none";

  if(inputNome.value == "" || inputNome.value == null) {
      zerarAvisos()
      painel.style.display = "block";
      ul.style.display = "block";
      var elemento = document.getElementById("NomeBranco");
      elemento.style.display = "list-item";
      inputNome.focus();
      return false; 
  }
  
  else{
      zerarAvisos()
      if (valida_nome || !inputNome.value) {
          painel.style.display = "block";
          ul.style.display = "block";
          var elemento = document.getElementById("NomeInvalido");
          elemento.style.display = "list-item";
          inputNome.focus();
      }
      if (inputNome.value.length < 3) {
          painel.style.display = "block";
          ul.style.display = "block";
          var elemento = document.getElementById("NomeCarac");
          elemento.style.display = "list-item";
          inputNome.focus();
      } 
      if (valida_nome || !inputNome.value || inputNome.value.length < 3) {
          return false
      }
  }

  if (inputEmail.value == "" || inputEmail.value == null) {
      zerarAvisos()
      painel.style.display = "block";
      ul.style.display = "block";
      var elemento = document.getElementById("EmailBranco");
      elemento.style.display = "list-item";
      inputEmail.focus();
      return false; 
  } 
  else {
      if (validacaoEmail(inputEmail.value) == false) {
          zerarAvisos()
          painel.style.display = "block";
          ul.style.display = "block";
          var elemento = document.getElementById("EmailInvalido");
          elemento.style.display = "list-item";
          inputEmail.focus();
          return false; 
      }
  }

  if (inputTelefone.value.match(verifyInt) == null){
      zerarAvisos()
      painel.style.display = "block";
      ul.style.display = "block";
      var elemento = document.getElementById("TelefoneInvalido");
      elemento.style.display = "list-item";
      inputTelefone.focus();
      return false; 
  }

  if (inputMensagem.value == "" || inputMensagem.value == null){
      zerarAvisos()
      painel.style.display = "block";
      ul.style.display = "block";
      var elemento = document.getElementById("MensagemBranco");
      elemento.style.display = "list-item";
      inputTelefone.focus();
      return false; 
  }
  
}

function zerarAvisos() {
  var painel = document.getElementById("panelError");
  painel.style.display = "none";
  var ul = document.getElementById("ul");
  ul.style.display = "none";
  var NomeBranco = document.getElementById("NomeBranco");
  NomeBranco.style.display = "none";
  var NomeInvalido = document.getElementById("NomeInvalido");
  NomeInvalido.style.display = "none";
  var NomeCarac = document.getElementById("NomeCarac");
  NomeCarac.style.display = "none";
  var EmailBranco = document.getElementById("EmailBranco");
  EmailBranco.style.display = "none";
  var EmailInvalido = document.getElementById("EmailInvalido");
  EmailInvalido.style.display = "none";
  var TelefoneInvalido = document.getElementById("TelefoneInvalido");
  TelefoneInvalido.style.display = "none";
  
}

function validacaoEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
  
}