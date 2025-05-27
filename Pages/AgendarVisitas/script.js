document.querySelectorAll('.unavailable, .analysis').forEach(button => {
    button.disabled = true; // Adiciona o atributo disabled
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 
            window.location.href = "../VisitasMarcadas/index.html";
        });
    }
});