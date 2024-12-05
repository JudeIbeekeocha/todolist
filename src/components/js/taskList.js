import { updateProgressBar } from "../pageviews/progressBar.js";
import dayjs from "dayjs";

export let taskList;

loadFromStorage();

function saveToStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

export function loadFromStorage() {
  const formattedDate = dayjs().format("YYYY-MM-DD");
  taskList = JSON.parse(localStorage.getItem("taskList")) || [
    {
      task: "What problem am I having? ",
      description: "How might I solve it?",
      date: formattedDate, //maybe use dayjs later for this
      uId: "1",
      completed: false,
    },
  ];
}

export function addTask(task) {
  taskList.push(task);
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
      taskInput.value = task.task
      descriptionInput.value = task.description
      dateInput.value = task.date

      document.querySelector('#modalAddTaskButton').addEventListener('click', ()=>{
        task.task = taskInput.value
        task.description = descriptionInput.value
        task.date = dateInput.value

        saveToStorage()
      })
    }
  });

  //   document.querySelector('.modal-container').innerHTML = modalHTML
}

export function checkIfChecked() {
  document.querySelectorAll(".form-check-input").forEach((checkbox) => {
    const taskId = checkbox.dataset.uniqueId;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskList.forEach((task) => {
          if (task.uId === taskId) {
            task.completed = true;
          }
        });
      } else {
        taskList.forEach((task) => {
          if (task.uId === taskId) {
            task.completed = false;
          }
        });
      }

      saveToStorage();
      updateProgressBar();
    });
  });
}
