function slideAnterior(sliderId) {
    const slider = document.getElementById(sliderId);
    const currentSrc = slider.src;

    const images = {
        slider1: [
            "https://www.efravergara.com/sources/WhatsApp%20Image%202025-03-24%20at%207.36.57%20PM.jpeg",
            "https://www.efravergara.com/sources/WhatsApp%20Image%202025-03-24%20at%207.36.58%20PM.jpeg",
            "https://www.efravergara.com/sources/WhatsApp%20Image%202025-03-24%20at%207.36.58%20PM%20(1).jpeg"
        ],
        slider2: [
            "https://www.efravergara.com/sources/efras1.png",
            "https://www.efravergara.com/sources/efras2.png",
            "https://www.efravergara.com/sources/efras3.png"
        ]
    };

    const currentIndex = images[sliderId].indexOf(currentSrc);
    const newIndex = (currentIndex - 1 + images[sliderId].length) % images[sliderId].length;
    slider.src = images[sliderId][newIndex];
}

function slideSiguiente(sliderId) {
    const slider = document.getElementById(sliderId);
    const currentSrc = slider.src;

    const images = {
        slider1: [
            "https://www.efravergara.com/sources/WhatsApp%20Image%202025-03-24%20at%207.36.57%20PM.jpeg",
            "https://www.efravergara.com/sources/WhatsApp%20Image%202025-03-24%20at%207.36.58%20PM.jpeg",
            "https://www.efravergara.com/sources/WhatsApp%20Image%202025-03-24%20at%207.36.58%20PM%20(1).jpeg"
        ],
        slider2: [
            "https://www.efravergara.com/sources/efras1.png",
            "https://www.efravergara.com/sources/efras2.png",
            "https://www.efravergara.com/sources/efras3.png"
        ]
    };

    const currentIndex = images[sliderId].indexOf(currentSrc);
    const newIndex = (currentIndex + 1) % images[sliderId].length;
    slider.src = images[sliderId][newIndex];
}
