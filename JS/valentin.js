document.addEventListener("DOMContentLoaded", function () {
    var buton1 = document.getElementById("buton1");
    var buton2 = document.getElementById("buton2");
    var buton1Text = document.querySelector("#buton1 span");
    var valentineMessage = document.getElementById("valentine-message");
    var valentineImage = document.getElementById("valentine-image");
    var newText = document.getElementById("new-text");
    var newVideo = document.getElementById("new-video");
    var videoSource = document.getElementById("video-source"); // Fuente del video

    // Lista de videos disponibles
    var videos = [
        "../Media/cocheDTMF.mp4",
        "../Media/geis.mp4",
        "../Media/juntitosParis.mp4",
        "../Media/paseandoParis.mp4",
        "../Media/paraguasParis.mp4"
    ];

    var originalTopMessage = valentineMessage.offsetTop;
    var originalTopImage = valentineImage.offsetTop;

    buton2.addEventListener("click", function () {
        var currentWidth = buton1.offsetWidth;
        var currentHeight = buton1.offsetHeight;

        // Incrementar tamaño
        var newWidth = currentWidth * 1.1;
        var newHeight = currentHeight * 1.1;
        buton1.style.width = newWidth + "px";
        buton1.style.height = newHeight + "px";

        // Incrementar tamaño del texto
        var currentFontSize = parseInt(window.getComputedStyle(buton1Text).fontSize);
        var newFontSize = currentFontSize + 1;
        buton1Text.style.fontSize = newFontSize + "px";

        // Ajustar posición del mensaje y la imagen
        valentineMessage.style.transition = "top 0.3s ease";
        valentineImage.style.transition = "top 0.3s ease";
        valentineMessage.style.top = originalTopMessage - buton1.offsetHeight + "px";
        valentineImage.style.top = originalTopImage - buton1.offsetHeight + "px";
    });

    buton1.addEventListener("click", function () {
        // Ocultar botones y elementos iniciales
        buton1.style.visibility = "hidden";
        buton2.style.visibility = "hidden";
        valentineMessage.style.visibility = "hidden";
        valentineImage.style.visibility = "hidden";

        // Seleccionar un video aleatorio
        var randomVideo = videos[Math.floor(Math.random() * videos.length)];
        videoSource.src = randomVideo; // Cambia la fuente del video
        newVideo.load(); // Carga el nuevo video seleccionado
        newVideo.style.display = "block"; // Muestra el video

        // Mostrar nuevo mensaje y video
        setTimeout(function () {
            if (newText && newVideo) {
                newText.style.visibility = "visible";
                newVideo.style.visibility = "visible";
                newVideo.play(); // Reproducir video después de la selección
            }
        }, 300); // Pequeña espera para la transición
    });

    // Ocultar el nuevo texto y video al inicio
    if (newText && newVideo) {
        newText.style.visibility = "hidden";
        newVideo.style.visibility = "hidden";
    }
});
