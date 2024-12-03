import '../styles/formstyles.css'    

export function renderForms(){
    const formsHTML = `
     <div class="container">
            <div class="mb-3">
                <input type="text" class="form-control task-input" id="exampleFormControlInput1" placeholder="Task...">
              </div>
              <div class="mb-3">
                <textarea class="form-control text-area" id="exampleFormControlTextarea1" rows="2"></textarea>
              </div>
              <div class="date-button-field">
                  <div class="date">
                    <input type="date" class="calender">
                  </div>
                  <div>
                    <button class="add-task-button">ADD</button>
                  </div>
              </div>
        </div>
    `
    document.querySelector('.form-container').innerHTML = formsHTML
}