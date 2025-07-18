let tasklist = []

let taskinput = ""
let dateinput = ""


function ADDTODO () {
taskinput = document.querySelector('.TASKINPUT').value
dateinput = document.querySelector('.DATEINPUT').value

if (taskinput && dateinput != "") {
tasklist.push({ task: taskinput, date: dateinput });

taskinput = ""
console.log(tasklist);
DISPLAYARRAY()}
}


function DISPLAYARRAY () {

document.querySelector('.JSTODO').innerHTML =""
for (i = 0 ; i<tasklist.length ; i++)
document.querySelector('.JSTODO').innerHTML += `<p>${tasklist[i].task}</p> <p>${tasklist[i].date}</p> <button onclick="REMOVEDATA(${[i]})">delete</button><br>`

}

function REMOVEDATA (position) {

tasklist.splice(position,1)
DISPLAYARRAY()


}

