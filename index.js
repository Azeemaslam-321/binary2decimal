// Function to convert binary to decimal
function binaryToDecimal(binaryStr) {
    return parseInt(binaryStr, 2);
}

// Function to update the decimal input field when a valid binary input is provided
function updateDecimal() {
    const binaryInput = document.getElementById("binary");
    const decimalInput = document.getElementById("decimal");

    // Get the value from the binary input field
    const binaryValue = binaryInput.value.trim();

    // Check if the input is a valid binary string
    if (/^[01]+$/.test(binaryValue)) {
        // Convert binary to decimal and display the result
        decimalInput.value = binaryToDecimal(binaryValue);
    } else {
        // Clear the decimal input if the binary input is invalid
        decimalInput.value = "";
    }
}

// Function to handle keypress event on the binary input field
function isValidNumber(event) {
    const key = event.key;
    return key === "0" || key === "1" || key === "Backspace" || key === "Delete";
}

// Add event listeners to the binary input field
const binaryInput = document.getElementById("binary");
binaryInput.addEventListener("input", updateDecimal);
binaryInput.addEventListener("keydown", function (event) { // Changed 'keypress' to 'keydown' to capture Backspace and Delete
    if (!isValidNumber(event)) {
        event.preventDefault();
    }
});

// Function to handle the swap button click event
function swapBinaryDecimal() {
    const binaryInput = document.getElementById("binary");
    const decimalInput = document.getElementById("decimal");

    const binaryValue = binaryInput.value.trim();
    const decimalValue = decimalInput.value.trim();

    // Swap the values between binary and decimal input fields
    binaryInput.value = decimalValue;
    decimalInput.value = binaryValue;
}

// Add event listener to the swap button
const swapButton = document.querySelector(".swap");
swapButton.addEventListener("click", swapBinaryDecimal);

// Initialize an array to store calculation history
const history = [];

// Function to add an item to the history
function addToHistory(binary, decimal) {
    history.push({ binary, decimal });
}

// Function to display the history
function displayHistory() {
    const historyTab = document.querySelector(".history-tab");
    const savedItems = document.querySelector(".saved-items");

    // Clear the existing history items
    savedItems.innerHTML = "";

    // Loop through the history array and create history items
    history.forEach((item, index) => {
        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");
        historyItem.innerHTML = `
            <div class="binary-history">${item.binary}</div>
            <div class="decimal-history">${item.decimal}</div>
        `;

        savedItems.appendChild(historyItem);
    });

    // Show the history tab
    historyTab.style.display = "block";
}

// Function to close the history tab
function closeHistory() {
    const historyTab = document.querySelector(".history-tab");
    historyTab.style.display = "none";
}

// Add event listener to the history button
const historyButton = document.querySelector(".history");
historyButton.addEventListener("click", displayHistory);

// Add event listener to the close button in the history tab
const closeButton = document.querySelector(".close-btn");
closeButton.addEventListener("click", closeHistory);
// Function to convert decimal to binary
function decimalToBinary(decimalValue) {
    return (decimalValue >>> 0).toString(2);
}

// Function to update the binary input field when a valid decimal input is provided
function updateBinary() {
    const binaryInput = document.getElementById("binary");
    const decimalInput = document.getElementById("decimal");

    // Get the value from the decimal input field
    const decimalValue = decimalInput.value.trim();

    // Check if the input is a valid decimal number
    if (!isNaN(decimalValue)) {
        // Convert decimal to binary and display the result
        binaryInput.value = decimalToBinary(decimalValue);
    } else {
        // Clear the binary input if the decimal input is invalid
        binaryInput.value = "";
    }
}

// Add event listener to the decimal input field
const decimalInput = document.getElementById("decimal");
decimalInput.addEventListener("input", updateBinary);
// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to handle cookie consent
function acceptCookies() {
    // Set a cookie to remember the user's choice
    setCookie("cookiesAccepted", "true", 30); // Expires in 30 days

    // Hide the cookies alert
    const cookiesAlert = document.querySelector(".cookies-alert");
    cookiesAlert.style.display = "none";
}

// Add event listener to the "Accept All" button
const acceptButton = document.querySelector(".accept-button button");
acceptButton.addEventListener("click", acceptCookies);

// Function to check if the user has already accepted cookies
function checkCookiesConsent() {
    const cookiesAccepted = getCookie("cookiesAccepted");
    if (cookiesAccepted === "true") {
        // Hide the cookies alert if the user has already accepted
        const cookiesAlert = document.querySelector(".cookies-alert");
        cookiesAlert.style.display = "none";
    }
}

// Function to get the value of a cookie
function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=([^;]+)`);
    return cookieValue ? cookieValue.pop() : null;
}

// Check cookies consent when the page loads
window.addEventListener("load", checkCookiesConsent);
    // Function to clear the input fields
function clearFields() {
    const binaryInput = document.getElementById("binary");
    const decimalInput = document.getElementById("decimal");

    // Clear the binary and decimal input fields
    binaryInput.value = "";
    decimalInput.value = "";
}

// Add event listener to the Clear button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearFields);
                        