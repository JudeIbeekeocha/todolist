export let taskList;

loadFromStorage()

function saveToStorage() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

export function loadFromStorage(){
    taskList = JSON.parse(localStorage.getItem('taskList')) ||[
        {
            task: 'Set new Task',
            description: 'Set a new task to complete',
            date: "2024-12-04", //maybe use dayjs later for this
            uId: '1'
        }
    ]
}

export function addTask(task){
    taskList.push(task)
    // console.log(taskList)

    saveToStorage()
}

