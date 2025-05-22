(function() {
    // Color celeste original de Mercado Pago
    const celeste = "#00B1EA";
    // Cambia el header principal
    function cambiarHeader() {
        // Header actual, por clase 'nav-header-wrapper' o tag 'header'
        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundColor = celeste;
            // Quita amarillo a todos los divs hijos si tienen fondo amarillo
            header.querySelectorAll("*").forEach(el => {
                if (getComputedStyle(el).backgroundColor === "rgb(255, 230, 0)") {
                    el.style.backgroundColor = celeste;
                }
            });
        }
    }

    // Ejecuta al cargar y cuando hay cambios en el DOM
    cambiarHeader();
    // Por si Mercado Pago usa frameworks que re-renderizan
    const obs = new MutationObserver(cambiarHeader);
    obs.observe(document.body, { childList: true, subtree: true });
})();
