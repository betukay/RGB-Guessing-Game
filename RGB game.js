var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msgDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var mode = document.querySelectorAll(".mode");

init();

function init(){
	setUpMode();
	setUpSquares();
	reset();
}

function setUpSquares (){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				msgDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors (clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				msgDisplay.textContent = "Try Again!";
			}
		});
	}
}

function setUpMode (){
	for(var i=0; i < mode.length; i++){
		mode[i].addEventListener("click", function() {
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
		})
	}

}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	msgDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
});

function changeColors (color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

//program designates a correct random color
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (num){
	var arr = [];
	for(var i = 0; i < num; i++){
	arr.push(randomColor());
	}
	return arr;
}

function randomColor (){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
