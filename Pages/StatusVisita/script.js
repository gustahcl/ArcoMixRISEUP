function addClickListener(selector, callback) {
    const el = document.querySelector(selector);
    if (el) {
        el.addEventListener('click', callback);
    }
}

addClickListener('.submit2', () => {
    window.location.href = "../AgendarVisitas/index.html";
});