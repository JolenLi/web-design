


function getRandomNumber(){
  return Math.floor(Math.random() * 6)+1;
}

function getImgSrc(num){
  return "images/dice"+num+".png";
}

var num1 = getRandomNumber();
var num2 = getRandomNumber();

document.querySelector(".img1").src=getImgSrc(num1);
document.querySelector(".img2").src=getImgSrc(num2);
if(num1==num2)
  document.querySelector(".container h1").innerHTML="Draw";
else if(num1>num2)
  document.querySelector(".container h1").innerHTML="Player1 wins";
else
document.querySelector(".container h1").innerHTML="Player2 wins";
// alert();
