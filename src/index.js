
const taskForm = document.getElementById("create-task-form");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = event.target.querySelector(
    "#new-task-description"
  ).value;

  buildToDo(task);
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const taskList = document.getElementById("tasks");
  taskList.appendChild(li);
}

