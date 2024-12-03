import { updateProgressBar } from "../pageviews/progressBar.js";

export let taskList;

loadFromStorage();

function saveToStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

export function loadFromStorage() {
  taskList = JSON.parse(localStorage.getItem("taskList")) || [
    {
      task: "Set new Task",
      description: "Set a new task to complete",
      date: "2024-12-04", //maybe use dayjs later for this
      uId: "1",
    },
  ];
}

export function addTask(task) {
  taskList.push(task);
  // console.log(taskList)

  saveToStorage();
  updateProgressBar();
}

export function removeTask(taskId) {
  const newTaskList = [];

  taskList.forEach((task) => {
    if (task.uId !== taskId) {
      newTaskList.push(task);
    }
  });

  taskList = newTaskList;

  saveToStorage();
  updateProgressBar();
}

export function editModal(taskId) {
  const taskInput = document.getElementById("modalTaskInput");
  const descriptionInput = document.getElementById("modalDescriptionInput");
  const dateInput = document.getElementById("modalDateInput");

  taskList.forEach((task) => {
    if (task.uId === taskId) {
      console.log(task.uId);
      taskInput.value = task.task
      descriptionInput.value = task.description
      dateInput.value = task.date

      document.querySelector('#modalAddTaskButton').addEventListener('click', ()=>{
        console.log(taskInput.value)
        task.task = taskInput.value
        task.description = descriptionInput.value
        task.date = dateInput.value

        saveToStorage()
      })
      console.log(taskList)
    }
  });

  //   document.querySelector('.modal-container').innerHTML = modalHTML
}
