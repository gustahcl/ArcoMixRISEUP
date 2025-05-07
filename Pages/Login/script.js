document.addEventListener('DOMContentLoaded', function () {
    console.log("Script carregado com sucesso!");

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (!password) {
            alert('Por favor, insira sua senha.');
            return;
        }

        console.log("Redirecionando para a página principal...");
        window.location.href = "../PaginaPrincipal/index.html";
    });
});