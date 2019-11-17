import "./main.css"

const btnAdd = document.getElementById('btn-add');
const taskContainer = document.getElementById('list');

const todo = [];

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    //get data from form
    let title = document.getElementById('title').value,
        description = document.getElementById('description').value;
    //get id for next element
    let id = todo.reduce((ac, current) => {
        return ac = Math.max(ac, current.id);
    }, 0);
    id++;
    //check input and textarea
    if (title.length > 0 && description.length > 0) {
        //put new element into array
        todo.unshift({
            id,
            title,
            description,
            priority: false,
            done: false,
        });
        //clear form
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    } else {
        return;
    }

    //show all tasks
    loadAllTasks(todo);
});

taskContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn--done')) {
        for(let item in todo){
            if(todo[item].id === Number(e.target.getAttribute("id"))){
               todo[item].done = true;
            }
        }
    }

    if (e.target.classList.contains('btn--del')) {
        if (e.target.classList.contains('btn--del')) {
            for(let item in todo){
                if(todo[item].id === Number(e.target.getAttribute("id"))){
                   todo.splice(item, 1);
                }
            }
        }
        loadAllTasks(todo);
        console.log(todo);
    }
});

function createTask(task) {
    const parent = document.createElement('div');
    parent.className = 'todo-card';

    const html = `<div class="todo-card__title">
        <h2>${task.title.toUpperCase()}</h2>
    </div>
    <div class="todo-card__content">
        <p>${task.description}</p>
    </div>
    <div class="todo-card__actions">
        <button class="btn btn--done" id='${task.id}'>Done</button>
        <button class="btn btn--del" id='${task.id}'>Del</button>
    </div>`;

    parent.innerHTML = html;

    return parent;
}

function loadAllTasks (arr) {
    //clear container before update
    taskContainer.innerHTML = '';
    for (let task in arr) {
        const newEl = createTask(arr[task]);
        taskContainer.appendChild(newEl);
    }
}