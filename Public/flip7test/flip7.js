//const { random } = require("mathjs");

// const { sum } = require("mathjs");
let flip3 = 0
let freeze = 0
let draw
let randomNr
let turn = 1
let runde = 1
let spielermenge = 1
let currentcard = 0
let player1 = {score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0 };
let player2 = {score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0 };
let player3 = {score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0 };
let player4 = {score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0 };
let player5 = {score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0 };
let player1deck = [] 
let player2deck = []
let player3deck = []
let player4deck = []
let player5deck = []

// DEBUG
function DEBUG () {

SCOREUPDATE()
//  alert(`spielermenge = ${spielermenge}, currentcard = ${currentcard} , turn = ${turn} `)
}
// calculate CardID for Query selector
function CardID (X,Y) {
return (10*X-10+Y)
}
// html syntax for Start & Restart

//Player Setup
function START(spielerzahl){
spielermenge = spielerzahl;
player1 = {cards : 0, passed : 0};
player2 = {cards : 0, passed : 0};
player3 = {cards : 0, passed : 0};
player4 = {cards : 0, passed : 0};
player5 = {cards : 0, passed : 0};




function PlayerInitialize (X) {
return `
<button class="player${X}name" onclick="PLAYERTARGET(${X})">Spieler ${X}</button>
 <p class="scoreplayer${X}">Score : 0 </p> 
<p class="totalscoreplayer${X}">Total Score : 0 </p> 
 <p class="player${X}secondchance">Second Chance</p>
<button class="pass" onclick="Pass(${X})">Pass</button>
 <button class="draw" onclick="Draw(${X})">Draw</button>
   ${CARDBACKGROUNDS(X)}
  `;
}
function CARDBACKGROUNDS (X) {
return `
    <div class="cardbox">
      <div class="card", id=card${(CardID(X,1))}></div>
      <div class="card", id=card${(CardID(X,2))}></div>
      <div class="card", id=card${(CardID(X,3))}></div>
      <div class="card", id=card${(CardID(X,4))}></div>
      <div class="card", id=card${(CardID(X,5))}></div>
      <div class="card", id=card${(CardID(X,6))}></div>
      <div class="card", id=card${(CardID(X,7))}></div>
      <div class="card", id=card${(CardID(X,8))}></div>
      <div class="card", id=card${(CardID(X,9))}></div>
      <div class="card", id=card${(CardID(X,10))}></div>
    </div>
  `;
}

document.querySelector('.mitte').innerHTML = `Runde ${runde} <br> Spieler ${turn}`

if(spielerzahl == 1) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = ""
  document.querySelector('.p3').innerHTML = PlayerInitialize(1)
  document.querySelector('.p4').innerHTML = ""
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 1
}
if(spielerzahl == 2) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = PlayerInitialize(1)
  document.querySelector('.p3').innerHTML = ""
  document.querySelector('.p4').innerHTML = PlayerInitialize(2)
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
  document.querySelector('.scoreboard').innerHTML = ""
    
  spielermenge = 2
}
if(spielerzahl == 3) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = PlayerInitialize(1)
  document.querySelector('.p3').innerHTML = PlayerInitialize(2)
  document.querySelector('.p4').innerHTML = PlayerInitialize(3)
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 3
}
if(spielerzahl == 4) {
  document.querySelector('.p1').innerHTML = PlayerInitialize(1)
  document.querySelector('.p2').innerHTML = PlayerInitialize(2)
  document.querySelector('.p3').innerHTML = ""
  document.querySelector('.p4').innerHTML = PlayerInitialize(3)
  document.querySelector('.p5').innerHTML = PlayerInitialize(4)
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 4
}
if(spielerzahl == 5) {
  document.querySelector('.p1').innerHTML = PlayerInitialize(1)
  document.querySelector('.p2').innerHTML = PlayerInitialize(2)
  document.querySelector('.p3').innerHTML = PlayerInitialize(3)
  document.querySelector('.p4').innerHTML = PlayerInitialize(4)
  document.querySelector('.p5').innerHTML = PlayerInitialize(5)
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 5
}
}
//Player Pass > Wertung > Turnupdate
function Pass(playerNr) {



if (turn == playerNr) {


  if (playerNr == 1) {player1.passed = 1
  document.querySelector('.player1name').textContent = "Player 1 (Passed)"}
  if (playerNr == 2) {player2.passed = 1
    document.querySelector('.player2name').textContent = "Player 2 (Passed)"}
  if (playerNr == 3) {player3.passed = 1
    document.querySelector('.player3name').textContent = "Player 3 (Passed)"}
  if (playerNr == 4) {player4.passed = 1
    document.querySelector('.player4name').textContent = "Player 4 (Passed)"}
  if (playerNr == 5) {player5.passed = 1
    document.querySelector('.player5name').textContent = "Player 5 (Passed)"}
  if (player1.passed == 1 && player2.passed == 1 &&  player3.passed == 1 &&  player4.passed == 1 &&  player5.passed == 1 && spielermenge == 5) {Wertung()}
  else if (player1.passed == 1 && player2.passed == 1 &&  player3.passed == 1 &&  player4.passed == 1 && spielermenge == 4) {Wertung()}
  else if (player1.passed == 1 && player2.passed == 1 &&  player3.passed == 1 && spielermenge == 3) {Wertung()}
  else if (player1.passed == 1 && player2.passed == 1 && spielermenge == 2) {Wertung()}
  else if (player1.passed == 1 && spielermenge == 1) {Wertung()}
    else TURNUPDATE(playerNr)
}}
//Calculate Current Turn / Update Headline   
function TURNUPDATE (x) {
turn += 1


// spieler Skip bei passing
if (player1.passed == 1 && turn == 1 && spielermenge > 1) {
  turn = 2}
if (player2.passed == 1 && turn == 2 && spielermenge > 2) {
  turn = 3}
if (player2.passed == 1 && turn == 2 && spielermenge == 2) {
  turn = 1}
if (player3.passed == 1 && turn == 3 && spielermenge > 3) {
  turn = 4}
if (player3.passed == 1 && turn == 3 && spielermenge == 3) {
  turn = 1}
if (player4.passed == 1 && turn == 4 && spielermenge > 4) {
  turn = 5}
if (player4.passed == 1 && turn == 4 && spielermenge == 4) {
  turn = 1}
if (player5.passed == 1 && turn == 5 && spielermenge == 5) {
  turn = 1
}

//turn über zu spieler 1 resetten
if (x >= spielermenge) {turn = 1}

//spieler Skip bei passing 
if (player1.passed == 1 && turn == 1 && spielermenge > 1) {
  turn = 2}
if (player2.passed == 1 && turn == 2 && spielermenge > 2) {
  turn = 3}
if (player2.passed == 1 && turn == 2 && spielermenge == 2) {
  turn = 1}
if (player3.passed == 1 && turn == 3 && spielermenge > 3) {
  turn = 4}
if (player3.passed == 1 && turn == 3 && spielermenge == 3) {
  turn = 1}
if (player4.passed == 1 && turn == 4 && spielermenge > 4) {
  turn = 5}
if (player4.passed == 1 && turn == 4 && spielermenge == 4) {
  turn = 1}
if (player5.passed == 1 && turn == 5 && spielermenge == 5) {
  turn = 1}



//turn display update
document.querySelector('.mitte').innerHTML = `Runde ${runde} <br> Spieler ${turn}`
}
//If player can and wants to draw add card to first empty slot > Turnupdate
function Draw(playerNr) {

if (playerNr == 1 && turn == 1) {
  if (player1.passed == 0) {currentcard = playerNr * 10 - 10 + player1.cards + 1 
  player1.cards += 1
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(1,currentcard)}
  TURNUPDATE(playerNr)}
  
if (playerNr == 2 && turn == 2) {
if (player2.passed == 0) {currentcard = playerNr * 10 - 10 + player2.cards + 1 
  player2.cards += 1
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(2,currentcard)}
  TURNUPDATE(playerNr)}

if (playerNr == 3 && turn == 3) {
if (player3.passed == 0) {currentcard = playerNr * 10 - 10 + player3.cards + 1 
  player3.cards += 1
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(3,currentcard)}
  TURNUPDATE(playerNr)}

if (playerNr == 4 && turn == 4) {
if (player4.passed == 0) {currentcard = playerNr * 10 - 10 + player4.cards + 1 
  player4.cards += 1
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(4,currentcard)}
  TURNUPDATE(playerNr)}

if (playerNr == 5 && turn == 5) {
if (player5.passed == 0) {currentcard = playerNr * 10 - 10 + player5.cards + 1 
  player5.cards += 1
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(5)}
  TURNUPDATE(playerNr)}
  


//alert(`#card${currentcard}`)
}
// Round Reset > Start > Turnupdate
function Wertung () {
runde += 1;
if (spielermenge == 1) {
document.querySelector('.player1name').textContent = "Player 1"
}
if (spielermenge == 2) {
document.querySelector('.player1name').textContent = "Player 1"
document.querySelector('.player2name').textContent = "Player 2"
}
if (spielermenge == 3) {
document.querySelector('.player1name').textContent = "Player 1"
document.querySelector('.player2name').textContent = "Player 2"
document.querySelector('.player3name').textContent = "Player 3"
}
if (spielermenge == 4) {
document.querySelector('.player1name').textContent = "Player 1"
document.querySelector('.player2name').textContent = "Player 2"
document.querySelector('.player3name').textContent = "Player 3"
document.querySelector('.player4name').textContent = "Player 4"
}
if (spielermenge == 5) {
document.querySelector('.player1name').textContent = "Player 1"
document.querySelector('.player2name').textContent = "Player 2"
document.querySelector('.player3name').textContent = "Player 3"
document.querySelector('.player4name').textContent = "Player 4"
document.querySelector('.player5name').textContent = "Player 5"
}
player1.passed = 0
player2.passed = 0
player3.passed = 0
player4.passed = 0
player5.passed = 0



alert("Everyone passed")
SCOREUPDATE()
START(spielermenge)
turn = 1
document.querySelector('.mitte').innerHTML = `Runde ${runde} - Spieler ${turn}`
currentcard = 0

}

