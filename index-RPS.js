//player selection 
let playerSelect;
   
const rockbutton = document.querySelector("#Rock");
const papperbutton = document.querySelector("#papper");
const  scissorsbutton = document.querySelector("#Scissors");



rockbutton.addEventListener("click", function RockPlayer(){
    playerSelect="rock";
    console.log(playerSelect);
    PlayRound();
})

papperbutton.addEventListener("click",
function PapperPlayer(){
    playerSelect="papper";
    console.log(playerSelect);
    PlayRound();
} )

scissorsbutton.addEventListener("click",function Scissorsplayer(){
    playerSelect="scissors";
    console.log(playerSelect);
    PlayRound();
})
    

//selection Pc function |
function getRandomNumber(min,max){
    min = Math.ceil(min);
    max=  Math.floor(max);
    return Math.floor(Math.random()* (max - min  + 1) + min);
}

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

//playingfunction
let winner;
let roundCount= 0;
let winCount=0;
function PlayRound(playerSelection,ComputerSelection){
 

  playerSelection=playerSelect;
   
    ComputerSelection = getRandoChoice();
    
    console.log("This Round:");
    console.log("your chose : " + playerSelection);
    console.log("PC chose : " + ComputerSelection);

   

    function rockChose(){ 
        if(ComputerSelection=="rock"){
          winner="its a draw";
          
        }
        else if(ComputerSelection=="scissors"){
            winner="you win!";
            winCount=winCount +1;

        }
        else if(ComputerSelection=="papper" ){
            winner="you lose";
        }
        return winner
    }
    function scissorChose(){
        if(ComputerSelection=="rock"){
        winner="you lose";
      }
        else if(ComputerSelection=="scissors"){
          winner="its a draw";
      }
        else if(ComputerSelection=="papper" ){
          winner="you win";
          winCount=winCount +1;
      }
      return winner
    }
    function papperChose(){
        if(ComputerSelection=="rock"){
           winner="you win!" ;
           winCount=winCount +1;
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
  //generar el score al jugar


    let scoreList = document.querySelector('.listScore');
    let listItem = document.createElement('li');

    let ContentItem= document.createTextNode( playerSelection + ' vs '+ ComputerSelection + '  ' + winner);
    listItem.appendChild(ContentItem);
    scoreList.appendChild(listItem);

//cuenta 5 rondas y detiene el juego avisando el ganador 

    roundCount=roundCount + 1;

    if(roundCount==5){
        let score=document.getElementById('result');
        let winnerDiv=document.createElement('p');
        let divContent;
        if(winCount>=3){divContent =document.createTextNode("You win he Game");}
        if(winCount<3){divContent =document.createTextNode("You NOT win he Game");}

        winnerDiv.appendChild(divContent);
        score.appendChild(winnerDiv);


        //disabling buttons
        rockbutton.disabled=true;
        papperbutton.disabled=true;
        scissorsbutton.disabled=true;
    }
       // alert(winner + " the game");
       return winner
}


 

















//5 rounds function
//function PlayGame(score){
 //   score=[];
    
 //   for (let i = 0; i<5 ;i++){
 //    score[i]="round";   
  //   score[i]= PlayRound();
     
      
 //   }
 //   return score
//}
//console.log( PlayGame());

