const buttons = document.getElementById("buttons")
let winsound = new Audio('./dice/win.mp3')
var losesound = new Audio('./dice/lose.wav')
var score = 0
var scoreText

function winnoise() {
    winsound.play();
   
}
function losenoise() {
   losesound.play();
  
}


buttons.addEventListener("click",()=>{
   var randomNumber = Math.floor(Math.random() * 6) + 1
   var dimages = "dice/"+randomNumber +".png"
   document.querySelector(".piccy").setAttribute('src', dimages)
   score += randomNumber;
   document.querySelector("h3").innerHTML = "Score = " + (score)
   
      if (randomNumber == 1){ 
         document.querySelector("h1").innerHTML = "You Rolled a One You Lose"
         losenoise();
         score = 0
         document.querySelector("h3").innerHTML = "Score = Zero"
     } else if (score > 20){ 
         score = 0
          document.querySelector("h1").innerHTML = "You Rolled More Than Twenty You Win"
          winnoise();
     } else{
      document.querySelector("h1").innerHTML = "Playing"
     }
})
   
