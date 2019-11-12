import "./main.css"

const btnAdd = document.getElementById('btn-add');

const todo = [];

btnAdd.addEventListener('click', (e) => {
    const title = document.getElementById('title').value,
        description = document.getElementById('description').value;
    
    e.preventDefault();
    
    todo.push({
        title: title,
        description: description,
        priority: false,
        done: false,
    })
    console.log(todo);
});