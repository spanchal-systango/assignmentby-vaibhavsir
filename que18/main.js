function SwapElement(){
	let box1 = document.getElementById("swapBoxs1");
	let box2 = document.getElementById("swapBoxs2"); 

	let tempText = box1.innerText;
	box1.innerText = box2.innerText;
	box2.innerText = tempText;

	
	let tempColor = window.getComputedStyle(box1).backgroundColor;
	box1.style.backgroundColor = window.getComputedStyle(box2).backgroundColor;
	box2.style.backgroundColor = tempColor;
}
