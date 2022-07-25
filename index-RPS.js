

function getRandomNumber(min,max){
    min = Math.ceil(min);
    max=  Math.floor(max);
    return Math.floor(Math.random()* (max - min  + 1) + min);
}
 //console.log(getRandomNumber(1,3));
function getRandoChoice(){
    let choiceNumber= getRandomNumber(1,3);
    let choice;
    if(choiceNumber==1){
        choice="rock";
    }
    else if(choiceNumber==2){
        choice="papper";
    }
    else if(choiceNumber==3){
        choice="scissors";
    }
return choice
}
//console.log(getRandoChoice());

function PlayRound(playerSelection,ComputerSelection){
    let winner;
  
    
    playerSelection = prompt("choose your weapon!");
    ComputerSelection = getRandoChoice();
    
    console.log("This Round:");
    console.log("your chose : " + playerSelection);
    console.log("PC chose : " + ComputerSelection);

    playerSelection.toLowerCase();

    function rockChose(){ 
        if(ComputerSelection=="rock"){
          winner="its a draw";
        }
        else if(ComputerSelection=="scissors"){
            winner="you win!";
        }
        else if(ComputerSelection=="papper" ){
            winner="you lose :(";
        }
        return winner
    }
    function scissorChose(){
        if(ComputerSelection=="rock"){
        winner="you lose :(";
      }
        else if(ComputerSelection=="scissors"){
          winner="its a draw";
      }
        else if(ComputerSelection=="papper" ){
          winner="you win";
      }
      return winner
    }
    function papperChose(){
        if(ComputerSelection=="rock"){
           winner="you win!" ;
        }
        else if(ComputerSelection=="scissors"){
            winner="you lose";
        }
        else if(ComputerSelection=="papper"){
            winner = "its a draw";
        }    
        return winner
    }

     
    if(playerSelection=="rock"){
    rockChose();
    }
    if(playerSelection=="scissors"){
    scissorChose();
    }
    if(playerSelection=="papper"){
    papperChose();
    }
   // if(playerSelection!= "rock" || playerSelection !="scissors"|| playerSelection !="papper"){
     //   winner="chose a correct weapon!!";
       // }
return winner 
}

function PlayGame(score){
    score=[];
    
    for (let i = 0; i<5 ;i++){
     score[i]="round";   
     score[i]= PlayRound();
     
      
    }
    return score
}
console.log( PlayGame());

