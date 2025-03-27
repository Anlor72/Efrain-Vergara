// Función para cambiar a la imagen anterior en los sliders
function slideAnterior(sliderId) {
    const slider = document.getElementById(sliderId);
    const currentSrc = slider.src;

    // Reemplaza con tus rutas de imágenes para cada slider
    const images = {
        slider1: [
            "sources/WhatsApp Image 2025-03-24 at 7.36.57 PM.jpeg",
            "sources/WhatsApp Image 2025-03-24 at 7.36.58 PM.jpeg",
            "sources/WhatsApp Image 2025-03-24 at 7.36.58 PM (1).jpeg"
        ],
        slider2: [
            "sources/efras1.png",
            "sources/efras2.png",
            "sources/efras2.png"
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
            "sources/WhatsApp Image 2025-03-24 at 7.36.57 PM.jpeg",
            "sources/WhatsApp Image 2025-03-24 at 7.36.58 PM.jpeg",
            "sources/WhatsApp Image 2025-03-24 at 7.36.58 PM (1).jpeg"
        ],
        slider2: [
            "sources/efras1.png",
            "sources/efras2.png",
            "sources/efras2.png"
        ]
    };

    const currentIndex = images[sliderId].indexOf(currentSrc);
    const newIndex = (currentIndex + 1) % images[sliderId].length;
    slider.src = images[sliderId][newIndex];
}