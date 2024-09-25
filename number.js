let userInput=document.getElementById('userInput');
let gameResult=document.getElementById('gameResult');
let num=Math.ceil(Math.random()*100);
let show=document.getElementById('show');
console.log(num);
function checkGuess(){
    let guess=parseInt(userInput.value);
    if(num==guess)
    {
        gameResult.textContent="you won the game";
        gameResult.style.color="rgb(34, 229, 92)";
    }
    else if(guess>num)
    {
        gameResult.textContent="To high,Try again..";
    }
    else if(guess<num){
        gameResult.textContent="To low,Try again..";
    }
    else{
        gameResult.textContent="enter valid input";

    }
}