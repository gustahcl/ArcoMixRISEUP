document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userType = document.querySelector('input[name="userType"]:checked')?.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (!password) {
            alert('Por favor, insira sua senha.');
            return;
        }

        if (!userType) {
            alert('Por favor, selecione um tipo de usuário.');
            return;
        }

        if (userType == 'funcionario') {
            window.location.href = "./Pages/PaginaPrincipalFunc/index.html";
        }
        else if (userType == 'visitante') {
            window.location.href = "./Pages/PaginaPrincipal/index.html";
        }
        
    });
});