let choices = ['rock','paper','scissor'];
let x,y,i;


function playerSelection(){
    var selection = prompt('Rock Paper or Scissor ' + '\ngame ends in 5' + '\nRound: '+ i );
    return selection.charAt(0).toLocaleLowerCase() + selection.toLocaleLowerCase().slice(1);
    
}

//Used the line below for debugging
/*console.log(playerSelection());*/

function getComputerChoice(){
    
    return choices[Math.floor(Math.random()*choices.length)];
}

//Used the line below for debugging
/*console.log(getComputerChoice());*/

function playRound(x,y){
    
    if(((x === 'rock') & (y === 'rock')) ||
      ((x === 'paper') & (y === 'paper')) ||
      ((x === 'scissor') & (y === 'scissor')))
        {
        console.log('its a tie, the computer chose ' + y);
    }
    
    else if(((x === 'scissor') & (y === 'rock')) || 
           ((x === 'paper') & (y === 'scissor')) ||
           ((x === 'rock') & (y === 'paper')))    
     {
     console.log('you lose, ' + y + ' beats ' + x);
     }
    
    
    else if(((x === 'scissor') & (y === 'paper'))||
           ((x === 'paper') & (y === 'rock'))||
           ((x === 'rock') & (y === 'scissor')))
    {
     console.log('you win, '+ x + ' beats ' + y);
    }

    else{
    console.log('you entered an invalid arguement, please try again');
    
    }
}



for(i = 0; i < 5; i++){
    playRound(playerSelection(),getComputerChoice());
}




