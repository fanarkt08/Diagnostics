// Get references to the elements
const editableRectangle = document.getElementById('main-rectangle');
const initialText = document.getElementById('initial-text');
const inputField = document.getElementById('input-field');

// Add an event listener to handle the click inside the rectangle
editableRectangle.addEventListener('click', () => {
    // Hide the initial text and show the input field
    initialText.style.display = 'none';
    inputField.style.display = 'block';

    // Focus on the input field to allow typing immediately
    inputField.focus();
});

// Optionally, you can add an event listener to allow the user to press Enter or click outside to save the input.
inputField.addEventListener('blur', () => {
    // When input loses focus, show the initial text again and hide the input field
    if (inputField.value.trim() !== '') {
        initialText.textContent = inputField.value; // Optionally save the entered value
    }
    inputField.style.display = 'none';
    initialText.style.display = 'block';
});