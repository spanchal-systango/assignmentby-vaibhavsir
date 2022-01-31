
let inp = document.getElementById("inp");
let result = document.getElementById("result");
let uniqueCharacter = [];


function checkElement(){
	
	for( let ch of inp.value){
		//console.log(ch);
		if(!uniqueCharacter.includes(ch)){
			uniqueCharacter.push(ch);
		}
	}

	//console.log(uniqueCharacter);

	let resString = "";
	for( let ch of uniqueCharacter)
	{
		resString = resString+ch+" ";
	}

	//console.log(resString);

	result.innerText = resString;
}


