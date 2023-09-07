document.addEventListener("DOMContentLoaded", function() {
    var okButton = document.getElementById("left-button");
    var fuButton = document.getElementById("right-button");
    var leftScore = document.getElementById("left-score");
    var rightScore = document.getElementById("right-score");

    leftScore.textContent = "0";
    rightScore.textContent = "0";


    okButton.addEventListener("click", function() {
        leftScore.textContent = parseInt(leftScore.textContent) + 1;
    });

    fuButton.addEventListener("click", function() {
        rightScore.textContent = parseInt(rightScore.textContent) + 1;
    });
});
