
let inp = document.getElementById("inp");
let result = document.getElementById("result");

let requestPort = ["https://www.","http://www."];
let requestDomain = [".com",".ru",".org",".net",".ir",".in",".uk",".au",".de",".ua",".gov",".io",".edu",".info",".biz"] 

function check(){
	
	let validPort = false;
	let validDomain = false;

	
	for( let x of requestPort){
		if(inp.value.includes(x)){
			validPort = true;
		}
	}
	console.log( validPort );



	for( let x of requestDomain){
		if(inp.value.includes(x)){
			validDomain = true;
		}
	}
	console.log( validDomain );

	
	let res = validPort && validDomain;
	
	if(res === true){
		result.innerText = "Yes, its a valid URL";
	}
	else{
		result.innerText = "No, its not a valid URL";

	}
}