import { progressBar } from "../pageviews/progressBar.js";
import { renderTaskGrid } from "../pageviews/renderTaskGrid.js";
import { addTask } from "./taskList.js";
import { v4 as uuidv4 } from "uuid";
import { taskList } from "./taskList.js";

function dateFormat(dateValue){
  if (dateValue){
    const [year, month, day] = dateValue.split("-");
    const formattedDate = `${month}-${day}-${year}`;
    return formattedDate;
  }
}

export function getTaskfromDOM() {
  const taskInput = document.getElementById("taskInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const dateInput = document.getElementById("dateInput");

  document.querySelector("#addTaskButton").addEventListener("click", () => {
    const taskValue = taskInput.value.trim();
    const descriptionValue = descriptionInput.value.trim();
    const dateValue = dateFormat(dateInput.value);
    const uniqueId = uuidv4();

    // Example: Check if task is filled before proceeding
    if (!taskValue) {
      alert("Task field is required!");
      return;
    } else {
      addTask({
        task: taskValue,
        description: descriptionValue,
        date: dateValue,
        uId: uniqueId,
        completed: false,
      });
    }
  });

}
