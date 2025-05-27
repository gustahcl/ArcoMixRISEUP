function addClickListener(selector, callback) {
    const el = document.querySelector(selector);
    if (el) {
        el.addEventListener('click', callback);
    }
}


addClickListener('.confirm', () => {
    window.location.href = "../TelaConfirmacao/index.html";
});