
var buttons = document.querySelectorAll(".drum");

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playTom1Audio);
}

function handleClick() {
  alert("I got clicked!");
}

function playTom1Audio() {
  var tom1Audio = new Audio('sounds/tom-1.mp3');
  tom1Audio.play();
}
