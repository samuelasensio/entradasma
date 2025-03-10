// script.js

document.addEventListener("DOMContentLoaded", function() {
    const mensaje = "Nos hemos trasladado a otra web de venta de entradas";
    const mensajeElemento = document.getElementById("mensaje-traslado");
    const botonTraslado = document.getElementById("boton-traslado");

    // Mostrar mensaje con un retraso de 2 segundos
    setTimeout(() => {
        mensajeElemento.textContent = mensaje;
    }, 2000);

    // Redireccionar al hacer clic en el botón
    botonTraslado.addEventListener("click", () => {
        window.location.href = "https://nueva-web-de-entradas.com";
    });
});
