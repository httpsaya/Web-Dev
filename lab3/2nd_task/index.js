document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let label = document.createElement("label");

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add("task-checkbox"); // Добавляем класс
    checkbox.checked = false; // По умолчанию задача не выполнена

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(taskText));

    // Создаём кнопку удаления с иконкой
    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", removeTask);

    // Добавляем кнопку удаления в label
    label.appendChild(deleteButton);

    taskList.appendChild(label); // Добавляем задачу в список

    saveTasks();
    taskInput.value = "";
}

function removeTask(event) {
    event.target.closest('label').remove(); // Удаляем задачу
    saveTasks();
}

function toggleDone(event) {
    let taskItem = event.target.closest('label');
    taskItem.classList.toggle("done");
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList label").forEach(label => {
        tasks.push({
            text: label.textContent.replace("x", "").trim(),
            done: label.querySelector('input').checked // Проверяем состояние чекбокса
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    tasks.forEach(task => {
        let label = createTaskElement(task.text, task.done);
        taskList.appendChild(label);
    });
}

function createTaskElement(taskText, isDone = false) {
    let label = document.createElement("label");

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isDone; // Восстанавливаем состояние чекбокса

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(taskText));

    // Добавляем обработчик событий для чекбокса
    checkbox.addEventListener("change", toggleDone);

    // Кнопка удаления с иконкой
    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", removeTask);

    label.appendChild(deleteButton);

    return label;
}
