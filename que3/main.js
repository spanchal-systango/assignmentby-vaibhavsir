
let decimalInp = document.getElementById("decimalInp");
let precisionInp = document.getElementById("precisionInp");

let result = document.getElementById("result");


function converter(){
	let x = parseFloat(decimalInp.value);
	result.innerText = x.toFixed(parseInt(precisionInp.value));
}
