function addTask() {
    const name = document.getElementById('task-name').value.trim();
    const title = document.getElementById('task-title').value.trim();
    const description = document.getElementById('task-description').value.trim();
    const cash = parseFloat(document.getElementById('Cash').value);
    const cost = parseFloat(document.getElementById('cost').value);

    if (!name || !title || !description) {
        alert("Please fill out all fields.");
        return;
    }

    const costCash = cash - cost;
    const task = { name, title, description, costCash };

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    clearFields();
    displayTasks();
}

function displayTasks() {
    const tableBody = document.getElementById('task-table-body');
    tableBody.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${task.name}</td><td>${task.title}</td><td>${task.description}</td><td>${task.costCash}</td>`;
    });
}

function clearFields() {
    document.getElementById('task-name').value = '';
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('Cash').value = '';
    document.getElementById('cost').value = '';
}
    displayTasks();

    function toggleMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');
    
        const modeIcon = document.getElementById('mode-icon');
        if (body.classList.contains('dark-mode')) {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon'); // Change the icon to moon for dark mode
        } else {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun'); // Change the icon back to sun for light mode
        }
    }
    