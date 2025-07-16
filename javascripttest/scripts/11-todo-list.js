let htmlAdd = ""
let tasklist = []


function ADDTODO () {

tasklist.push(document.querySelector('.TASKINPUT').value) 
document.querySelector('.TASKINPUT').value = ""
console.log(tasklist);
DISPLAYARRAY()
}


function DISPLAYARRAY () {

document.querySelector('.JSTODO').innerHTML = ""
for (i = 0 ; i<tasklist.length ; i++)
document.querySelector('.JSTODO').innerHTML += `<p>${tasklist[i]}</p> <button onclick="REMOVEDATA(${[i]})">delete</button>`

}

function REMOVEDATA (position) {

tasklist.splice(position,1)
DISPLAYARRAY()


}

