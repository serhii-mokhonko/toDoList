import "./main.css"

const btnAdd = document.getElementById('btn-add');

const todo = [];

btnAdd.addEventListener('click', (e) => {
    let title = document.getElementById('title').value,
        description = document.getElementById('description').value;

    e.preventDefault();

    //check input and textarea
    if (title.length > 0 && description.length > 0) {

        todo.unshift({
            title: title,
            description: description,
            priority: false,
            done: false,
        });
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    } else {
        return;
    }

    //clear container before update
    const taskContainer = document.getElementById('list')
    taskContainer.innerHTML = '';

    //show all task
    for (let task in todo) {
        const newEl = createTask(todo[task]);
        taskContainer.appendChild(newEl);
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
        <button class="btn btn--done">Done</button>
        <button class="btn btn--del">Del</button>
    </div>`;

    parent.innerHTML = html;

    return parent;
}