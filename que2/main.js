
let inp = document.getElementById("inp");
let result = document.getElementById("result");


function converter(){
	let x = inp.value;
	result.innerText = "Binary equivalent will be - "+parseInt(inp.value, 2);
}
