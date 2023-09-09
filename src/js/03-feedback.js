const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

// Function to clear local storage and form fields on form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Clear local storage
  localStorage.removeItem('feedback-form-state');

  // Clear form fields
  input.value = '';
  textarea.value = '';

  // Log the email and message values to the console
  const feedbackData = {
    email: input.value,
    message: textarea.value,
  };
  console.log(feedbackData);
}

// Add a submit event listener to the form
form.addEventListener('submit', handleSubmit);

// Function to populate form fields from local storage on page load
function populateFormFromLocalStorage() {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const feedbackData = JSON.parse(storedData);
    input.value = feedbackData.email || '';
    textarea.value = feedbackData.message || '';
  } else {
    input.value = '';
    textarea.value = '';
  }
}

// Add an event listener for when the page loads
window.addEventListener('load', populateFormFromLocalStorage);

// Function to handle the 'input' event
function handleInput() {
  const feedbackData = {
    email: input.value,
    message: textarea.value,
  };

  // Store the 'feedbackData' object in local storage under the key 'feedback-form-state'
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
}

// Add 'input' event listeners to both the input and textarea elements
input.addEventListener('input', handleInput);
textarea.addEventListener('input', handleInput);
