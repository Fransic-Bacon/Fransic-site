

function beställ() {





    document.querySelectorAll(".köpbox input").forEach((x) => { x.value = "" });




    alert("Beställningen är klar")

}


function loggain() {

    let mail = document.getElementById("loggain1");
    let lösenord = document.getElementById("loggain2");


    mail.value = "";
    mail.innerHTML = mail.value;

    lösenord.value = "";
    lösenord.innerHTML = lösenord.value;

    let svar = document.getElementById("svar");
    svar.classList.remove("opacity0");
    svar.classList.add("svarcss");

}



