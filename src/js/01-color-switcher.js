const refs =  {
    bodyEl: document.querySelector("body"),
    startButtontEl: document.querySelector("[data-start]"),
    stopButtontEl: document.querySelector("[data-stop]"),
}

const DELAY = 1000;
let timerId = null;

refs.startButtontEl.addEventListener("click", onStartBtn);
refs.stopButtontEl.addEventListener("click", onStopBtn);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
function changeBodyBackgroundColor () {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
}  

function onStartBtn () {

    refs.startButtontEl.disabled = true;
    refs.startButtontEl.classList.add("btn-1--color");
    
    timerId = setInterval(changeBodyBackgroundColor, DELAY);
    refs.bodyEl.style.backgroundColor = getRandomHexColor(); 
}

function onStopBtn () {
    clearInterval(timerId);
    refs.startButtontEl.disabled = false;
    refs.startButtontEl.classList.remove("btn-1--color");
}

