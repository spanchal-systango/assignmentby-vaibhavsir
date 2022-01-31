
let inp = document.getElementById("inp");
let result = document.getElementById("result");


function check(){
	let days = parseInt(inp.value)
	
	switch(days){
		case 0: result.innerText = "Sunday";
				break;
		case 1: result.innerText = "Monday";
				break;
		case 2: result.innerText = "Tuesday";
				break;
		case 3: result.innerText = "Wednessday";
				break;
		case 4: result.innerText = "Thurday";
				break;
		case 5: result.innerText = "Friday";
				break;
		case 6: result.innerText = "Saturday";
				break;
		default: result.innerText = "only number 0-6 will give days";
				break;
	}
}
