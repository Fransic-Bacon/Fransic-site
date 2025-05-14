
let imagess = ['Bilder/1711717734030.jpg', 'Bilder/1710238211997.jpg', 'Bilder/1711717734037.jpg', 'Bilder/1711717734052.jpg']
let imag = document.getElementById("i");
setInterval(function () {
    let random = Math.floor(Math.random() * 4);
    imag.src = imagess[random];
}, 1200);




function beställ() {





    document.querySelectorAll(".köpbox input").forEach((x) => { x.value = "" });




    alert("Beställningen är klar")

}