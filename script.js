
//TODO

// POPUP
//Have the click be recorded, then total sum presented on next screen

//HEADER
//search bar for hidden redirects (scrap site etc.)

//STORAGE
// function new_comment (message, user, position [values=1,2,3,4], time? etc.) {get a rank/timeofpost/position/highscore compared to others}

// RESULTS
//left-percentage; right-percentage
// today's count; this weeks count; all time count; general vs premium count; ALL DIFFERENT FLAIRES 
///percentage bar showing whos winning (60/40 left is winning, left's bar is across 60% of the screen)




document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuBar = document.querySelector(".menu-bar");

    menuToggle.addEventListener("click", function () {
        menuBar.classList.toggle("menu-open");
        menuToggle.classList.toggle("button-open");
    });
});

function openURL() {
    window.open("https://www.cursor.so/pricing#faq");
}
document.addEventListener("DOMContentLoaded", function() {
    var welcomePopup = document.getElementById("welcome-popup");
    var okButton = document.getElementById("ok-button");

    okButton.addEventListener("click", function() {
        welcomePopup.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var welcomePopup = document.getElementById("welcome-popup"); // other popup
    var okButton = document.getElementById("fu-button");

    okButton.addEventListener("click", function() {
        welcomePopup.style.display = "none"; //something else displayed
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the input values from Local Storage
    const leftInput = document.getElementById("left-input");
    const rightInput = document.getElementById("right-input");
    const leftStoredInput = document.getElementById("left-stored-input");
    const rightStoredInput = document.getElementById("right-stored-input");
    const leftScore = document.getElementById("left-score");
    const rightScore = document.getElementById("right-score");
 
    leftInput.value = localStorage.getItem("leftInputValue") || "";
    rightInput.value = localStorage.getItem("rightInputValue") || "";
    
    // Display the stored input values below the input elements
    leftStoredInput.textContent = leftInput.value;
    rightStoredInput.textContent = rightInput.value;
    leftScore.textContent = leftInput.value !== "" ? 1 : 0;
    rightScore.textContent = rightInput.value !== "" ? 1 : 0;

    // Store the input values to Local Storage when the inputs change
    leftInput.addEventListener("input", function () {
        localStorage.setItem("leftInputValue", leftInput.value);
        leftStoredInput.textContent = leftInput.value;
        leftScore.textContent = leftInput.value !== "" ? 1 : 0;
    });

    rightInput.addEventListener("input", function () {
        localStorage.setItem("rightInputValue", rightInput.value);
        rightStoredInput.textContent = rightInput.value;
        rightScore.textContent = rightInput.value !== "" ? 1 : 0;
    });
});


const loginButton = document.getElementById("login-button");
    
    loginButton.addEventListener("click", function () {
        // Add your login functionality here
        alert("Login button clicked!");
    });
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-button");
        const menuContainer = document.getElementById("menu-container");
        const navTabs = document.querySelectorAll(".nav-tabs li a");
    
        menuToggle.addEventListener("click", function () {
            menuContainer.innerHTML = ""; // Clear existing links
    
            if (!menuContainer.classList.contains("menu-open")) {
                menuContainer.classList.add("menu-open");
    
                navTabs.forEach(link => {
                    const navLinkElement = document.createElement("a");
                    navLinkElement.href = link.href;
                    navLinkElement.textContent = link.textContent;
    
                    menuContainer.appendChild(navLinkElement);
                });
            } else {
                menuContainer.classList.remove("menu-open");
            }
        });
    });
    