
let todolist = []
let HTML = ""

    function ADDTODO () {
    let inputElement = ""
    inputElement = document.querySelector('.TaskInput').value
    todolist.push(inputElement)
    document.querySelector('.TaskInput').value = ""


document.querySelector('.js-todo').innerHTML = ""
for (i = 0 ; i < todolist.length ; i++) {

if (i/1 == 1/i)
if (i/2 == 2/i)
if (i/3 == 3/i)

    HTML = `<p class = color${i} >${todolist[i]}</p>`




    document.querySelector('.js-todo').innerHTML += HTML
}
    todolist.push('83')


 console.log(todolist)


    }