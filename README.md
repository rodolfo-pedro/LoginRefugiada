# LoginRefugiada

A idea foi criar uma pagina de login responsivo simples.

Para acessar o alert no cadastro:

Email: admin
Senha: admin


No index.html temos a entrada de dados com os inputs e o botão para enviar o comando para o js.js

        <input class="corpo-login" type="text" placeholder="Login" id="login">
        <input class="corpo-login" type="password" placeholder="Senha" id="senha">
        <button class="btn-login" type="submit" onclick="logar()">Enviar</button>")



Logo abaixo em "Cadastre-se", "Esqueceu a senha?", "Ajuda?" foi feito um link que quando clicado, retornará um alerta com mensagens de ajuda.

    (" <a class="linkar-login" onclick="onClickCadastrar()">Cadastre-se</a>
    <br><br>
    <a class="linkar-login" onclick="onClickChave()">Esqueceu a senha?</a>
    <br><br>
    <a class="linkar-login" onclick="onClickHelp()">Ajuda?</a> ")
    
    




Ao inserir os dados e apertar o botão "Entrar", o codigo lhe trará um alert na pagina dando boas-vindas, caso o login e senha forem diferentes, ele irá exibir um alerta com mensagem de erro.

   ("   function logar() {
          var login = document.getElementById('login').value;
          var senha = document.getElementById('senha').value;

        if (login == "admin" && senha == "admin") {
         alert("Bem Vinda, Anfitriã");
       } else {
       alert("Usuario ou senha incorretos");
     }")






No js.js temos as funções que retornarão os alertas quando os dados forem inseridos e enviados e quando os links forem clicados.


   ("  function onClickCadastrar (){

     alert("Para se cadastrar, ligue: 0500-2022");

    }


    function onClickChave(){

 alert("Para redefinir a senha, ligue: 0800-2022");

 }

   function onClickHelp(){

 alert("Para saber mais, ligue para central: (27) 3780-2832")

 }
 
 
 
 
 No style.css foram configurados o layout da caixa de Login e tambem a fotografia no fundo do site.
 
 * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
      width: 100%;
      height: 100%;
      background-image: url("bandeiraucrania.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      
  }
  
  .page-login {
      background-color: #0176fce6;
      width: 300px;
      margin: 200px auto;
      text-align: center;
      padding: 20px;
      color: #eed704;
      border-radius: 15px;
  }
  
  .corpo-login {
      display: block;
      margin: 10px auto;
      width: 250px;
      height: 30px;
  }
  
  .btn-login {
      display: block;
      margin: 10px auto;
      width: 250px;
      height: 30px;
      color: black;
      background-color: #eed704;
  }

