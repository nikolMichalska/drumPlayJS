var drumButton = document.querySelectorAll(".drum");

var audioTom1 = new Audio("sounds/tom-1.mp3");

var audioTom2 = new Audio("sounds/tom-2.mp3");

var audioTom3 = new Audio("sounds/tom-3.mp3");

var audioTom4 = new Audio("sounds/tom-4.mp3");

var audioCrash = new Audio("sounds/crash.mp3");

var audioKick = new Audio("sounds/kick-bass.mp3");

var audioSnare = new Audio("sounds/snare.mp3");


for(var a = 0; a < drumButton.length; a++ ) {

    drumButton[a].addEventListener("click", function(){

        var actualButton = this.innerHTML;

        makeSound(actualButton);

        buttonAnimation(actualButton);

    });

}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch(key) {

        case "m" : audioTom1.play();

        break;


        case "u" : audioTom2.play();

        break;


        case "s" : audioTom3.play();

        break;


        case "i" : audioTom4.play();

        break;


        case "c" : audioSnare.play();

        break;


        case "n" : audioCrash.play();

        break;


        case "d" : audioKick.play();

        break;

        default: console.log(actualButton);

    }

}
 
function buttonAnimation(currentKey) {

 var activeButton = document.querySelector("." + currentKey);

 activeButton.classList.add("pressed");

 setTimeout(function() {

    activeButton.classList.remove("pressed");

 }, 100);

}