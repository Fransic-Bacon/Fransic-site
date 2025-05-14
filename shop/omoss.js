

//FAQ riktigt vackert

/*
function fråga() {

    let faq1 = document.getElementById("faq1");
    faq1.classList.remove("inget");
    faq1.classList.add("svar");


}

function svar() {

    let faq1 = document.getElementById("faq1");
    faq1.classList.remove("svar");
    faq1.classList.add("inget");


}


function fråga2() {

    let faq2 = document.getElementById("faq2");
    faq2.classList.remove("inget");
    faq2.classList.add("svar");


}

function svar2() {

    let faq2 = document.getElementById("faq2");
    faq2.classList.remove("svar");
    faq2.classList.add("inget");


}


function fråga3() {

    let faq3 = document.getElementById("faq3");
    faq3.classList.remove("inget");
    faq3.classList.add("svar");


}

function svar3() {

    let faq3 = document.getElementById("faq3");
    faq3.classList.remove("svar");
    faq3.classList.add("inget");


}


function fråga4() {

    let faq3 = document.getElementById("faq4");
    faq3.classList.remove("inget");
    faq3.classList.add("svar");


}

function svar4() {

    let faq3 = document.getElementById("faq4");
    faq3.classList.remove("svar");
    faq3.classList.add("inget");


}

function fråga5() {

    let faq3 = document.getElementById("faq5");
    faq3.classList.remove("inget");
    faq3.classList.add("svar");


}

function svar5() {

    let faq3 = document.getElementById("faq5");
    faq3.classList.remove("svar");
    faq3.classList.add("inget");


}

function fråga6() {

    let faq3 = document.getElementById("faq6");
    faq3.classList.remove("inget");
    faq3.classList.add("svar");


}

function svar6() {

    let faq3 = document.getElementById("faq6");
    faq3.classList.remove("svar");
    faq3.classList.add("inget");


}

*/



// skicka klagan function



/*
function klagaskick() {


    let klag = document.getElementById("klaga");

    klag.value = "";
    klag.innerHTML = mail.value;

}
*/

var music = new Audio('bilder/music.wav');
function playMusic() {

    music.play();


}

function stopMusic() {

    music.pause();


}








let slav = 0;

function klagaskick() {


    let klag = document.getElementById("klaga");

    klag.value = "";
    klag.innerHTML = klag.value;

    slav++;

    if (slav == 4) {

        let slaven = document.getElementById("slaven");
        slaven.classList.remove("person");
        slaven.classList.add("answer");
    }


}

