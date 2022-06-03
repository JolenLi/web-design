var buttonColor = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var flag = false;
var level = 0;

function reStart() {
  userClickedPattern = [];
  gamePattern = [];
  flag = false;
  level = 0;
  playSond("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  $("#level-title").text("Game Over,Press Space Key to Start");
}

$(".btn").on("click", function(event) {
  var userChosenColor = $(this).attr("id");
  makeDecision(userChosenColor);
})

function makeDecision(userChosenColor){
  userClickedPattern.push(userChosenColor);
  playSond(userChosenColor);
  animatePress(userChosenColor);
  var isRight = checkAnswer();
  if (!isRight)
    reStart();
  else if (isRight && userClickedPattern.length == gamePattern.length) {
    setTimeout(function() {
      nextSequence();
    }, 1000);
    userClickedPattern = [];
  }
}
$(document).keydown(function(event) {
  var key = event.key;
  console.log(event.key);
  if (!flag) {
    if (key == " ") {
      nextSequence();
      $("#level-title").text("Level " + level);
      flag = true;
    }
  } else {
    switch (key) {
      case "w":
        var userChosenColor = "green"
        break;
      case "a":
        var userChosenColor = "red";
        break;
      case "s":
        var userChosenColor = "yellow";
        break;
      case "d":
        var userChosenColor = "blue";
        break;
      default:
    }
    makeDecision(userChosenColor);
  }
})

function nextSequence() {
  if (flag) {
    level += 1;
    $("#level-title").text("Level " + level);
  }
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randomNumber];
  var chosenButton = $("#" + randomChosenColor);
  chosenButton.fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColor);
  playSond(randomChosenColor);
  return randomChosenColor;
}

function playSond(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer() {
  console.log(userClickedPattern);
  console.log(gamePattern);
  var ind = userClickedPattern.length;
  return userClickedPattern[ind - 1] == gamePattern[ind - 1];
}
