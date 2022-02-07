const refs =  {
    bodyEl: document.querySelector("body"),
    startButtontEl: document.querySelector("[data-start]"),
    stopButtontEl: document.querySelector("[data-stop]"),
}

const DELAY = 1000;
const disableBtn = true;
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

    if (disableBtn) {
        refs.startButtontEl.disabled = true;
    }

    timerId = setInterval(changeBodyBackgroundColor, DELAY);
    refs.bodyEl.style.backgroundColor = getRandomHexColor(); 
}

function onStopBtn () {
    clearInterval(timerId);
    refs.startButtontEl.disabled = false;
}

