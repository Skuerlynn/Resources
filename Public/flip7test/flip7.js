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
let players = 
[
{score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0, deck : []  },
{score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0, deck : []  },
{score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0, deck : []  },
{score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0, deck : []  },
{score : 0, cards : 0, wins : 0, passed : 0, secondchance : 0, multi : 0, totalscore : 0, deck : []  }
]

// DEBUG
function DEBUG () {
//SCOREUPDATE()
alert(turn)
TURNUPDATE()

}

// calculate CardID for Query selector
function CardID (X,Y) {
return (10*X-10+Y)
}
// html syntax for Start & Restart



//Player Pass > Wertung > Turnupdate
function Pass(playerNr) {



players[playerNr - 1].passed = 1
document.querySelector(`.player${playerNr}name`).textContent = `Player ${playerNr} (Passed)`

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// wenn alle passen >> Wertung | sonst >> Turnupdate///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (players.slice(0, spielermenge).every(playerinline => playerinline.passed == 1)) {
    Wertung();
} else {
    if (playerNr == turn) {TURNUPDATE()}
}

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Calculate Current Turn / Update Headline ///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
function TURNUPDATE () {

////////////////////UPDATE CURRENT SCORE
REFRESHSCOREDISPLAY ()

do {

  turn ++
  if (turn > spielermenge) {turn = 1};
  }

while (players[turn - 1].passed == 1)


document.querySelector('.mitte').innerHTML = `Runde ${runde} <br> Spieler ${turn}`
} 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////If player can and wants to draw add card to first empty slot > Turnupdate//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Draw(playerNr) {

if (playerNr == turn ) {
  
   players[playerNr - 1].cards++
   currentcard = playerNr * 10 - 10 + players[playerNr - 1].cards
   document.querySelector(`#card${currentcard}`).textContent = CardDraw(playerNr)
     

  TURNUPDATE()}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////Round Reset > ReStart > Turnupdate///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

alert("Everyone passed")
SCOREUPDATE ()
RESETVALUES(spielermenge)

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////CARD RANDOMIZER///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CardDraw (playerNr) {
let randomNr = Math.floor(Math.random() * 90 + 1);

if      (randomNr <= 3)  draw = 97;
else if (randomNr <= 6)  draw = 98;
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
else                     draw = 12;


  ///////////////////Check for duplicates
if (players[playerNr - 1].deck.includes(draw)) { alert(`duplicate of ${draw}`)
  if (players[playerNr - 1].secondchance == 1) {players[playerNr - 1].secondchance = 0 ; document.querySelector(`.player${playerNr}secondchance`).style.color = "white"; draw = 51}
  else {players[playerNr - 1].score = 0;players[playerNr - 1].deck = [];  Pass(playerNr) ;turn-- ; return ""}
}

////////////////////Add  BASIC cards to deck
if (draw < 50 ) {players[playerNr - 1].deck.push(draw)}


REFRESHSCOREDISPLAY ()

if (draw < 50) {return draw ;    players[playerNr - 1].cards++}
  else  {Specialcards(draw,playerNr)
  players[playerNr - 1].cards--
  return "" }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////CARD PROCESSOR//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Specialcards (draw,playerNr) {


/////////////// HANDLE FREEZE
if (draw == 99) { 
freeze = 1
alert("FREEZE: make any player pass by clicking their name")}

////////////// HANDLE FLIP3
if (draw == 98) { 
flip3 = 1
alert("FLIP 3: click any player to make them draw 3 cards in a row")}


//////////////// HANDLE SECONDCHANCE
if (draw == 97) {players[playerNr - 1].secondchance = 1 ; document.querySelector(`.player${playerNr}secondchance`).style.color = "red"}

/////////////////HANDLE MULTI
if (draw == 96) {players[playerNr - 1].multi = 1 ; document.querySelector(`.player${playerNr}name`).style.color = "red"}

REFRESHSCOREDISPLAY ()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////USE SPECIAL CARDS//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function PLAYERTARGET (playerNr) {
//alert(`targeting player${playerNr}`)
if (freeze == 1) {
    Pass(playerNr)
    freeze = 0
    }

