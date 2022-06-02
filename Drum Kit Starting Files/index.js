

var buttons = document.querySelectorAll("button");

for (var ind = 0; ind < buttons.length; ind++) {
  buttons[ind].addEventListener("click", function() {
    makeSound(this.textContent);
    animation(this.textContent);
  });
}


document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animation(event.key);
});


function animation(key){
  var button = document.querySelector("."+key);
  button.classList.add("pressed");
  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
  // alert(button.classList);
}

function makeSound(key){
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
      break;
    default:
  }
  audio.play();
}
