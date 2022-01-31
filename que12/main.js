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
