
function randomColor(){
	//alert("alert aaya");

	let colors = ["red", "green", "yellow", "blue", "orange"];

	let randomNum = Math.floor(Math.random() * colors.length);

	document.getElementById("Boxs1").style.backgroundColor = colors[randomNum];
}

