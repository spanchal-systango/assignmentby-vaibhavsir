
let inp = document.getElementById("inp");
let result = document.getElementById("result");
let uniqueCharacter = [];


function checkElement(){
	let longestLength = 0

	console.log(inp.value);

	words = inp.value.split(" ");
	console.log(words);

	for( let word of words){
		if( longestLength < word.length ){
			longestLength = word.length;
		}
	}

	result.innerText = "longest word length is- "+longestLength+"\n";

	for( let word of words){
		if( longestLength === word.length ){
			result.innerText = result.innerText+word+",";
		}
	}

}


