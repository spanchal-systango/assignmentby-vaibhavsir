
let inp = document.getElementById("inp");
let result = document.getElementById("result");


function check(){
	let rows = parseInt(inp.value);
	result.innerHTML = "";
	
	for( let i = 0; i<rows; i++){
		currentLine = "";

		for( let spaces = 0; spaces < rows-i-1; spaces++)
		{ currentLine=currentLine+" "; }

		for( let stars = 0; stars < (2*i)+1; stars++)
		{ currentLine=currentLine+"*"; }

		result.innerHTML = result.innerHTML+"<br>"+currentLine;
		console.log(currentLine);
	}
	
}


/*

let inp = document.getElementById("inp");
let result = document.getElementById("result");

function evenOdd( num ){

	if( num === 0 ){
		return "even";
	}
	else if( num === 1){
		return "odd";
	}
	else{
		return evenOdd(num-2);
	}

}

function check(){
	let rows = parseInt(inp.value);
	result.innerHTML = evenOdd(parseInt(inp.value));
}

*/