function CardDraw (player) {
let randomNr = Math.floor(Math.random() * 90 + 1);

if      (randomNr <= 3)  draw = 97;
else if (randomNr <= 6)  draw = 12;
else if (randomNr <= 9)  draw = 99;
else if (randomNr <= 12) draw = 96;
else if (randomNr <= 13) draw = 1;
else if (randomNr <= 15) draw = 2;
else if (randomNr <= 18) draw = 3;
else if (randomNr <= 22) draw = 4;
else if (randomNr <= 27) draw = 5;
else if (randomNr <= 33) draw = 6;
else if (randomNr <= 40) draw = 7;
else if (randomNr <= 48) draw = 8;
else if (randomNr <= 57) draw = 9;
else if (randomNr <= 67) draw = 10;
else if (randomNr <= 78) draw = 11;
else                     draw = 98;


//alert(draw)
CardAddition(draw,player)

if (draw < 50) {return draw}
  else  { 
  if (player == 1) {player1.cards--}
  if (player == 2) {player2.cards--}
  if (player == 3) {player3.cards--}
  if (player == 4) {player4.cards--}
  if (player == 5) {player5.cards--}
  return "" }


}

function CardAddition (draw,player) {

if (draw == 99) { 
freeze = 1
alert("freeze")}


if (draw == 98) { 
flip3 = 1
alert("flip3")
PLAYERTARGET()}


if (draw == 97) {
  if (player == 1) {player1.secondchance = 1; document.querySelector(".player1secondchance").style.color = "red"}
  if (player == 2) {player2.secondchance = 1; document.querySelector(".player2secondchance").style.color = "red"}
  if (player == 3) {player3.secondchance = 1; document.querySelector(".player3secondchance").style.color = "red"}
  if (player == 4) {player4.secondchance = 1; document.querySelector(".player4secondchance").style.color = "red"}
  if (player == 5) {player5.secondchance = 1; document.querySelector(".player5secondchance").style.color = "red"}
}
if (draw == 96) { 
  if (player == 1) {player1.multi = 1}
  if (player == 2) {player2.multi = 1}
  if (player == 3) {player3.multi = 1}
  if (player == 4) {player4.multi = 1}
  if (player == 5) {player5.multi = 1}
}

let number
//Check for duplicates
if (player1deck.includes(draw) && player == 1) {
  if (player1.secondchance == 1) {player1.secondchance = 0 ; document.querySelector(".player1secondchance").style.color = "white"; turn--; player1.cards-- ; TURNUPDATE()}
  else {Pass(1); turn -- ; draw = 51 ; player1deck = []}}
if (player2deck.includes(draw) && player == 2) {
  if (player2.secondchance == 1) {player2.secondchance = 0 ; document.querySelector(".player2secondchance").style.color = "white"; turn--; player2.cards-- ; TURNUPDATE()}
  else {Pass(2); turn -- ; draw = 51 ; player2deck = []}}
if (player3deck.includes(draw) && player == 3) {
  if (player3.secondchance == 1) {player3.secondchance = 0 ; document.querySelector(".player3secondchance").style.color = "white"; turn--; player3.cards-- ; TURNUPDATE()}
  else {Pass(3); turn -- ; draw = 51 ; player3deck = []}}
if (player4deck.includes(draw) && player == 4) {
  if (player4.secondchance == 1) {player4.secondchance = 0 ; document.querySelector(".player4secondchance").style.color = "white"; turn--; player4.cards-- ; TURNUPDATE()}
  else {Pass(4); turn -- ; draw = 51 ; player4deck = []}}
if (player5deck.includes(draw) && player == 5) {
  if (player5.secondchance == 1) {player5.secondchance = 0 ; document.querySelector(".player5secondchance").style.color = "white"; turn--; player5.cards-- ; TURNUPDATE()}
  else {Pass(5); turn -- ; draw = 51 ; player5deck = []}}



// add card to deck
if (player == 1 && draw < 50) {player1deck.push(draw)}
if (player == 2 && draw < 50) {player2deck.push(draw)}
if (player == 3 && draw < 50) {player3deck.push(draw)}
if (player == 4 && draw < 50) {player4deck.push(draw)}
if (player == 5 && draw < 50) {player5deck.push(draw)}

player1.score = player1deck.reduce((sum, karte) => sum + karte,0); 
player2.score = player2deck.reduce((sum, karte) => sum + karte,0); 
player3.score = player3deck.reduce((sum, karte) => sum + karte,0); 
player4.score = player4deck.reduce((sum, karte) => sum + karte,0); 
player5.score = player5deck.reduce((sum, karte) => sum + karte,0); 

document.querySelector('.scoreplayer1').textContent = `Score : ${player1.score}`
document.querySelector('.scoreplayer2').textContent = `Score : ${player2.score}`
document.querySelector('.scoreplayer3').textContent = `Score : ${player3.score}`
document.querySelector('.scoreplayer4').textContent = `Score : ${player4.score}`
document.querySelector('.scoreplayer5').textContent = `Score : ${player5.score}`



}


