function efetuarLogin() {
    var emailDigitado = document.getElementById("email").value;
    var senhaDigitada = document.getElementById("senha").value;

    // Recuperar os dados salvos no localStorage
    var usuarioSalvo = localStorage.getItem('usuario');

    if (usuarioSalvo) {
        // Converter a string JSON de volta para objeto
        var usuario = JSON.parse(usuarioSalvo);

        // Comparar as credenciais
        if (emailDigitado === usuario.email && senhaDigitada === usuario.senha) {
            alert('Login bem-sucedido! Bem-vindo, ' + usuario.nome + '!');
            // Adicionar lógica para redirecionar para a página principal ou outra página após o login
            window.open("index2.html");
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    } else {
        alert('Nenhum usuário cadastrado. Por favor, cadastre-se.');
    }
}