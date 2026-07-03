// 1. Select the input display and all buttons
const display = document.getElementById('number_input');
const buttons = document.querySelectorAll('.button_container button');

// 2. Loop through each button and add a click listener
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // e.target.innerText gets the exact text inside the clicked button (like "7", "+", "AC")
        const buttonText = e.target.innerText;

        // 3. Handle the logic based on what was clicked
        if (buttonText === 'AC') {
            display.value = ''; // Clear display
        } else if (buttonText === 'DE') {
            display.value = display.value.toString().slice(0, -1); // Delete last character
        } else if (buttonText === '=') {
            try {
                // Evaluate the expression (you can use eval or a custom parser later)
                display.value = eval(display.value); 
            } catch {
                display.value = 'Error';
            }
        } else {
            // For numbers and operators, just append them to the input field
            display.value += buttonText;
        }
    });
});