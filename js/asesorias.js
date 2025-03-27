// Función para cambiar a la imagen anterior en los sliders
function slideAnterior(sliderId) {
    const slider = document.getElementById(sliderId);
    const currentSrc = slider.src;

    // Reemplaza con tus rutas de imágenes para cada slider
    const images = {
        slider1: [
            "sources/imagen1.jpg",
            "sources/imagen2.jpg",
            "sources/imagen3.jpg"
        ],
        slider2: [
            "sources/imagen4.jpg",
            "sources/imagen5.jpg",
            "sources/imagen6.jpg"
        ]
    };

    const currentIndex = images[sliderId].indexOf(currentSrc);
    const newIndex = (currentIndex - 1 + images[sliderId].length) % images[sliderId].length;
    slider.src = images[sliderId][newIndex];
}

// Función para cambiar a la siguiente imagen en los sliders
function slideSiguiente(sliderId) {
    const slider = document.getElementById(sliderId);
    const currentSrc = slider.src;

    // Reemplaza con tus rutas de imágenes para cada slider
    const images = {
        slider1: [
            "sources/imagen1.jpg",
            "sources/imagen2.jpg",
            "sources/imagen3.jpg"
        ],
        slider2: [
            "sources/imagen4.jpg",
            "sources/imagen5.jpg",
            "sources/imagen6.jpg"
        ]
    };

    const currentIndex = images[sliderId].indexOf(currentSrc);
    const newIndex = (currentIndex + 1) % images[sliderId].length;
    slider.src = images[sliderId][newIndex];
}