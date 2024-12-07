var player1= prompt("please enter 1st player's name");
document.querySelectorAll('p')[0].innerHTML=player1;


var player2= prompt("please enter 2nd player's name");
document.querySelectorAll('p')[1].innerHTML=player2;


var button= document.querySelector("button");
button.addEventListener("click",playTheGame);

function playTheGame(){

    var random_num1= Math.floor((Math.random()*6)+1);
var imageURL1= "./images/"+"dice"+random_num1+".png";

document.querySelector(".img1").setAttribute("src",imageURL1);

var random_num2= Math.floor((Math.random()*6)+1);
var imageURL2= "./images/"+"dice"+random_num2+".png";

document.querySelector(".img2").setAttribute("src",imageURL2);

if (random_num1 > random_num2){
   document.querySelector("h1").innerHTML=player1+" "+"Win!";
}

else if(random_num1 < random_num2){
    document.querySelector("h1").innerHTML=player2+" "+"Win!";
}
else{
    document.querySelector("h1").innerText="It's a draw!";
}

};
