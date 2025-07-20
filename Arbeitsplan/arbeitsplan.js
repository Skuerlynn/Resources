let Standorte = []
let Standortmenge = ""

let Mitarbeiter = []
let Mitarbeitermenge = ""

function STANDORTGEN () {

Standortmenge = Number(document.querySelector('#STANDORTMENGEINPUT').value) 
  
  for (i = 0 ; i< Standortmenge ; i++) {

  Standorte.push(`
    
        <div class="StandortSettings">

  <input class="StandortName${i}" placeholder="StandortName">

  <div class="SettingsBesetzung">
<p id="SettingsDescriptionsSmall">Besetzung Min</p>
    <input type="value" step="1" placeholder="2" class="EingabeZahl" id="BesetzungMin${i}">
    <p id="SettingsDescriptionsSmall">Besetzung Soll</p>
    <input type="value" step="1" placeholder="3" class="EingabeZahl" id="BesetzungSoll${i}">
    </div>
<div class="SettingsWerktage">
    <p id="SettingsDescriptionsSmall">öffnung Werktage</p>
    <input type="time" step="" id="OpenWerktage${i}">
    <br>
    <p id="SettingsDescriptionsSmall">schließung Werktage</p>
    <input type="time" step="" id="CloseWerktage${i}">
    </div>
<div class="SettingsSamstage">
    <p id="SettingsDescriptionsSmall">öffnung Samstage</p>
    <input type="time" step="" id="OpenSamstageMin${i}">
    <br>
    <p id="SettingsDescriptionsSmall">schließung Samstage</p>
    <input type="time" step="" id="CloseSamstage${i}">
    </div>

    </div>

    
    `)
  }
  document.querySelector('#STANDORTDIV').innerHTML = Standorte
}

function MITARBEITERGEN () {

  for (i = 0 ; i< Standortmenge ; i++) {
    if (document.querySelector(`.StandortName${i}`).value == "" ) {alert("Eingabe Mangelhaft") ; break} 
    else {MITARBEITERGEN2 ()}
  }
}

function MITARBEITERGEN2 () {

Mitarbeitermenge = Number(document.querySelector('#MITARBEITERMENGEINPUT').value) 
  
  for (i = 0 ; i< Mitarbeitermenge ; i++) {

  Mitarbeiter.push(
    
          `<div class="Mitarbeitereintrag${i}">
          <input class="Mitarbeitername${i}"  placeholder="Name"> <input type="color" class="MITCOL${i}">
          </div>`)

//randomcolors(i)
  }
  document.querySelector('#MITARBEITERLISTE').innerHTML = Mitarbeiter
  
  AppendStandorteToMitarbeiter()
}

function AppendStandorteToMitarbeiter() {

  for (i = 0 ; i< Mitarbeitermenge ; i++) {

      for (x = 0 ; x< Standortmenge ; x++) {
      document.querySelector(`.Mitarbeitereintrag${i}`).innerHTML += document.querySelector(`${'.StandortName'}${x}`).value 
      document.querySelector(`.Mitarbeitereintrag${i}`).innerHTML += `<input type="checkbox" class="MIT${i}STA${x}">`

      }
      document.querySelector(`.Mitarbeitereintrag${i}`).innerHTML += `<input type="number"  placeholder="Stunden/Woche" step="0.5" class="MIT${i}Zeit">`


  }

}

function MITARBEITERGEN3 () {


  let MitData =
    {
    name : [],
    zeit : [],
    color : [],
    ort :  []
    }
              
  

  for (i = 0 ; i< Mitarbeitermenge ; i++) {

  let orttemp = []
   MitData.name.push(document.querySelector(`.Mitarbeitername${i}`).value) 
   MitData.color.push(document.querySelector(`.MITCOL${i}`).value)
   MitData.zeit.push(document.querySelector(`.MIT${i}Zeit`).value)

    for (x = 0 ; x< Standortmenge ; x++) {
      orttemp.push(`i${i}x${x}`&& document.querySelector(`.MIT${i}STA${x}`).checked)
    }
      MitData.ort.push(orttemp)
      orttemp = ""
  }
      console.log(MitData)
}

/*function randomcolors (i) {

  let randomnumber = ""
  let color = "#"

  for (x = 0 ; x< 6 ; x++) {
  randomnumber = Math.random()
   if (randomnumber > 16/17) {color +=0}
   else if (randomnumber > 15/17) {color +=1}
   else if (randomnumber > 14/17) {color +=2}
   else if (randomnumber > 13/17) {color +=3}
   else if (randomnumber > 12/17) {color +=4}
   else if (randomnumber > 11/17) {color +=5}
   else if (randomnumber > 10/17) {color +=6}
   else if (randomnumber > 9/17) {color +=7}
   else if (randomnumber > 8/17) {color +=8}
   else if (randomnumber > 7/17) {color +=9}
   else if (randomnumber > 6/17) {color +='A'}
   else if (randomnumber > 5/17) {color +='B'}
   else if (randomnumber > 4/17) {color +='C'}
   else if (randomnumber > 3/17) {color +='D'}
   else if (randomnumber > 2/17) {color +='E'}
   else if (randomnumber < 1/17) {color +='F'}
  }
  document.querySelector(`.MITCOL${i}`).value = color

}*/




