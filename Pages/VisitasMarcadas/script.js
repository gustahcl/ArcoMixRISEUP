function addClickListener(selector, callback) {
    const el = document.querySelector(selector);
    if (el) {
        el.addEventListener('click', callback);
    }
}

addClickListener('.visitas-button', () => {
    window.location.href = "../StatusVisita/index.html";
});