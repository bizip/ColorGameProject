var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var selected = document.querySelector(".selected");
var h1 = document.querySelector("h1");
var resetBotton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardyBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click", function() {
    hardBtn.classlist.remove("selected");
    easyBtn.classlist.add("selected");
});
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

});
resetBotton.addEventListener("click", function() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
})
var pickedColor = pickColor();
colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "collect";
            resetBotton.textContent = "play Again";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {

            this.style.background = "#232323";
            messageDisplay.textContent = "try again !";
        }


    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}