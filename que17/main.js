
let allowedAge =[24,16,20];
let validUserData = [];

let userDataArr = [
				{name:'A', age:20},
				{name:'B', age:17}, 
				{name:'C', age:24}, 
				{name:'A',age:30},
				{name:'D', age:16},
				{name:'E', age:24}, 
				{name:'F', age:16}, 
				{name:'G', age:16}
			  ];



for( let userData of userDataArr )
{
	// console.log(userDataIndex);
	//console.log(userData["age"]);

	
	if( allowedAge.includes( userData["age"] ))
	{
		//console.log(userData);
		validUserData.push(userData);
	}
	
}


function customeComparator(a, b) {
	const age1 = a.age;
	const age2 = b.age;
	// console.log(age1);	
	// console.log(age2);
	let comparison = 0;

	if (age1 > age2) {
	    comparison = 1;
	} else if (age1 < age2) {
	    comparison = -1;
	}
	return comparison;
}


/*
console.log(userDataArr);
console.log(validUserData);
*/


console.log(validUserData.sort(customeComparator));







