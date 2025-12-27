const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// render tasks to the DOM
const renderTasks = () => {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", () => toggleTask(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
};

// add new task
const addTask = () => {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ text, completed: false });
  taskInput.value = "";

  saveTasks();
  renderTasks();
};

// toggle task completion
const toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
};

// delete task
const deleteTask = (index) => {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
};

// save tasks to Local Storage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

addTaskBtn.addEventListener("click", addTask);
renderTasks();
