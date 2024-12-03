import "../styles/taskGrid.css";
import { removeTask, taskList, checkIfChecked } from "../js/taskList.js";
import { editModal } from "../js/taskList.js";
import { updateProgressBar } from "./progressBar.js";

export function renderTaskGrid() {
  document.querySelector(".taskGrid").classList.add("task-grid-container");
  let taskGridHTML = "";

  taskList.forEach((task) => {
    taskGridHTML += `
       <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" data-unique-id="${task.uId}" ${task.completed? 'checked':''}>
            <div class="task-and-description">
                <div class="title-and-date">
                    <label class="form-check-task" for="${task.uId}">
                      ${task.task}
                    </label>
                    <div class="date">${task.date}</div>
                </div>
                <label class="form-check-description" for="${task.uId}">
                  ${task.description}
                </label>
            </div>
            <div class="edit-delete">
              <button class="edit-btn" data-unique-id="${task.uId}" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
              <button class="delete-btn" data-unique-id="${task.uId}">Delete</button>
              
            </div>
          </div>
        </div>
      `;
  });

  document.querySelector(".taskGrid").innerHTML = taskGridHTML;

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const taskId = btn.dataset.uniqueId;
      removeTask(taskId);

      renderTaskGrid();
      console.log(taskList);
    });
  });

  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const taskId = btn.dataset.uniqueId;
      editModal(taskId);
      renderTaskGrid();
    });
  });

  updateProgressBar();
  checkIfChecked()
}
