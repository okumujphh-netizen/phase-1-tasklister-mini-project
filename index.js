
const taskForm = document.getElementById("create-task-form");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskInput = event.target.querySelector(
    "#new-task-description"
  );

  const task = taskInput.value;

  buildToDo(task);
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const taskList = document.getElementById("tasks");
  taskList.appendChild(li);
}
