function salvarCadastro() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Armazenar os dados no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Cadastro feito com sucesso, redicionaremos você para página de login')

    // Redirecionar para a página de login
    window.open("login.html")
}