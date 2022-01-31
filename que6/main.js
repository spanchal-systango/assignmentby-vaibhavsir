
let inp = document.getElementById("inp");
let result = document.getElementById("result");


function check(){
	let year = parseInt(inp.value)
	
	if( year % 400 === 0 )
	{
		result.innerText = "Yes, its a leap year";
	}
	else if( year % 100 === 0 )
	{
		result.innerText = "No, its not a leap year";
	}
	else if( year % 4 === 0 )
	{
		result.innerText = "Yes, its a leap year";
	}
	else
	{
		result.innerText = "No, its not a leap year";
	}

}
