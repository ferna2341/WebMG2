const galleryContainers = document.querySelectorAll(".gallery-container"); // Obtener todas las galerías

// Crear el lightbox (solo una vez)
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let currentIndex = 0;
let currentGalleryItems = [];

// Función para mostrar el lightbox con la imagen correcta
function showLightBox(n) {
    if (n >= currentGalleryItems.length) {
        currentIndex = 0;
    } else if (n < 0) {
        currentIndex = currentGalleryItems.length - 1;
    } else {
        currentIndex = n;
    }

    let imageLocation = currentGalleryItems[currentIndex].querySelector("img, video").getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
    document.body.style.overflow = 'hidden';
}

// Función para manejar el clic en las imágenes
function currentImage(event) {
    let galleryContainer = event.currentTarget.closest(".gallery-container"); // Encuentra la galería contenedora
    currentGalleryItems = Array.from(galleryContainer.querySelectorAll(".gallery-item")); // Obtiene solo las imágenes de esa galería

    let clickedItem = event.currentTarget;
    currentIndex = currentGalleryItems.indexOf(clickedItem);

    showLightBox(currentIndex);
    lightBoxContainer.style.display = "block";
}

// Agregar event listeners a cada imagen de cada galería
galleryContainers.forEach(container => {
    let galleryItems = container.querySelectorAll(".gallery-item");
    galleryItems.forEach(item => {
        item.addEventListener("click", currentImage);
    });
});

// Funciones para navegar en el lightbox
function prevImage() {
    showLightBox(currentIndex - 1);
}

function nextImage() {
    showLightBox(currentIndex + 1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

// Cerrar el lightbox
function closeLightBox(event) {
    if (event.target === lightBoxContainer) {
        lightBoxContainer.style.display = "none";
        document.body.style.overflow = 'auto';
    }
}

lightBoxContainer.addEventListener("click", closeLightBox);
