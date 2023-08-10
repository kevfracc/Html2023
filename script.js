document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuBar = document.querySelector(".menu-bar");

    menuToggle.addEventListener("click", function () {
        menuBar.classList.toggle("menu-open");
        menuToggle.classList.toggle("button-open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the input values from Local Storage
    const leftInput = document.getElementById("left-input");
    const rightInput = document.getElementById("right-input");
    const leftStoredInput = document.getElementById("left-stored-input");
    const rightStoredInput = document.getElementById("right-stored-input");

    leftInput.value = localStorage.getItem("leftInputValue") || "";
    rightInput.value = localStorage.getItem("rightInputValue") || "";

    // Display the stored input values below the input elements
    leftStoredInput.textContent = leftInput.value;
    rightStoredInput.textContent = rightInput.value;

    // Store the input values to Local Storage when the inputs change
    leftInput.addEventListener("input", function () {
        localStorage.setItem("leftInputValue", leftInput.value);
        leftStoredInput.textContent = leftInput.value;
    });

    rightInput.addEventListener("input", function () {
        localStorage.setItem("rightInputValue", rightInput.value);
        rightStoredInput.textContent = rightInput.value;
    });
});

const loginButton = document.getElementById("login-button");
    
    loginButton.addEventListener("click", function () {
        // Add your login functionality here
        alert("Login button clicked!");
    });

    