import { taskList } from "../js/taskList";
import "../styles/progressBar.css";

export function progressBar() {
  document.querySelector(".progress-bar-style").classList.add("progresses");
  let barHtml = `<div class="bar"></div>`;
  document.querySelector(".progress-bar-style").innerHTML = barHtml;
}

export function updateProgressBar() {
  const listLength = taskList.length;
  const checkedAmount = taskList.filter(
    (task) => task.completed === true
  ).length;
  let percentage = (checkedAmount / listLength) * 100;
  let bar = document.querySelector(".bar");

  bar.style.width = `${percentage}%`;
}
