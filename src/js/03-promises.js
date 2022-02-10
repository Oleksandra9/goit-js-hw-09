import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector(".form"),
  delayFirstEl: document.querySelector(`[name="delay"]`),
  stepDelayEl: document.querySelector(`[name="step"]`),
  amountEl: document.querySelector(`[name="amount"]`),
  submitBtnEl: document.querySelector(`[type="submit"]`),
}

refs.formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();
  let amountForPromise = Number(refs.amountEl.value);
  let delay = Number(refs.delayFirstEl.value);
  let stepDelay = Number(refs.stepDelayEl.value);

  for (let position = 1; position <= amountForPromise; position++) {
    createPromise(position, delay)
      .then((value) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch((error) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay += stepDelay;
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      }
      reject({position, delay});
    }, delay);
  });
}

