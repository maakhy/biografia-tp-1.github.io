// =========================
// NAVEGACIÓN
// =========================

const botones = document.querySelectorAll("[data-seccion]");


botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const seccion = boton.dataset.seccion;

        const destino = document.getElementById(seccion);

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// ANIMACIÓN DE SECCIONES
// =========================

const secciones = document.querySelectorAll("section");


const observador = new IntersectionObserver(function(elementos) {

    elementos.forEach(function(elemento) {

        if (elemento.isIntersecting) {

            elemento.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});


secciones.forEach(function(seccion) {

    observador.observe(seccion);

});
