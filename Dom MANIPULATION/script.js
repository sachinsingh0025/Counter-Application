// 1. Initialize the counter value
let count = 0;

// 2. Get DOM elements
const display = document.getElementById('display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

/**
 * Function to update the DOM (Display)
 */
function updateDisplay() {
    display.textContent = count;
    
    // Optional: Count value के आधार पर स्टाइलिंग बदलें
    if (count > 0) {
        display.style.color = 'var(--color-accent)'; // Positive: Accent color
    } else {
        display.style.color = 'var(--color-text-secondary)'; // Zero: Muted color
    }
}

// 3. Implement Event Listeners

// INCREMENT (+1)
incrementBtn.addEventListener('click', function() {
    count++;
    updateDisplay();
});

// DECREMENT (-1)
decrementBtn.addEventListener('click', function() {
    // Ensure the counter doesn't go below zero (0 से कम नहीं जाएगा)
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

// RESET (0 पर सेट करें)
resetBtn.addEventListener('click', function() {
    count = 0;
    updateDisplay();
});

// Initialize the display when the page loads
updateDisplay();