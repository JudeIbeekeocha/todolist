import '../styles/taskGrid.css'

export function renderTaskGrid(){
    document.querySelector('.taskGrid').classList.add('task-grid-container')

    const taskGridHTML = `
     <div class="col">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <div class="task-and-description">
              <div class="title-and-date">
                  <label class="form-check-task" for="flexCheckDefault">
                    Task...
                  </label>
                  <div class="date">Date</div>
              </div>
              <label class="form-check-description" for="flexCheckDefault">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut similique est praesentium eos autem exercitationem recusandae corporis! Repudiandae laborum reprehenderit quas officia unde eos eum ducimus quasi asperiores possimus iste esse quae corrupti sequi voluptate laudantium, quisquam animi exercitationem dicta. Eos, optio numquam, libero tenetur placeat, magnam repellendus maiores dolorum accusantium nemo cumque labore voluptatem qui in rerum doloribus unde! Quasi distinctio architecto laudantium quo neque, minima enim quam, molestias accusamus, voluptate soluta impedit cum. Quo molestias quas cupiditate veritatis, ut quod enim qui quia ex assumenda quaerat dolorem quam ipsum vero quos commodi 
              </label>
          </div>
          <div class="edit-delete">
          <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    `

    document.querySelector('.taskGrid').innerHTML = taskGridHTML
}