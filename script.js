// We use 'let' for count because its value will change
let count = 0;

// We use 'const' for button and display because we do not reassign these variables
const increaseButton = document.getElementById("increase"); // 'const' because the button element does not change
const countDisplay = document.getElementById("count"); // 'const' because the display element does not change
const decreaseButton = document.getElementById("decrease"); // 'const' because the button element does not change
const resetButton = document.getElementById("reset"); // 'const' because the button element does not change
const capacityWarning = document.querySelector(".capacity-warning"); // 'const' because the element does not change

increaseButton.onclick = function() {
  if (count <= 49) {
    count++; // Increase the count by 1
  }
  countDisplay.textContent = count; // Update the display

  // Show message if max capacity is reached
  if (count === 50) {
    capacityWarning.textContent = "Max capacity reached! (50)";
  } else {
    capacityWarning.textContent = "Max capacity: 50";
  }
};

decreaseButton.onclick = function() {
  if (count > 0) {
    count--; // Decrease the count by 1
  }
  countDisplay.textContent = count; // Update the display

  // Hide message if below max capacity
  if (count < 50) {
    capacityWarning.textContent = "Max capacity: 50";
  }
};

resetButton.onclick = function() {
  count = 0; // Set the count to zero
  countDisplay.textContent = count; // Update the display
  capacityWarning.textContent = "Max capacity: 50"; // Reset the warning message
};
