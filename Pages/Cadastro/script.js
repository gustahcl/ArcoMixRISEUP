document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('SignUpForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Captura os valores dos campos usando os IDs
        const nome = document.getElementById('nome').value;
        const tipoVisitante = document.getElementById('tipo').value;
        const cpfRg = document.getElementById('cpfRg').value;
        const telefone = document.getElementById('telefone').value;
        const empresa = document.getElementById('empresa').value;
        const senha = document.getElementById('senha').value;
        const email = document.getElementById('email').value;
        const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

        // Validações
        if (!nome || !tipoVisitante || !cpfRg || !telefone || !empresa || !senha || !email || !confirmacaoSenha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (senha !== confirmacaoSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        window.location.href = "../TelaConfirmacao/index.html";
    });
});