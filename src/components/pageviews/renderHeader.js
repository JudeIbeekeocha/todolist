export function renderHeader(){
    const headerHTML = `
    <div class="container-fluid d-flex justify-content-center title-container">
        <h1 class="my-4">Things To Do</h1>
    </div>
    `
    document.querySelector('.title-container').innerHTML = headerHTML
}