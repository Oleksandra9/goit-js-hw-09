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
      .then(onSuccess)
      .catch(onError);
      delay += stepDelay;
  }
};

function onSuccess (value) {
  Notify.success(` RESOLVE promise ${value.position} in ${value.delay}ms`);
}

function onError (error) {
  Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
}


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

