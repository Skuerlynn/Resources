//const { random } = require("mathjs");

let turn = 1
let runde = 1
let spielermenge = 1
let currentcard = 0
let player1 = {score : 0, cards : 0, currentpoints : 0, passed : 0};
let player2 = {score : 0, cards : 0, currentpoints : 0, passed : 0};
let player3 = {score : 0, cards : 0, currentpoints : 0, passed : 0};
let player4 = {score : 0, cards : 0, currentpoints : 0, passed : 0};
let player5 = {score : 0, cards : 0, currentpoints : 0, passed : 0};

// DEBUG
function DEBUG () {

alert(`spielermenge = ${spielermenge}, currentcard = ${currentcard} , turn = ${turn} `)
}
// calculate CardID for Query selector
function CardID (X,Y) {
return (10*X-10+Y)
}
// html syntax for Start & Restart
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
//Player Setup
function START(spielerzahl){
spielermenge = spielerzahl;
player1 = {cards : 0, currentpoints : 0, passed : 0};
player2 = {cards : 0, currentpoints : 0, passed : 0};
player3 = {cards : 0, currentpoints : 0, passed : 0};
player4 = {cards : 0, currentpoints : 0, passed : 0};
player5 = {cards : 0, currentpoints : 0, passed : 0};
if(spielerzahl == 1) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = ""
  document.querySelector('.p3').innerHTML = `<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button> ${CARDBACKGROUNDS(1)}`
  document.querySelector('.p4').innerHTML = ""
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 1
}
if(spielerzahl == 2) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = `<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button> ${CARDBACKGROUNDS(1)}`
  document.querySelector('.p3').innerHTML = ""
  document.querySelector('.p4').innerHTML = `<p class="player2name">Spieler 2</p> <br> <button class="pass" onclick="Pass(2)">Pass</button> <button class="draw" onclick="Draw(2)">Draw</button> ${CARDBACKGROUNDS(2)}`
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
  spielermenge = 2
}
if(spielerzahl == 3) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = `<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button> ${CARDBACKGROUNDS(1)}`
  document.querySelector('.p3').innerHTML = `<p class="player2name">Spieler 2</p> <br> <button class="pass" onclick="Pass(2)">Pass</button> <button class="draw" onclick="Draw(2)">Draw</button> ${CARDBACKGROUNDS(2)}`
  document.querySelector('.p4').innerHTML = `<p class="player3name">Spieler 3</p> <br> <button class="pass" onclick="Pass(3)">Pass</button> <button class="draw" onclick="Draw(3)">Draw</button> ${CARDBACKGROUNDS(3)}`
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 3
}
if(spielerzahl == 4) {
  document.querySelector('.p1').innerHTML = `<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button> ${CARDBACKGROUNDS(1)}`
  document.querySelector('.p2').innerHTML = `<p class="player2name">Spieler 2</p> <br> <button class="pass" onclick="Pass(2)">Pass</button> <button class="draw" onclick="Draw(2)">Draw</button> ${CARDBACKGROUNDS(2)}`
  document.querySelector('.p3').innerHTML = ""
  document.querySelector('.p4').innerHTML = `<p class="player3name">Spieler 3</p> <br> <button class="pass" onclick="Pass(3)">Pass</button> <button class="draw" onclick="Draw(3)">Draw</button> ${CARDBACKGROUNDS(3)}`
  document.querySelector('.p5').innerHTML = `<p class="player4name">Spieler 4</p> <br> <button class="pass" onclick="Pass(4)">Pass</button> <button class="draw" onclick="Draw(4)">Draw</button> ${CARDBACKGROUNDS(4)}`
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 4
}
if(spielerzahl == 5) {
  document.querySelector('.p1').innerHTML = `<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button> ${CARDBACKGROUNDS(1)}`
  document.querySelector('.p2').innerHTML = `<p class="player2name">Spieler 2</p> <br> <button class="pass" onclick="Pass(2)">Pass</button> <button class="draw" onclick="Draw(2)">Draw</button> ${CARDBACKGROUNDS(2)}`
  document.querySelector('.p3').innerHTML = `<p class="player3name">Spieler 3</p> <br> <button class="pass" onclick="Pass(3)">Pass</button> <button class="draw" onclick="Draw(3)">Draw</button> ${CARDBACKGROUNDS(3)}`
  document.querySelector('.p4').innerHTML = `<p class="player4name">Spieler 4</p> <br> <button class="pass" onclick="Pass(4)">Pass</button> <button class="draw" onclick="Draw(4)">Draw</button> ${CARDBACKGROUNDS(4)}`
  document.querySelector('.p5').innerHTML = `<p class="player5name">Spieler 5</p> <br> <button class="pass" onclick="Pass(5)">Pass</button> <button class="draw" onclick="Draw(5)">Draw</button> ${CARDBACKGROUNDS(5)}`
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
if (x == spielermenge) {turn = 1}

if (player1.passed == 1 && turn == 1 && spielermenge >= 1) {
  turn = 2}
if (player2.passed == 1 && turn == 2 && spielermenge >= 2) {
  turn = 3}
if (player3.passed == 1 && turn == 3 && spielermenge >= 3) {
  turn = 4}
if (player4.passed == 1 && turn == 4 && spielermenge >= 4) {
  turn = 5}
if (player5.passed == 1 && turn == 5 && spielermenge == 5) {
  turn = 1
}
if (player1.passed == 1 && turn == 1 && spielermenge > 1) {
  turn = 2}
if (player2.passed == 1 && turn == 2 && spielermenge > 2) {
  turn = 3}
if (player3.passed == 1 && turn == 3 && spielermenge > 3) {
  turn = 4}
if (player4.passed == 1 && turn == 4 && spielermenge > 4) {
  turn = 5}
if (player5.passed == 1 && turn == 5 && spielermenge == 5) {
  turn = 1
}
document.querySelector('.Turn').innerHTML = `Runde ${runde} - Spieler ${turn}`
}
//If player can and wants to draw add card to first empty slot > Turnupdate
function Draw(playerNr) {

if (playerNr == 1 && turn == 1) {
  if (player1.passed == 0) {currentcard = playerNr * 10 - 10 + player1.cards + 1 
  player1.cards += 1
  {document.querySelector(`#card${currentcard}`).textContent = CardDraw()}}
  TURNUPDATE(playerNr)}
  
if (playerNr == 2 && turn == 2) {
if (player2.passed == 0) {currentcard = playerNr * 10 - 10 + player2.cards + 1 
  player2.cards += 1
  {document.querySelector(`#card${currentcard}`).textContent = CardDraw()}}
  TURNUPDATE(playerNr)}

if (playerNr == 3 && turn == 3) {
if (player3.passed == 0) {currentcard = playerNr * 10 - 10 + player3.cards + 1 
  player3.cards += 1
  {document.querySelector(`#card${currentcard}`).textContent = CardDraw()}}
  TURNUPDATE(playerNr)}

if (playerNr == 4 && turn == 4) {
if (player4.passed == 0) {currentcard = playerNr * 10 - 10 + player4.cards + 1 
  player4.cards += 1
  {document.querySelector(`#card${currentcard}`).textContent = CardDraw()}}
  TURNUPDATE(playerNr)}

if (playerNr == 5 && turn == 5) {
if (player5.passed == 0) {currentcard = playerNr * 10 - 10 + player5.cards + 1 
  player5.cards += 1
  {document.querySelector(`#card${currentcard}`).textContent = CardDraw()}}
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
START(spielermenge)
turn = 1
document.querySelector('.Turn').innerHTML = `Runde ${runde} - Spieler ${turn}`
currentcard = 0


alert("Everyone passed")

}

function CardDraw (CardPosition) {
let randomNr = Math.floor(Math.random() * 90 );
let draw
if (randomNr <= 90) {draw = 12}
if (randomNr <= 78) {draw = 11}
if (randomNr <= 67) {draw = 10}
if (randomNr <= 57) {draw = 9}
if (randomNr <= 48) {draw = 8}
if (randomNr <= 40) {draw = 7}
if (randomNr <= 33) {draw = 6}
if (randomNr <= 27) {draw = 5}
if (randomNr <= 22) {draw = 4}
if (randomNr <= 18) {draw = 3}
if (randomNr <= 15) {draw = 2}
if (randomNr <= 13) {draw = 1}
if (randomNr <= 12) {draw = 96}
if (randomNr <= 9) {draw = 97}
if (randomNr <= 6) {draw = 98}
if (randomNr <= 3) {draw = 99}
return draw
}
