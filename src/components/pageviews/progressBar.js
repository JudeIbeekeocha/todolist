import { taskList } from "../js/taskList";
import "../styles/progressBar.css";

export function progressBar() {
  document.querySelector(".progress-bar-style").classList.add("progresses");
  let barHtml = `<div class="bar"></div>`;
  document.querySelector(".progress-bar-style").innerHTML = barHtml;
  // updateProgressBar()
}

export function updateProgressBar() {
  const listLength = taskList.length;
  console.log(listLength);
  let completedTasks = 0;
  let percentage = 0;
  let bar = document.querySelector(".bar");

  document.querySelectorAll(".form-check-input").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        completedTasks++;
        percentage = (completedTasks / listLength) * 100;
        bar.style.width = `${percentage}%`;
      } else {
        completedTasks--;
        percentage = (completedTasks / listLength) * 100;
        bar.style.width = `${percentage}%`;

      }
    });
  });
}
