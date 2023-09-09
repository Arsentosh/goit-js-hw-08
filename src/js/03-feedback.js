import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput(event) {
  const savedInput = localStorage.getItem(STORAGE_KEY);
  const parseObject = JSON.parse(savedInput);

  if (savedInput) {
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    emailInput.value = parseObject.email || '';
    messageInput.value = parseObject.message.trim() || '';
  }
}

populateInput();

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const message = formElements.message.value;

  if (mail === '' || message.trim() === '') {
    alert('Please fill in all the fields!');
    return;
  } else {
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
  }
}
