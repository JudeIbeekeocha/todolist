import '../styles/progressBar.css'

export function progressBar(){
    document.querySelector('.progress-bar-style').classList.add('progresses')
    let barHtml = `<div class="bar"></div>`
    document.querySelector('.progress-bar-style').innerHTML = barHtml
}