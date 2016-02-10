var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

var generatedColors = generateRandomColors(6);
var pickedColor = pickColor(generatedColors);

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = generatedColors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;

		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.background = pickedColor;
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});	
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(colors){
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}

function generateRandomColors(numberOfColors){
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