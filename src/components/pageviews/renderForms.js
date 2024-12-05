import '../styles/formstyles.css'    

export function renderForms(){
    const formsHTML = `
     <div class="container form">
            <form id="taskForm">
              <div class="mb-3">
                  <input type="text" class="form-control task-input" id="taskInput" placeholder="Problem..." required>
                </div>
                <div class="mb-3">
                  <textarea class="form-control text-area" id="descriptionInput" rows="2" placeholder="Description..."></textarea>
                </div>
                <div class="date-button-field">
                    <div class="date">
                      <input type="date" class="calender" id="dateInput">
                    </div>
                    <div>
                      <button type="submit" class="add-task-button" id="addTaskButton">ADD</button>
                    </div>
                </div>
            </form>
        </div>
    `
    document.querySelector('.form-container').innerHTML = formsHTML
}