const EASY = 3;
const NORMAL = 6;
const HARD = 9;

var mode = NORMAL;

var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var normalButton = document.getElementById("normal");
var hardButton = document.getElementById("hard");

resetButton.addEventListener("click", start);

easyButton.addEventListener("click", function(){
	mode = EASY;
	this.classList.add("selected");
	normalButton.classList.remove("selected");
	hardButton.classList.remove("selected");
	start();
});

normalButton.addEventListener("click", function(){
	mode = NORMAL;
	this.classList.add("selected");	
	easyButton.classList.remove("selected");
	hardButton.classList.remove("selected");
	start();
});

hardButton.addEventListener("click", function(){
	mode = HARD;
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	normalButton.classList.remove("selected");
	start();
});

start();

function start() {
	h1.style.background = "#232323";
	generatedColors = generateRandomColors(mode);
	pickedColor = pickColor(generatedColors);
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){
		//adding initial colors to squares and hiding the rest of them
		if(generatedColors[i]){
			squares[i].classList.remove("hidden");
			squares[i].style.background = generatedColors[i];
		}else{
			squares[i].classList.add("hidden");
		}		

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;

			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColor(pickedColor);
				h1.style.background = pickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}	
}

function changeColor(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(colors) {
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}

function generateRandomColors(numberOfColors) {
	//make array
	var arr = [];
	//build array
	for(var i = 0; i < numberOfColors; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";  
}