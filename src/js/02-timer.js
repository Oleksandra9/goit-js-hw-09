import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require("flatpickr/dist/themes/dark.css");
require("flatpickr/dist/themes/dark.css");

const refs = {
    bodyEl: document.querySelector("body"),
    startBtnEl: document.querySelector("[data-start]"),
    daysEl: document.querySelector("[data-days]"),
    hoursEl: document.querySelector("[data-hours]"),
    minutesEl: document.querySelector("[data-minutes]"),
    secondsEl: document.querySelector("[data-seconds]")
}


let callbackTime = 0;

refs.startBtnEl.addEventListener("click", onStartBtn);
onStartBtnDisable ();



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {

      if(selectedDates[0]<=options.defaultDate) {
        return window.alert("Please choose a date in the future"); 
      }
     
      refs.startBtnEl.disabled = false;
      refs.startBtnEl.classList.add("start--color");
      
      

      callbackTime = selectedDates[0].getTime();
    },
  
  }; 



function onStartBtn () {

    let deltaTime = 0;

    setInterval(() => {

        deltaTime = callbackTime - Date.now();
    
        if (deltaTime > 0) {

            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            refs.daysEl.textContent = days;
            refs.hoursEl.textContent = hours;
            refs.minutesEl.textContent = minutes;
            refs.secondsEl.textContent = seconds;
            refs.bodyEl.style.backgroundColor = getRandomHexColor(); 
        }

    },1000)

}

function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }


function addLeadingZero(value){
    return String(value).padStart(2, '0');
}

  function onStartBtnDisable () {
    refs.startBtnEl.disabled = true;  
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
flatpickr('#datetime-picker', options);