if (flip3 == 1) {

let savecurrentturn = turn

  currentcard = playerNr * 10 - 10 + players[playerNr - 1].cards + 1
  players[playerNr - 1].cards++ 
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(playerNr,currentcard)

 if (players[playerNr - 1].passed == 1) {}
  else {  currentcard = playerNr * 10 - 10 + players[playerNr - 1].cards + 1
  players[playerNr - 1].cards++ 
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(playerNr,currentcard)}

 if (players[playerNr - 1].passed == 1) {}
  else {  currentcard = playerNr * 10 - 10 + players[playerNr - 1].cards + 1
  players[playerNr - 1].cards++ 
  document.querySelector(`#card${currentcard}`).textContent = CardDraw(playerNr,currentcard)}

turn = savecurrentturn
turn--

TURNUPDATE()

  flip3 = 0

  }

}

function REFRESHSCOREDISPLAY () {

for (let i = 0; i < players.length; i++) {
  players[i].score = players[i].deck.reduce((sum, karte) => sum + karte,0)
  if (players[i].multi == 1) {players[i].score = players[i].score*2}
  document.querySelector(`.scoreplayer${i + 1}`).textContent = players[i].score}

}

function SCOREUPDATE () {

for (let i = 0; i < players.length; i++) {
  players[i].totalscore = players[i].score + players[i].totalscore ; players[i].score = 0
  document.querySelector(`.totalscoreplayer${i + 1}`).textContent = `Total Score : ${players[i].totalscore}`
}

}


function PlayerInitialize (X) {
return `
<button class="player${X}name" onclick="PLAYERTARGET(${X})">Spieler ${X}</button>
 <p class="scoreplayer${X}">${players[X - 1].score}</p> 
<p class="totalscoreplayer${X}">Total Score : ${players[X - 1].totalscore} </p> 
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

function DOMADJUSTMENT (spielermenge) {
document.querySelector('.mitte').innerHTML = `Runde ${runde} <br> Spieler ${turn}`

if(spielermenge == 1) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = ""
  document.querySelector('.p3').innerHTML = PlayerInitialize(1)
  document.querySelector('.p4').innerHTML = ""
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 1
}
if(spielermenge == 2) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = PlayerInitialize(1)
  document.querySelector('.p3').innerHTML = ""
  document.querySelector('.p4').innerHTML = PlayerInitialize(2)
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
  document.querySelector('.scoreboard').innerHTML = ""
    
  spielermenge = 2
}
if(spielermenge == 3) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = PlayerInitialize(1)
  document.querySelector('.p3').innerHTML = PlayerInitialize(2)
  document.querySelector('.p4').innerHTML = PlayerInitialize(3)
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 3
}
if(spielermenge == 4) {
  document.querySelector('.p1').innerHTML = PlayerInitialize(1)
  document.querySelector('.p2').innerHTML = PlayerInitialize(2)
  document.querySelector('.p3').innerHTML = ""
  document.querySelector('.p4').innerHTML = PlayerInitialize(3)
  document.querySelector('.p5').innerHTML = PlayerInitialize(4)
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 4
}
if(spielermenge == 5) {
  document.querySelector('.p1').innerHTML = PlayerInitialize(1)
  document.querySelector('.p2').innerHTML = PlayerInitialize(2)
  document.querySelector('.p3').innerHTML = PlayerInitialize(3)
  document.querySelector('.p4').innerHTML = PlayerInitialize(4)
  document.querySelector('.p5').innerHTML = PlayerInitialize(5)
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 5
}
}

function RESETVALUES () {

    freeze = 0;
    currentcard = 0;
    turn = 1;
    flip3 = 0;

    turn = 1
document.querySelector('.mitte').innerHTML = `Runde ${runde} - Spieler ${turn}`

for (i = 0 ; i < spielermenge ; i++) {
document.querySelector(`.player${i + 1}name`).style.color = "white"
document.querySelector(`.player${i + 1}secondchance`).style.color = "white"
CARDBACKGROUNDS(i + 1)}

for (let i = 0; i < players.length; i++) {
    players[i].cards = 0;
    players[i].passed = 0;
    players[i].deck = [];
    players[i].secondchance = 0;
    players[i].multi = 0;
    players[i].score = 0;
}

DOMADJUSTMENT(spielermenge)
REFRESHSCOREDISPLAY ()


}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Player Setup////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function START(Y) {
spielermenge = Y

DOMADJUSTMENT(spielermenge)
CARDBACKGROUNDS(spielermenge)
RESETVALUES(spielermenge)
//WINNER ()


}



/*function WINNER () {


if (players.slice(0, spielermenge).some(playerinline => playerinline.totalscore >= 200)) {

let WinnerScore = Math.max(...players.totalscore)
let WinnerNr = players.indexOf(WinnerScore)

players[WinnerNr].wins++

alert(WinnerNr)
}

}

*/

