var dinoElement = document.getElementById("dino");
var gameElement = document.getElementById("game");
var scoreElement = document.getElementById("score");


var gameSpeed = 50;
var score = 0;


///////////////////
// ONCLICK START BUTTON
//

//create cactus

var cactus = document.createElement("img");

cactus.style.id = "cactus";
cactus.style.position = "absolute";
cactus.style.left = "800px";
cactus.style.bottom = "0px";
cactus.src = "https://via.placeholder.com/40";

gameElement.appendChild(cactus);




//create bird
var bird = document.createElement("img");

var gameSpeed = 50;
var score = 0;

bird.style.id = "cactus";
bird.style.position = "absolute";
bird.style.left = "1200px";
bird.style.bottom = "80px";
bird.src = "https://via.placeholder.com/20";

gameElement.appendChild(bird);

////////////

document.onkeydown = (e) => {

    if (e.key === "ArrowUp") {
        //move dinosaur 120px up
        dinoElement.style.bottom = 120 + "px";

        //after half a second, move dinosaur backS
        setTimeout(() => {
            dinoElement.style.bottom = 0 + "px";
        }, 500)

    } else if (e.key === "ArrowDown") {

        //make dinosaur shorter
        dinoElement.style.height = 70 + "px";

        //after half a second, reset height
        setTimeout(() => {
            dinoElement.style.height = 100 + "px";

        }, 500)

    }

}

//main game loop
var loopId = setInterval( () => {
    //get the width of the whole game so that the cacti starts off screen
    var gameWidth = gameElement.getBoundingClientRect().width;
    
    //move the obstacles a few pixels towards dino
    cactus.style.left = parseInt(cactus.style.left) - 5;
    bird.style.left = parseInt(bird.style.left) - 4 ;

    //if the cactus goes off the screen
    if (parseInt(cactus.style.left) < -parseInt(cactus.width)) {

        //maybe random delay here

        //move the cactus back to the other side
        cactus.style.left = gameWidth + "px";
    }


    //if the bird goes off the screen
    if (parseInt(bird.style.left) < -parseInt(bird.width)) {

        //maybe random delay here

        //move the cactus back to the other side
        bird.style.left = gameWidth + "px";

    }



    //check if the dinosaur has hit anything
    //cactus position
    var dino = dinoElement.getBoundingClientRect();
    var cactusPosition = cactus.getBoundingClientRect();
    var birdPosition = bird.getBoundingClientRect();

    let isDinoAboveCactus = ((dino.top + dino.height) < (cactusPosition.top));
    let isDinoBelowCactus = (dino.top > (cactusPosition.top + cactusPosition.height));
    let isDinoLeftOfCactus = ((dino.left + dino.width) < cactusPosition.left);
    let isDinoRightOfCactus = (dino.left > (cactusPosition.left + cactusPosition.width));

    var hasHitCactus = !(isDinoAboveCactus || isDinoBelowCactus || isDinoLeftOfCactus || isDinoRightOfCactus)


    //bird position 
    let isDinoAboveBird = ((dino.top + dino.height) < (birdPosition.top));
    let isDinoBelowBird = (dino.top > (birdPosition.top + birdPosition.height));
    let isDinoLeftOfBird = ((dino.left + dino.width) < birdPosition.left);
    let isDinoRightOfBird = (dino.left > (birdPosition.left + birdPosition.width));

    var hasHitBird = !(isDinoAboveBird || isDinoBelowBird || isDinoLeftOfBird || isDinoRightOfBird)

    
    
    
    //if you have hit the cactus or the bird
    if (hasHitCactus || hasHitBird) {

        alert("you died. your score was: " + score)
        //stop the game
        clearInterval(loopId);

        //remove the cactus and bird from the game
        //reset score
        score = 0;

        //hide the game
        //show the start button


    } else {

        //increase the score
        score++;
        //display the new score
        scoreElement.innerText = "Score: " + score;
    }

}, 1000* (1/gameSpeed))