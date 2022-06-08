# LoginRefugiada

A idea foi criar uma pagina de login responsivo simples.

Para acessar o alert no cadastro:

Email: admin
Senha: admin


No index.html temos a entrada de dados com os inputs e o botão para enviar o comando para o js.js

        &<input class="corpo-login" type="text" placeholder="Login" id="login">
        <input class="corpo-login" type="password" placeholder="Senha" id="senha">
        <button class="btn-login" type="submit" onclick="logar()">Enviar</button>")



Logo abaixo em "Cadastre-se", "Esqueceu a senha?", "Ajuda?" foi feito um link que quando clicado, retornará um alerta com mensagens de ajuda.

    (" <a class="linkar-login" onclick="onClickCadastrar()">Cadastre-se</a>
    <br><br>
    <a class="linkar-login" onclick="onClickChave()">Esqueceu a senha?</a>
    <br><br>
    <a class="linkar-login" onclick="onClickHelp()">Ajuda?</a> ")
    
    




Ao inserir os dados e apertar o botão "Entrar", o codigo lhe trará um alert na pagina dando boas-vindas caso o login e senha forem diferentes, ele irá exibir um alerta com mensagem de erro.

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

