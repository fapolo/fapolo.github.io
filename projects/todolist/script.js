const todoInput = document.querySelector(".add-new");
const todoList = document.querySelector(".list");

let todos = document.querySelectorAll(".todo");
let closeSpans = document.querySelectorAll(".close");

function addNewTodo() {
    if (todoInput.value) {
        let newTodo = todoInput.value;
        let newHTML = "<li class=\"todo\"><span class=\"close\">X</span> " + newTodo + "</li>";
        todoInput.value = "";
        todoList.innerHTML += newHTML;
    }
}

function addCheckToggle() {
    todos = document.querySelectorAll(".todo");
    todos.forEach(function(todo){
        todo.addEventListener("click", function() {
            this.classList.toggle("checked");
        })
    })
}

function addCloseFunction() {
    closeSpans = document.querySelectorAll(".close");
    closeSpans.forEach(function(span, i){
        span.addEventListener("click", function(){
            todos[i].parentNode.removeChild(todos[i]);
        })
    })
}

todoInput.addEventListener("keypress", function(input){
    let keyPressed = input.keyCode || input.which;
    if (keyPressed === 13) {
        addNewTodo();
        addCheckToggle();
        addCloseFunction();
    }
})

addCheckToggle();
addCloseFunction();