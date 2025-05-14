let images = ['Bilder/1711717734030.jpg', 'Bilder/1710238211997.jpg', 'Bilder/1711717734037.jpg', 'Bilder/1711717734052.jpg']
let image = document.getElementById("im");
setInterval(function () {
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}, 800);