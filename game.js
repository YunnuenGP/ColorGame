var gameColors = (function(){
	const BASE_SQUARES = 3;

	var squareNumber = BASE_SQUARES * 2;

	var h1 = document.querySelector('h1');
	var squares = document.getElementsByClassName('square');
	var colorDisplay = document.getElementById('colorDisplay');
	var messageDisplay = document.getElementById('message');
	var resetButton = document.getElementById('reset');
	

	return { init: init } ;


	function init() {	
		setUpModeButtons();
		start();
	}

	function start() {
		messageDisplay.textContent = '';
		resetButton.textContent = 'New Colors';
		h1.style.removeProperty('background');
		generatedColors = generateRandomColors(squareNumber);
		pickedColor = pickColor(generatedColors);
		colorDisplay.textContent = pickedColor;

		setUpSquares();
	}

	function setUpModeButtons() {
		var modes = document.getElementsByClassName('mode');

		resetButton.addEventListener('click', start);

		for(var i = 0; i < modes.length; i++){
			modes[i].addEventListener('click', function(){
				console.log(this);			
				squareNumber = getSquaresForMode(modes, this);
				console.log(squareNumber);
				removeClassFromElements(modes, 'selected');
				this.classList.add('selected');
				start();
			});
		}
	}

	function setUpSquares() {
		for (var i = 0; i < squares.length; i++){
			//adding initial colors to squares and hiding the rest of them
			if(generatedColors[i]){
				squares[i].classList.remove('hidden');
				squares[i].style.background = generatedColors[i];
			}else{
				squares[i].classList.add('hidden');
			}		

			//add click listeners to squares
			squares[i].addEventListener('click', function(){
				//grab color of clicked square
				var clickedColor = this.style.background;

				//compare color to pickedColor
				if(clickedColor === pickedColor){
					messageDisplay.textContent = 'Correct!';
					changeColor(pickedColor);
					h1.style.background = pickedColor;
					resetButton.textContent = 'Play Again?';
				}else{
					this.style.background = '#232323';
					messageDisplay.textContent = 'Try Again!';
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
		//pick a 'red' from 0 - 255
		var r = Math.floor(Math.random() * 256);
		//pick a 'green' from 0 - 255
		var g = Math.floor(Math.random() * 256);
		//pick a 'blue' from 0 - 255
		var b = Math.floor(Math.random() * 256);

		return 'rgb(' + r + ', ' + g + ', ' + b +')';  
	}

	function getSquaresForMode (array, element) {
		var mode = -1;
		for(var i = 0; i < array.length; i++)
		{
			if(array[i] === element)
			{
				mode = i;
			}				
		}
		return (mode + 1) * BASE_SQUARES;
	}

	function removeClassFromElements(elements, clss){
		for(var i = 0; i < elements.length; i++){
			elements[i].classList.remove(clss);
		}
	}
}());

gameColors.init();
