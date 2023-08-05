//app.js -> this code is with drag and drop specific

const todoList = document.getElementById("todoList");
const addTaskBtn = document.getElementById("addTaskBtn");
const newTaskInput = document.getElementById("newTask");

let draggingTask = null;

function createTaskElement(taskText) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <button class="editTask">Edit</button>
    <button class="deleteTask">Delete</button>
  `;

  const deleteBtn = taskElement.querySelector(".deleteTask");
  deleteBtn.addEventListener("click", () => {
    taskElement.remove();
  });

  const editBtn = taskElement.querySelector(".editTask");
  editBtn.addEventListener("click", () => {
    const newTaskText = prompt("Edit the task:", taskText);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskElement.querySelector("span").textContent = newTaskText.trim();
    }
    taskText = newTaskText;
  });

  taskElement.draggable = true;

  taskElement.addEventListener("dragstart", () => {
    draggingTask = taskElement;
    setTimeout(() => {
      taskElement.classList.add("dragging");
    }, 0);
    // taskElement.classList.add("dragging"); directly krdo
  });

  taskElement.addEventListener("dragend", () => {
    taskElement.classList.remove("dragging");
    draggingTask = null;
  });

  return taskElement;
}

addTaskBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const taskElement = createTaskElement(taskText);

    todoList.appendChild(taskElement);
    newTaskInput.value = "";
  }
});

todoList.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(todoList, e.clientY);
  const draggableElement = document.querySelector(".dragging");
  if (afterElement == null) {
    todoList.appendChild(draggableElement);
  } else {
    todoList.insertBefore(draggableElement, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".task:not(.dragging)")
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
