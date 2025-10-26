// Grab elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add a new task
addBtn.addEventListener('click', function() {
    const task = todoInput.value.trim();
    if (task !== '') {
        addTask(task);
        todoInput.value = '';
        todoInput.focus();
    }
});

// Also allow Enter key to add task
todoInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

// Add task to the list
function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}
