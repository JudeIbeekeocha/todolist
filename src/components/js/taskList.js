import { updateProgressBar } from "../pageviews/progressBar.js";
import { renderTaskGrid } from "../pageviews/renderTaskGrid.js";
import dayjs from "dayjs";

export let taskList;

loadFromStorage();

function saveToStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

export function loadFromStorage() {
  const formattedDate = dayjs().format("MM-DD-YYYY");
  taskList = JSON.parse(localStorage.getItem("taskList")) || [
    {
      task: "What problem am I having? ",
      description: "How might I solve it?",
      date: formattedDate, //maybe use dayjs later for this
      uId: "1",
      completed: false,
    },
  ];

  if(taskList){
    taskList.forEach((task)=>{
      if(task.date){
        task.date = dayjs(task.date).format("MM-DD-YYYY")
      }
    })
  }
  saveToStorage();
}

export function addTask(task) {
  taskList.unshift(task);
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
      dateInput.value = dayjs(task.date).format("YYYY-MM-DD")

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

      sortTasks();
      updateProgressBar();
    });
  });
}

export function sortTasks(){
  // Separate completed and incomplete tasks
  const incompleteTasks = taskList.filter((task) => !task.completed);
  const completedTask = taskList.filter((task) => task.completed);

  // Merge them with incompleted tasks first
  taskList = [...incompleteTasks, ...completedTask];
  saveToStorage();
  renderTaskGrid()
}