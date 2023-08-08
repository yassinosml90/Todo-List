const todoInput = document.querySelector('.todo-input input');
const submit = document.querySelector('.todoBtn');
const todoList = document.querySelector('.todo-list');
todoList.addEventListener('click',deleteCheck);

todoInput.addEventListener('keydown',(e) => {
    if (e.key === 'Enter'){
        todoFunct(event);
    }
})
submit.addEventListener('click',todoFunct);

function deleteCheck(event){
    const btn = event.target;
    if (btn.classList[0] === 'delete'){
        const item = btn.parentElement;
        item.classList.toggle('animateout');
        setTimeout(() => {
            item.remove()
        },600)
    }

    if (btn.classList[0] === 'check'){
        const item = btn.parentElement;
        item.classList.toggle('check-statu')
    }
}
function todoFunct(event){
    event.preventDefault();
    if (todoInput.value === ''){
        alert('You Entered Nothing!')
    }
    else{

    
    const newTodo = document.createElement('div');
    newTodo.classList.toggle('todo');
    const todoText = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.append(todoText);
    const checkBtn = document.createElement('button');
    checkBtn.classList.toggle('check');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    newTodo.append(checkBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.toggle('delete');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    newTodo.append(deleteBtn);
    todoList.append(newTodo);
    todoInput.value = '';
    }
}