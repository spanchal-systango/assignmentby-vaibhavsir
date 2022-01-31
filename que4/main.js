
let inp = document.getElementById("inp");
let result = document.getElementById("result");


function converter(){
	let boolString = parseInt(inp.value).toString(2);
	let flag = true;

	console.log(boolString);
	// console.log(typeof boolString[0]);
	// console.log(boolString.length >= 2)
	// console.log(boolString[0]==="1")

	if( boolString.length >= 2 && boolString[0]==="1" )
	{	//console.log("if m aya");
		for(let stritr = 1; stritr < boolString.length; stritr++ )
		{   console.log(boolString[stritr]);
			if(boolString[stritr] !== "0"){
				flag = false;
				break;
			}
		}
	}
	else{
		flag = false;
	}

	

	if( flag === true || inp.value == 0)
	{
		result.innerText = "Yes, the number is perfect power of 2";
	}
	else
	{
		result.innerText = "No, the number is  not perfect power of 2";
	}

}
