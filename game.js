var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");

var pickedColor = colors[3];

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;

		//compare color to pickedColor
		if(clickedColor === pickedColor){
			alert("Correct!");
		}else{
			alert("nope");
		}
	});
}