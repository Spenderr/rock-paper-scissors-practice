let choices = ['rock','paper','scissor'];
let x,y;

function playerSelection(){
    var selection = prompt('Rock Paper or Scissor');
    return selection.charAt(0).toLocaleLowerCase() + selection.toLocaleLowerCase().slice(1);
    
}
/*console.log(playerSelection());*/

function getComputerChoice(){
    
    return choices[Math.floor(Math.random()*choices.length)];
}

/*console.log(getComputerChoice());*/

function checkResult(x,y){
    
    if((x === 'rock') & (y === 'rock')){
        console.log('its a tie, the computer chose rock');
    }
    else if((x === 'paper') & (y === 'paper')){
        console.log('its a tie, the computer chose paper');
    }
    else if((x === 'scissor') & (y === 'scissor')){
        console.log('its a tie, the computer chose scissor');
    }
    else if((x === 'scissor') & (y === 'rock')){
     console.log('you lose, rock beats scissors');
     }
    else if((x === 'scissor') & (y === 'paper')){
     console.log('you win, scissor beats paper');
    }
    else if((x === 'paper') & (y === 'scissor')){
      console.log('you lose, scissor beats paper');
     }
    else if((x === 'paper') & (y === 'rock')){
        console.log('you win, paper beats rock');
    }
    else if((x === 'rock') & (y === 'scissor')){
        console.log('you win, rock beats scissor');
     }
    else if((x === 'rock') & (y === 'paper')){
        console.log('you lose, paper beats rock');
     }
    else{
    console.log('you entered an invalid arguement, please try again');
    
    }
}

console.log(checkResult(playerSelection(),getComputerChoice()));
