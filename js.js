function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
  
    if (login == "admin" && senha == "admin") {
      alert("Bem Vinda, Anfitriã");
    } else {
      alert("Usuario ou senha incorretos");
    }
  
  }
  
  function onClickCadastrar (){
  
  alert("Para se cadastrar, ligue: 0500-2022");
  
  }
  
  function onClickChave(){
  
  alert("Para redefinir a senha, ligue: 0800-2022");
  
  }
  
  function onClickHelp(){
  
  alert("Para saber mais, ligue para central: (27) 3780-2832")
  
  }