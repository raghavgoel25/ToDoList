const task = document.querySelector('.task');
const submit = document.querySelector('.submit');
const list = document.querySelector('.list');


submit.addEventListener('click', add);
list.addEventListener('click', checkDelete)

function add(event) {
    event.preventDefault();
    const item = document.createElement('div');
    item.classList.add("item");
    const newitem = document.createElement('li');
    newitem.innerText = task.value;
    newitem.classList.add('new-item');
    item.appendChild(newitem);
    const completed = document.createElement('button');
    completed.innerHTML = '<i class="fas fa-check-circle">'
    completed.classList.add("completed-button");
    item.appendChild(completed);
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash-alt">'
    trash.classList.add("delete-button");
    item.appendChild(trash);
    list.appendChild(item);
    task.value = "";
}

function checkDelete(event) {
    const item = event.target;
    if (item.classList[0] === 'completed-button') {
        const parent = item.parentElement;
        parent.classList.toggle("checked");
    }
    if (item.classList[0] === 'delete-button') {
        const parent = item.parentElement;
        parent.classList.add("anim")
        parent.addEventListener('transitionend', function() {
            parent.remove();
        })
    }
}