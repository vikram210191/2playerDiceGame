
var randomNo1 = Math.floor(Math.random()*6+1) ;
var randomNo2 = Math.floor(Math.random()*6+1) ;

var images1 = "dice"+randomNo1+".png";
var images2 = "dice"+randomNo2+".png";

document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);


if(randomNo1>randomNo2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins.";
}
else if(randomNo1<randomNo2){
  document.querySelector("h1").innerHTML ="Player 2 wins.🚩";
}
else {
  document.querySelector("h1").innerHTML ="🚩Draw! Refresh Again🚩"
}
