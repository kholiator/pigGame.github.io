var scores,roundScore,activePlayer;

function initialize(){ 
scores=[0,0];
roundScore=0;
activePlayer=0;
document.querySelector('.dice').style.display='none';
document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('current--1').textContent='0';
};
initialize();
//roll button

document.querySelector('.btn--roll').addEventListener('click',function(){
    var dice=Math.floor(Math.random()*6+1);
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    if(dice===1){
     document.querySelector('#current--'+activePlayer).textContent='0';
    
     activatingNextPlayer();
     roundScore=0;
     diceDOM.style.display='none';

    }
    else{
    roundScore+=dice;
     document.querySelector('#current--'+activePlayer).textContent=roundScore;


     if((scores[activePlayer]+roundScore)>=100){
         scores[activePlayer]+=roundScore;
         document.getElementById('score--'+activePlayer).textContent=scores[activePlayer];
         roundScore=0;
         onWinning();

     }
        
    }  
});

//hold button

document.querySelector('.btn--hold').addEventListener('click',function(){
    scores[activePlayer]+=roundScore;
    document.getElementById('score--'+activePlayer).textContent=scores[activePlayer];

    roundScore=0;
    document.querySelector('#current--'+activePlayer).textContent=roundScore;
    activatingNextPlayer();
    document.querySelector('.dice').style.display='none';


});

//new button

document.querySelector('.btn--new').addEventListener('click',function(){
    document.querySelector('.player--'+activePlayer).classList.remove('player--winner');
    document.querySelector('#score--'+activePlayer).style.color='#c7365f';

initialize();

document.querySelector('.btn--roll').style.display='block';
document.querySelector('.btn--hold').style.display='block';
document.querySelector('.player--0').classList.add('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.getElementById('name--0').textContent='Player 1';
document.getElementById('name--1').textContent='Player 2';


});

function onWinning(){
   document.querySelector('.player--'+activePlayer).classList.add('player--winner');
   document.querySelector('.btn--roll').style.display='none';
   document.querySelector('.btn--hold').style.display='none';
   document.querySelector('#score--'+activePlayer).style.color='darkgoldenrod';
   document.getElementById('name--'+activePlayer).textContent='Winner!';
   document.querySelector('.dice').style.display='none';
   document.getElementById('current--'+activePlayer).textContent='0';
   document.querySelector('.player--'+activePlayer).classList.remove('player--active');
}

function activatingNextPlayer(){
    document.querySelector('.player--'+activePlayer).classList.remove('player--active');
    activePlayer=1-activePlayer;
    document.querySelector('.player--'+activePlayer).classList.add('player--active');
}