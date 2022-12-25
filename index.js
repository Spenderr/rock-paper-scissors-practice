var choiceBtn = document.querySelectorAll('.choiceBtn');
var playerScore = 0;
var computerScore= 0;


let player,plyr;
let computer,cmpt;
let result = ' '; 


choiceBtn.forEach(button =>  button.addEventListener("click",() =>                                               
{
    player = button.innerText.toLowerCase();
    computerChoice();
    console.log(player);
    playRound(player,computerChoice());
}))

function computerChoice()
{
     var randonInt = Math.floor(Math.random()*3)+1;
    switch(randonInt)
    {
        case 1: computer = 'rock';
            break;
        case 2: computer = 'scissors';
            break;
        case 3: computer = 'paper';
            break;
    }
    return(computer);
    //console.log(randonInt +" is the number")
    //console.log(computer);
}
//console.log(resultBox.innerText);
function playRound(plyr,cmpt)
{
    if(
       (plyr == 'rock' && cmpt=='rock')||
       (plyr == 'paper' && cmpt=='paper')||
       (plyr == 'scissors' && cmpt=='scissors')
      )
    {
        result = "Computer Chose " + cmpt+" as well...\nTie round";
    }
    else if((plyr == 'rock' && cmpt == 'scissors')||
           (plyr == 'paper' && cmpt == 'rock')||
           (plyr == 'scissors' && cmpt == 'paper'))
    {
        result = plyr + " beats "+ cmpt + "\n";
        playerScore++;
        console.log(playerScore);
    }
    else
    {
        result = cmpt + " beats "+ plyr + "\n You Lose";
        computerScore++;
        console.log(computerScore);
    }
            
        document.querySelector('#resultBox').innerText = result;  
    if(playerScore == 5)
{
    alert("You won the game, Congratulations");
    
}
else if(computerScore == 5)
{
    alert("you lost the game, Retry?");
    
}
    
}

