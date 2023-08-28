
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


function openURL() {
    window.open("https://www.cursor.so/pricing#faq");
}


// const loginButton = document.getElementById("login-button");
    
// loginButton.addEventListener("click", function () {
//     // Add your login functionality here
//     alert("Login button clicked!");
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.getElementById("menu-button");
//     const menuContainer = document.getElementById("menu-container");
//     const navTabs = document.querySelectorAll(".nav-tabs li a");

//     menuToggle.addEventListener("click", function () {
//         menuContainer.innerHTML = ""; // Clear existing links

//         if (!menuContainer.classList.contains("menu-open")) {
//             menuContainer.classList.add("menu-open");

//             navTabs.forEach(link => {
//                 const navLinkElement = document.createElement("a");
//                 navLinkElement.href = link.href;
//                 navLinkElement.textContent = link.textContent;

//                 menuContainer.appendChild(navLinkElement);
//             });
//         } else {
//             menuContainer.classList.remove("menu-open");
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    var welcomePopup = document.getElementById("welcome-popup");
    var okButton = document.getElementById("ok-button");
    var fuButton = document.getElementById("fu-button");
    var leftInput = document.getElementById("left-input");
    var rightInput = document.getElementById("right-input");
    var leftStoredInput = document.getElementById("left-stored-input");
    var rightStoredInput = document.getElementById("right-stored-input");
    var leftScore = document.getElementById("left-score");
    var rightScore = document.getElementById("right-score");

    // Clear the input values and scores
    leftInput.value = "";
    rightInput.value = "";
    leftStoredInput.textContent = "";
    rightStoredInput.textContent = "";
    leftScore.textContent = "0";
    rightScore.textContent = "0";

    // Store the input values to Local Storage when the inputs change
    leftInput.addEventListener("input", function () {
        localStorage.setItem("leftInputValue", leftInput.value);
        leftStoredInput.textContent = leftInput.value;
    });

    rightInput.addEventListener("input", function () {
        localStorage.setItem("rightInputValue", rightInput.value);
        rightStoredInput.textContent = rightInput.value;
    });

    okButton.addEventListener("click", function() {
        var username = document.getElementById("username-input").value;
        localStorage.setItem("username", username);
        welcomePopup.style.display = "none";
        leftScore.textContent = parseInt(leftScore.textContent) + 1;
    });

    fuButton.addEventListener("click", function() {
        var username = document.getElementById("username-input").value;
        localStorage.setItem("username", username);
        welcomePopup.style.display = "none"; //something else displayed
        rightScore.textContent = parseInt(rightScore.textContent) + 1;
    });
});
