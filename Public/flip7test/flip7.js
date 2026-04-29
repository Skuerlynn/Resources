let turn = 1
let spielermenge = 1
let player1 = {score : 0, cards : 0, currentpoints : 0, passed : 0};
let player2 = {score : 0, cards : 0, currentpoints : 0, passed : 0};
let player3 = {score : 0, cards : 0, currentpoints : 0, passed : 0};
let player4 = {score : 0, cards : 0, currentpoints : 0, passed : 0};
let player5 = {score : 0, cards : 0, currentpoints : 0, passed : 0};



function START(spielerzahl){
spielermenge = spielerzahl;
if(spielerzahl == 1) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = ""
  document.querySelector('.p3').innerHTML = '<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button>'
  document.querySelector('.p4').innerHTML = ""
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 1
}
if(spielerzahl == 2) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = '<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button>'
  document.querySelector('.p3').innerHTML = ""
  document.querySelector('.p4').innerHTML = '<p class="player2name">Spieler 2</p> <br> <button class="pass" onclick="Pass(2)">Pass</button> <button class="draw" onclick="Draw(2)">Draw</button>'
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
  spielermenge = 2
}
if(spielerzahl == 3) {
  document.querySelector('.p1').innerHTML = ""
  document.querySelector('.p2').innerHTML = '<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button>'
  document.querySelector('.p3').innerHTML = '<p class="player2name">Spieler 2</p> <br> <button class="pass" onclick="Pass(2)">Pass</button> <button class="draw" onclick="Draw(2)">Draw</button>'
  document.querySelector('.p4').innerHTML = '<p class="player3name">Spieler 3</p> <br> <button class="pass" onclick="Pass(3)">Pass</button> <button class="draw" onclick="Draw(3)">Draw</button>'
  document.querySelector('.p5').innerHTML = ""
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 3
}
if(spielerzahl == 4) {
  document.querySelector('.p1').innerHTML = '<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button>'
  document.querySelector('.p2').innerHTML = '<p class="player2name">Spieler 2</p> <br> <button class="pass" onclick="Pass(2)">Pass</button> <button class="draw" onclick="Draw(2)">Draw</button>'
  document.querySelector('.p3').innerHTML = ""
  document.querySelector('.p4').innerHTML = '<p class="player3name">Spieler 3</p> <br> <button class="pass" onclick="Pass(3)">Pass</button> <button class="draw" onclick="Draw(3)">Draw</button>'
  document.querySelector('.p5').innerHTML = '<p class="player4name">Spieler 4</p> <br> <button class="pass" onclick="Pass(4)">Pass</button> <button class="draw" onclick="Draw(4)">Draw</button>'
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 4
}
if(spielerzahl == 5) {
  document.querySelector('.p1').innerHTML = '<p class="player1name">Spieler 1</p> <br> <button class="pass" onclick="Pass(1)">Pass</button> <button class="draw" onclick="Draw(1)">Draw</button>'
  document.querySelector('.p2').innerHTML = '<p class="player2name">Spieler 2</p> <br> <button class="pass" onclick="Pass(2)">Pass</button> <button class="draw" onclick="Draw(2)">Draw</button>'
  document.querySelector('.p3').innerHTML = '<p class="player3name">Spieler 3</p> <br> <button class="pass" onclick="Pass(3)">Pass</button> <button class="draw" onclick="Draw(3)">Draw</button>'
  document.querySelector('.p4').innerHTML = '<p class="player4name">Spieler 4</p> <br> <button class="pass" onclick="Pass(4)">Pass</button> <button class="draw" onclick="Draw(4)">Draw</button>'
  document.querySelector('.p5').innerHTML = '<p class="player5name">Spieler 5</p> <br> <button class="pass" onclick="Pass(5)">Pass</button> <button class="draw" onclick="Draw(5)">Draw</button>'
  document.querySelector('.box1').innerHTML = ""
    spielermenge = 5
}
}

function Pass(playerNr) {
if (turn == playerNr) {turn += 1


  if (playerNr == 1) {player1.passed = 1
  document.querySelector('.player1name').innerHTML = "Player 1 (Passed)"}
  if (playerNr == 2) {player2.passed = 1
    document.querySelector('.player2name').innerHTML = "Player 2 (Passed)"}
  if (playerNr == 3) {player3.passed = 1
    document.querySelector('.player3name').innerHTML = "Player 3 (Passed)"}
  if (playerNr == 4) {player4.passed = 1
    document.querySelector('.player4name').innerHTML = "Player 4 (Passed)"}
  if (playerNr == 5) {player5.passed = 1
    document.querySelector('.player5name').innerHTML = "Player 5 (Passed)"}
  if (playerNr == spielermenge) {turn = 1}
  document.querySelector('.Turn').innerHTML = `Turn : Player${turn}`
  if (player1.passed, player2.passed, player3.passed, player4.passed, player5.passed == 1 & spielermenge == 5) {Wertung()}
  if (player1.passed, player2.passed, player3.passed, player4.passed == 1 & spielermenge == 4) {Wertung()}
  if (player1.passed, player2.passed, player3.passed == 1 & spielermenge == 3) {Wertung()}
  if (player1.passed, player2.passed == 1 & spielermenge == 2) {Wertung()}
  if (player1.passed == 1 & spielermenge == 1) {Wertung()}
}}

function Draw(playerNr) {
}

function Wertung () {
document.querySelector('.player1name').innerHTML = "Player 1"
document.querySelector('.player2name').innerHTML = "Player 2"
document.querySelector('.player3name').innerHTML = "Player 3"
document.querySelector('.player4name').innerHTML = "Player 4"
document.querySelector('.player5name').innerHTML = "Player 5"
player1.passed = 0
player2.passed = 0
player3.passed = 0
player4.passed = 0
player5.passed = 0


alert("Everyone passed")

}