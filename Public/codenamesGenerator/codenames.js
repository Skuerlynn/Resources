function Generate () {
let Spalten = Number(document.querySelector('.Spalten').value)
let Zeilen = Number(document.querySelector('.Zeilen').value)
console.log(typeof(Spalten))
console.log(Spalten)
console.log(typeof(Zeilen))
console.log(Zeilen)

for (i = 0 ; i< Spalten ; i++ ) {
document.querySelector('.Grid').innerHTML += `<div class="Spalte"></div>`
}
for (x = 0 ; x< Zeilen ; x++ ) {
document.querySelectorAll('.Spalte').forEach(Spalte => {Spalte.innerHTML += `<div class="Zeile" class="Zeile${x}">${x}</div>`})
}

let FelderTotal = Spalten*Zeilen
let SchwarzeFelder = 1
let RoteFelder = FelderTotal/3 +1
let BlaueFelder = RoteFelder-1
let WeißeFelder = Math.round(FelderTotal - RoteFelder - BlaueFelder)

FelderTotal = Math.round(FelderTotal)
SchwarzeFelder = Math.round(SchwarzeFelder)
RoteFelder = Math.round(RoteFelder)
BlaueFelder = Math.round(BlaueFelder)
let RandomNumber =
console.log('Felder:')
console.log(FelderTotal)
console.log(SchwarzeFelder)
console.log(RoteFelder)
console.log(BlaueFelder)
console.log(WeißeFelder)


document.querySelectorAll('.Zeile').forEach(Zeile => {
RandomNumber = Math.random()*FelderTotal
RandomNumber = Math.round(RandomNumber)

console.log(`Randomnumber = ${RandomNumber}`)
if      (RandomNumber == SchwarzeFelder && SchwarzeFelder >= 1) {Zeile.classList.add('Schwarz') ; FelderTotal -= 1 ; SchwarzeFelder -= 1}
else if (RandomNumber > (WeißeFelder + SchwarzeFelder + RoteFelder) && BlaueFelder >= 1) {Zeile.classList.add('Blau'); FelderTotal -= 1 ; BlaueFelder -= 1}
else if (RandomNumber <= (RoteFelder + WeißeFelder + WeißeFelder) && RandomNumber > SchwarzeFelder + WeißeFelder && RoteFelder>= 1) {Zeile.classList.add('Rot'); FelderTotal -= 1 ; RoteFelder -= 1}
else if (RandomNumber <= (WeißeFelder + SchwarzeFelder) && RandomNumber > SchwarzeFelder && WeißeFelder >= 1) {Zeile.classList.add('Weiß'); FelderTotal -= 1 ; WeißeFelder -= 1}
else if (FelderTotal == 1 ){

  if (WeißeFelder == 1) {Zeile.classList.add('Weiß')}
  if (RoteFelder == 1) {Zeile.classList.add('Rot')}
  if (BlaueFelder == 1) {Zeile.classList.add('Blau')}
  if (SchwarzeFelder == 1) {{Zeile.classList.add('Schwarz')}}
}






console.log('Felder:')
console.log(FelderTotal)
console.log(SchwarzeFelder)
console.log(RoteFelder)
console.log(BlaueFelder)
console.log(WeißeFelder)


})


}