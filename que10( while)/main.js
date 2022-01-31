
let inp = document.getElementById("inp");
let result = document.getElementById("result");


function check(){
	let rows = parseInt(inp.value);
	result.innerHTML = "";
	
	let i = 0;
	while(i<rows)
	{
		currentLine = "";

		let spaces = 0;
		while(spaces < rows-i-1){
			currentLine=currentLine+" ";
			spaces++;
		}

		let stars = 0;
		while(stars < (2*i)+1){
			currentLine=currentLine+"*";
			stars++;
		}

		result.innerHTML = result.innerHTML+"<br>"+currentLine;
		console.log(currentLine);

		i++;
	}
	
}