function PLAYERTARGET (playerNr) {
alert(`targeting player${playerNr}`)
if (freeze == 1) {

if (playerNr == 1) {player1.passed = 1
  document.querySelector('.player1name').textContent = "Player 1 (Passed)"}
if (playerNr == 2) {player2.passed = 1
  document.querySelector('.player2name').textContent = "Player 2 (Passed)"}
if (playerNr == 3) {player3.passed = 1
  document.querySelector('.player3name').textContent = "Player 3 (Passed)"}
if (playerNr == 4) {player4.passed = 1
  document.querySelector('.player4name').textContent = "Player 4 (Passed)"}
if (playerNr == 5) {player5.passed = 1
  document.querySelector('.player5name').textContent = "Player 5 (Passed)"}

  freeze = 0
  turn--
  TURNUPDATE()
}


if (flip3 == 1) {

  currentcard = playerNr * 10 - 10 + `player${playerNr}.cards` + 1 
  `player${playerNr}.cards`++
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(playerNr,currentcard)
  currentcard = playerNr * 10 - 10 + `player${playerNr}.cards` + 1 
  `player${playerNr}.cards`++
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(playerNr,currentcard)
  currentcard = playerNr * 10 - 10 + `player${playerNr}.cards` + 1 
  `player${playerNr}.cards`++
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(playerNr,currentcard)



  flip3 = 0
  turn--
  TURNUPDATE()
  }


}


function SCOREUPDATE () {

alert(player1.totalscore)
player1.totalscore = player1.totalscore + player1.score 
player1.score = 0
document.querySelector('.totalscoreplayer1').value = `${player1.totalscore}`
player2.totalscore = player2.totalscore + player2.score 
player2.score = 0
document.querySelector('.totalscoreplayer2').textContent = `${player2.totalscore}`
player3.totalscore = player3.totalscore + player3.score 
player3.score = 0
document.querySelector('.totalscoreplayer3').textContent = `${player3.totalscore}`
player4.totalscore = player4.totalscore + player4.score 
player4.score = 0
document.querySelector('.totalscoreplayer4').textContent = `${player4.totalscore}`
player5.totalscore = player5.totalscore + player5.score 
player5.score = 0
document.querySelector('.totalscoreplayer5').textContent = `${player5.totalscore}`




}


// Am ende der Runde alle punkte saven
// wenn einer am ende der runde 200 punkte hat gewinnt der spieler mit der höchsten punktzahl
// x2 und Freeze und Flip3
// wenn einer 7 karten hat (keine bonuskarten) ended die runde und derjenige bekommt 15 extrapunkte