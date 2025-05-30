function start(){

    let applenum = document.getElementById("applenum").value;
    let applecolour = document.getElementById("applecolor").value;
//! TIden och sådant
let tid = document.getElementById("number");
let tiden = 0;

// kollar head färg och body
let headcolor= document.getElementById("HeadSnakeColor").value;
let snakebodycolor= document.getElementById("SnakeBody-color").value;

// kollar hastighets numret
let speed = document.getElementById("speed").value;
if(speed<=0){
    speed=1;
}

// är för setinterval på tiden
let timern = null;
function timer() {
    tiden += 1;
    tid.innerHTML = "Snake du har levt i " + tiden + " sekunder" +"<br>"+ " dina poäng är: " + Apple.Point;
}

//! TIden och sådant slutar här



//? Camvas saker börjar
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");



let moveNumber = 40;  // inte mindre än 32
let xmove = moveNumber;
let ymove = 0;

let startLength = 3;

// todo äpplen och sådant

Apple.updateCanvas(canvas);
for (let index = 0; index < applenum; index++) {


    new Apple(
    Math.floor(Math.random() * canvas.width - 5) + 35,
    Math.floor(Math.random() * canvas.height + 5) + 35,
    10,
    applecolour
    );
}
// todo här slutar Apple saken nu

const worm = {
    segments: [], // Array to store the worm's segments
    maxLength: 50, // Maximum number of segments
    width: 35, // Width of each rectangle
    height: 35, // Height of each rectangle
    color: snakebodycolor
};


//! Här startar timern
setInterval(timer, 1000);


// Initialize the worm's starting position
worm.segments.push({ x: canvas.width / 2, y: canvas.height / 2 });


function update() {
        // Calculate the new head position
        const newHead = {
            x: worm.segments[0].x + xmove,
            y: worm.segments[0].y + ymove
        };
    
        worm.segments.unshift(newHead);
    
        if (worm.segments.length > //worm.maxLength
        startLength*(Apple.Point+1)) {
            worm.segments.pop();
        }

        


    diecheck(newHead.x, newHead.y);
}
let startspeed = 2000;
//! bestämmer hastighetetn
setInterval(update,startspeed/speed);

function drawWorm() {
    requestAnimationFrame(drawWorm);



    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all segments of the worm
    for (let i = 0; i < worm.segments.length; i++) {
        const segment = worm.segments[i];
        if (!segment) continue;
        ctx.beginPath();

        if (i === 0) {
            // Head of the worm
           
            ctx.fillStyle =headcolor ;
        } else {
            // Body of the worm
            ctx.fillStyle = worm.color;
        }


        //! ritar
        ctx.rect(
            segment.x,
            segment.y,
            worm.width,
            worm.height
        );

        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }

 

    //! ritar alla äpplena
    for ( apple in Apple.AppleList){
        Apple.AppleList[apple].draw();
    }

    //! kollar ifall jag krockar
    for ( const apple of Apple.AppleList){
      //  console.log(worm.segments[0].x +" " + apple.x);
      const buffer = 10;
   if (
    worm.segments[0].x < apple.x + apple.radius + buffer &&
    worm.segments[0].x + worm.width > apple.x - buffer &&
    worm.segments[0].y < apple.y + apple.radius + buffer &&
    worm.segments[0].y + worm.height > apple.y - buffer
) {
    
    apple.x = Math.floor(Math.random() * (canvas.width - apple.radius) + 25);
    apple.y = Math.floor(Math.random() * (canvas.height - apple.radius) + 25);
    console.log("");
    Apple.Point++;
    worm.maxLength=startLength*(Apple.Point+1);
}
    }

    //! Kollar om den krockar med sig själv
    
    for (let i = 1; i < worm.segments.length; i++) {
      

        if ( 
        worm.segments[0].x  < worm.segments[i].x + worm.width / 2 &&
        worm.segments[0].x + worm.width / 2 > worm.segments[i].x &&
        worm.segments[0].y < worm.segments[i].y + worm.height &&
        worm.segments[0].y + worm.height > worm.segments[i].y )
        {
         alert("you died");
         restartProgram();
        }
    
    }



}

function diecheck(x, y) {

    if (x - 5 + worm.width / 2 < 0 || x - 5 + worm.width / 2 > canvas.width || y + 50 - worm.height / 2 < 0 || y - 5 + worm.height / 2 > canvas.height) {
        alert("you died");
        restartProgram();
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "d") {
        if (xmove !== -moveNumber) { 
            ymove = 0;
            xmove = moveNumber;
        }
    }

    if (event.key === "ArrowLeft" || event.key === "a") {
        if (xmove !== moveNumber) {
            ymove = 0;
            xmove = -moveNumber;
        }
    }

    if (event.key === "ArrowUp" || event.key === "w") {
        if (ymove !== moveNumber) { 
            xmove = 0;
            ymove = -moveNumber;
        }
    }

    if (event.key === "ArrowDown" || event.key === "s") {
        if (ymove !== -moveNumber) { 
            xmove = 0;
            ymove = moveNumber;
        }
    }
});





function restartProgram() {

    xmove = moveNumber;
    ymove = 0;
    tiden = 0;
    Apple.Point =0;
    tid.innerHTML = "Snake du har levt i 0 sekunder" + "<br>" + " dina poäng är: " + Apple.Point; 
    worm.segments = [{ x: canvas.width / 2, y: canvas.height / 2 }];

}
let setting = document.getElementById("settings");
setting.remove();
drawWorm();

}





