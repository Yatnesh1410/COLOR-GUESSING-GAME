var numSquares=6;
var colors= generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

resetButton.addEventListener("click",function(){

	colors= generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor= colors[i];
	}
	h1.style.backgroundColor="steelblue";
	this.textContent="New Colors";
});


var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	h1.style.backgroundColor="steelblue";

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	h1.style.backgroundColor="steelblue";


	for(var i=0;i<squares.length;i++){
		
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
		
	}
});

var pickedColor=pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){

		var clickedColor=this.style.backgroundColor;

		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			resetButton.textContent="Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";
		}
	});
}


function changeColors(color){

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];

	for(var i=0; i<num; i++){

		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){

	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}